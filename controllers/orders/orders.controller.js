const { prisma } = require("@/configs/prisma");
const paypal = require("paypal-rest-sdk");
const { v4: uuidv4 } = require("uuid");
paypal.configure({
  mode: "sandbox",
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.SECRET_KEY,
});
const {
  createSuccessResponse,
  deleteSuccessResponse,
  okResponse,
  forbiddenResponse,
  badRequestResponse,
} = require("@/constants/responses");
const { orderEmail } = require("@/email/order-email");

const getOrder = async (req, res, next) => {
  try {
    const result = await prisma.orders.findMany({
      include: {
        items: {
          select: {
            books: {
              select: {
                quantity: true,
                book: {
                  select: {
                    id: true,
                    title: true,
                    description: true,
                    price: true,
                  },
                },
              },
            },
            merchandises: {
              select: {
                quantity: true,
                merchandise: {
                  select: {
                    id: true,
                    title: true,
                    description: true,
                    category: true,
                    price: true,
                    sizes: {
                      select: {
                        size: {
                          select: {
                            name: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        customer: {
          select: {
            first_name: true,
            last_name: true,
            email: true,
            phone_number: true,
            address: true,
          },
        },
      },
    });
    const response = okResponse(result);
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};
const getOrderById = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const result = await prisma.orders.findUnique({
      where: { id: Number(orderId) },
      include: {
        items: {
          select: {
            books: {
              select: {
                quantity: true,
                book: {
                  select: {
                    id: true,
                    title: true,
                    description: true,
                    price: true,
                  },
                },
              },
            },
            merchandises: {
              select: {
                quantity: true,
                merchandise: {
                  select: {
                    id: true,
                    title: true,
                    description: true,
                    category: true,
                    sizes: {
                      select: {
                        size: {
                          select: {
                            name: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        customer: {
          select: {
            email: true,
          },
        },
      },
    });
    const response = okResponse(result);
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

const getOrderByUserSecret = async (req, res, next) => {
  try {
    const { secret_id } = req.params;
    const result = await prisma.orders.findUnique({
      where: {
        secret_id: secret_id,
      },
      include: {
        items: {
          select: {
            books: {
              select: {
                quantity: true,
                book: {
                  select: {
                    id: true,
                    title: true,
                    description: true,
                    price: true,
                  },
                },
              },
            },
            merchandises: {
              select: {
                quantity: true,
                merchandise: {
                  select: {
                    id: true,
                    title: true,
                    description: true,
                    category: true,
                    sizes: {
                      select: {
                        size: {
                          select: {
                            name: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
    let response;
    if (result) {
      response = okResponse(result);
    } else {
      response = forbiddenResponse("Inavlid Id");
    }
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

const createOrder = async (req, res, next) => {
  try {
    const {
      email,
      first_name,
      last_name,
      phone_number,
      address,
      books,
      merchandises,
    } = req.body;

    const secret_id = uuidv4();

    const itemList = [];

    const _books = await prisma.books.findMany({
      where: {
        id: {
          in: books.map((book) => book.book_id),
        },
      },
    });

    const _merchandises = await prisma.merchandises.findMany({
      where: {
        id: {
          in: merchandises.map((merchandise) => merchandise.merchandise_id),
        },
      },
    });

    _books.forEach((book) => {
      itemList.push({
        name: book.title,
        description: book.description,
        price: book.price.toFixed(2),
        currency: "USD",
        quantity: JSON.stringify(
          books.find((_book) => _book.book_id === book.id).quantity
        ),
      });
    });

    _merchandises.forEach((merchandise) => {
      itemList.push({
        name: merchandise.title,
        description: merchandise.description,
        price: merchandise.price.toFixed(2),
        currency: "USD",
        quantity: JSON.stringify(
          merchandises.find(
            (_merchandise) => _merchandise.merchandise_id === merchandise.id
          ).quantity
        ),
      });
    });

    const sub_total = itemList.reduce((total, currentItem) => {
      return total + Number(currentItem.price) * Number(currentItem.quantity);
    }, 0);

    const physical_books = _books.filter(
      (book) => book.type === "PHYSICAL_BOOK"
    );

    const book_shipping_cost = 4.25 + (physical_books.count - 1) * 0.72;
    const merchandise_shipping_cost = 3.5 + (_merchandises.count - 1) * 0.56;

    const total_shipping_cost = book_shipping_cost + merchandise_shipping_cost;

    const discount =
      _books.length > 4
        ? ((sub_total + total_shipping_cost) * 0.17).toFixed(2)
        : 0;

    const total_amount = sub_total + total_shipping_cost - discount;

    const customer = await prisma.customers.create({
      data: {
        email,
        first_name,
        last_name,
        phone_number,
        address,
        orders: {
          create: {
            secret_id,
            sub_total,
            shipping_cost: total_shipping_cost,
            discount: Number(discount),
            total_amount,
            items: {
              create: {
                books: {
                  createMany: { data: books },
                },
                merchandises: {
                  createMany: { data: merchandises },
                },
              },
            },
          },
        },
      },
      select: {
        orders: {
          select: {
            secret_id: true,
          },
        },
      },
    });

    const create_payment_json = {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      redirect_urls: {
        return_url: `https://1rt4xlwb-3000.inc1.devtunnels.ms/api/admin/order/orderSuccess?secretId=${secret_id}`,
        cancel_url:
          "https://1rt4xlwb-3000.inc1.devtunnels.ms/checkout/payment_cancled",
      },
      transactions: [
        {
          invoice_number: String(customer.orders[0].secret_id),
          item_list: {
            items: itemList,
          },
          amount: {
            currency: "USD",
            total: String(total_amount),
            details: {
              subtotal: String(sub_total),
              shipping: String(total_shipping_cost),
              shipping_discount: String(discount),
            },
          },
          address: {
            line1: address,
          },
          description: "This is the payment description.",
        },
      ],
    };

    paypal.payment.create(create_payment_json, (error, payment) => {
      if (error) {
        throw error;
      } else {
        const link = payment.links.find((link) => link.rel === "approval_url");
        const response = createSuccessResponse({ url: link.href });
        return res.status(response.status.code).json(response);
      }
    });
  } catch (error) {
    next(error);
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const result = await prisma.orders.delete({
      where: {
        id: Number(orderId),
      },
    });

    const response = deleteSuccessResponse(result);
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};
const updateOrder = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const result = await prisma.orders.update({
      where: {
        id: Number(orderId),
      },
      data: {
        ...req.body,
      },
    });

    const response = deleteSuccessResponse(result);
    return res.status(response.status.code).json(response);
  } catch (error) {
    console.log(error);
  }
};

const orderSuccess = async (req, res, next) => {
  const { secretId } = req.query;
  try {
    const order = await prisma.orders.findUnique({
      where: {
        secret_id: secretId,
      },
      include: {
        customer: true,
        items: {
          include: {
            books: {
              include: {
                book: {
                  include: {
                    book_download_urls: true,
                  },
                },
              },
            },
            merchandises: {
              include: {
                merchandise: true,
              },
            },
          },
        },
      },
    });

    if (!order) {
      const response = badRequestResponse("Invalid order id.");
      return res.status(response.status.code).json(response);
    }

    if (order.fulfilled) {
      const response = okResponse("Already paid.");
      return res.status(response.status.code).json(response);
    }

    const physical_books = [];
    const e_books = [];
    const audio_books = [];

    order.items.books.forEach((book) => {
      if (book.book.type === "PHYSICAL_BOOK") physical_books.push(book.book);
      else if (book.book.type === "E_BOOK") e_books.push(book.book);
      else if (book.book.type === "AUDIO_BOOK") audio_books.push(book.book);
    });

    const physical_books_count = physical_books.length;
    const merchandises_count = order.items.merchandises.length;

    const is_shipping_required = Boolean(
      physical_books_count || merchandises_count
    );

    await prisma.orders.update({
      where: {
        secret_id: secretId,
      },
      data: {
        payment_status: true,
        fulfilled: !is_shipping_required,
      },
    });

    const items = order.items;
    const customerEmail = order.customer.email;

    orderEmail(customerEmail, items.books, items.merchandises);
    return res.redirect(
      `https://5jvl6g41-3000.inc1.devtunnels.ms/checkout/${secretId}`
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getOrder,
  getOrderById,
  getOrderByUserSecret,
  createOrder,
  deleteOrder,
  updateOrder,
  orderSuccess,
};
