async function orderTemplete(books, merchandises) {
  return `
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <!-- Order confirmation email template for Shopify -->
    <style type="text/css" data-premailer="ignore">
      html,
      body {
        margin: 0 auto !important;
        padding: 0 !important;
        width: 100% !important;
        height: 100% !important;
      }
      /* What it does: Stops email clients resizing small text. */
      * {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      /* What it does: Forces Outlook.com to display emails full width. */
      .ExternalClass {
        width: 100%;
      }
      /* What is does: Centers email on Android 4.4 */
      div[style*="Margin: 16px 0"] {
        margin: 0 !important;
      }
      /* What it does: Stops Outlook from adding extra spacing to tables. */
      table,
      th {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      /* What it does: Fixes Outlook.com line height. */
      .ExternalClass,
      .ExternalClass * {
        line-height: 100% !important;
      }
      /* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */
      table {
        border-spacing: 0 !important;
        border-collapse: collapse !important;
        border: none;
        margin: 0 auto;
      }
      div[style*="Margin: 16px 0"] {
        margin: 0 !important;
      }
      /* What it does: Uses a better rendering method when resizing images in IE. */
      img {
        -ms-interpolation-mode: bicubic;
      }
      /* What it does: Overrides styles added when Yahoo's auto-senses a link. */
      .yshortcuts a {
        border-bottom: none !important;
      }
      /* What it does: Overrides blue, underlined link auto-detected by iOS Mail. */
      /* Create a class for every link style needed; this template needs only one for the link in the footer. */
      /* What it does: A work-around for email clients meddling in triggered links. */
      *[x-apple-data-detectors],  /* iOS */
          .x-gmail-data-detectors,    /* Gmail */
          .x-gmail-data-detectors *,
          .aBn {
        border-bottom: none !important;
        cursor: default !important;
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }

      /* What it does: Prevents Gmail from displaying an download button on large, non-linked images. */
      .a6S {
        display: none !important;
        opacity: 0.01 !important;
      }
      /* If the above doesn't work, add a .g-img class to any image in question. */
      img.g-img + div {
        display: none !important;
      }
      /* What it does: Prevents underlining the button text in Windows 10 */
      a,
      a:link,
      a:visited {
        color: #ecba78;
        text-decoration: none !important;
      }
      .header a {
        color: #c3c3c3;
        text-decoration: none;
        text-underline: none;
      }
      .main a {
        color: #ecba78;
        text-decoration: none;
        text-underline: none;
        word-wrap: break-word;
      }
      .main .section.customer_and_shipping_address a,
      .main .section.shipping_address_and_fulfillment_details a {
        color: #666363;
        text-decoration: none;
        text-underline: none;
        word-wrap: break-word;
      }
      .footer a {
        color: #ecba78;
        text-decoration: none;
        text-underline: none;
      }

      /* What it does: Overrides styles added images. */
      img {
        border: none !important;
        outline: none !important;
        text-decoration: none !important;
      }
      /* What it does: Fixes fonts for Google WebFonts; */
      [style*="Karla"] {
        font-family: "Karla", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Arial, sans-serif !important;
      }
      [style*="Karla"] {
        font-family: "Karla", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Arial, sans-serif !important;
      }
      [style*="Karla"] {
        font-family: "Karla", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Arial, sans-serif !important;
      }
      [style*="Playfair Display"] {
        font-family: "Playfair Display", Georgia, serif !important;
      }
      td.menu_bar_1 a:hover,
      td.menu_bar_6 a:hover {
        color: #ecba78 !important;
      }
      th.related_product_wrapper.first {
        border-right: 13px solid #ffffff;
        padding-right: 6px;
      }
      th.related_product_wrapper.last {
        border-left: 13px solid #ffffff;
        padding-left: 6px;
      }
    </style>
    <link
      href="https://fonts.googleapis.com/css?family=Karla:400,700%7CPlayfair+Display:700,400%7CKarla:700,400%7CKarla:700,700"
      rel="stylesheet"
      type="text/css"
      data-premailer="ignore"
    />
    <!--<![endif]-->
    <style type="text/css" data-premailer="ignore">
      /* Media Queries */
      /* What it does: Removes right gutter in Gmail iOS app */
      @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
        /* iPhone 6 and 6+ */
        .container {
          min-width: 375px !important;
        }
      }
      /* Main media query for responsive styles */
      @media only screen and (max-width: 480px) {
        /* What it does: Overrides email-container's desktop width and forces it into a 100% fluid width. */
        .email-container {
          width: 100% !important;
          min-width: 100% !important;
        }
        .section > th {
          padding: 13px 26px 13px 26px !important;
        }
        .section.divider > th {
          padding: 26px 26px !important;
        }
        .main .section:first-child > th,
        .main .section:first-child > td {
          padding-top: 26px !important;
        }
        .main .section:nth-last-child(2) > th,
        .main .section:nth-last-child(2) > td {
          padding-bottom: 52px !important;
        }
        .section.recommended_products > th,
        .section.discount > th {
          padding: 26px 26px !important;
        }
        /* What it does: Forces images to resize to the width of their container. */
        img.fluid,
        img.fluid-centered {
          width: 100% !important;
          min-width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
          margin: auto !important;
          box-sizing: border-box;
        }
        /* and center justify these ones. */
        img.fluid-centered {
          margin: auto !important;
        }

        /* What it does: Forces table cells into full-width rows. */
        th.stack-column,
        th.stack-column-left,
        th.stack-column-center,
        th.related_product_wrapper,
        .column_1_of_2,
        .column_2_of_2 {
          display: block !important;
          width: 100% !important;
          min-width: 100% !important;
          direction: ltr !important;
          box-sizing: border-box;
        }
        /* and left justify these ones. */
        th.stack-column-left {
          text-align: left !important;
        }
        /* and center justify these ones. */
        th.stack-column-center,
        th.related_product_wrapper {
          text-align: center !important;
          border-right: none !important;
          border-left: none !important;
        }
        .column_button,
        .column_button > table,
        .column_button > table th {
          width: 100% !important;
          text-align: center !important;
          margin: 0 !important;
        }
        .column_1_of_2 {
          padding-bottom: 26px !important;
        }
        .column_1_of_2 th {
          padding-right: 0 !important;
        }
        .column_2_of_2 th {
          padding-left: 0 !important;
        }
        .column_text_after_button {
          padding: 0 13px !important;
        }
        /* Adjust product images */
        th.table-stack {
          padding: 0 !important;
        }
        th.product-image-wrapper {
          padding: 26px 0 13px 0 !important;
        }
        img.product-image {
          width: 240px !important;
          max-width: 240px !important;
        }
        tr.row-border-bottom th.product-image-wrapper {
          border-bottom: none !important;
        }
        th.related_product_wrapper.first,
        th.related_product_wrapper.last {
          padding-right: 0 !important;
          padding-left: 0 !important;
        }
        .text_banner th.banner_container {
          padding: 13px !important;
        }
        .mobile_app_download .column_1_of_2 .image_container {
          padding-bottom: 0 !important;
        }
        .mobile_app_download .column_2_of_2 .image_container {
          padding-top: 0 !important;
        }
      }
    </style>
    <style type="text/css" data-premailer="ignore">
      /* Custom Media Queries */
      @media only screen and (max-width: 480px) {
        .column_logo {
          display: block !important;
          width: 100% !important;
          min-width: 100% !important;
          direction: ltr !important;
          text-align: center !important;
        }
        p,
        .column_1_of_2 th p,
        .column_2_of_2 th p,
        .order_notes *,
        .invoice_link * {
          text-align: center !important;
        }
        .line-item-description p {
          text-align: left !important;
        }
        .line-item-price p,
        .line-item-qty p,
        .line-item-line-price p {
          text-align: right !important;
        }
        h1,
        h2,
        h3,
        .column_1_of_2 th,
        .column_2_of_2 th {
          text-align: center !important;
        }
        td.order-table-title {
          text-align: center !important;
        }
        .footer .column_1_of_2 {
          border-right: 0 !important;
          border-bottom: 0 !important;
        }
        .footer .section_wrapper_th {
          padding: 0 17px;
        }
      }
    </style>
  </head>
  <body
    class="body"
    id="body"
    leftmargin="0"
    topmargin="0"
    marginwidth="0"
    marginheight="0"
    bgcolor="#ecba78"
    style="
      -webkit-text-size-adjust: none;
      -ms-text-size-adjust: none;
      margin: 0;
      padding: 0;
    "
  >
    <!--[if !mso 9]><!-->
    <div
      style="
        display: none;
        overflow: hidden;
        line-height: 1px;
        max-height: 0px;
        max-width: 0px;
        opacity: 0;
        mso-hide: all;
      "
    >
      We've got your order! Your world is about to look a whole lot better.We'll
      drop you another email when your order ships.
    </div>
    <!--<![endif]-->
    <!-- BEGIN: CONTAINER -->
    <table
      class="container container_full"
      cellpadding="0"
      cellspacing="0"
      border="0"
      width="100%"
      style="border-collapse: collapse; min-width: 100%"
      role="presentation"
      bgcolor="#ecba78"
    >
      <tbody>
        <tr>
          <th valign="top" style="mso-line-height-rule: exactly">
            <center style="width: 100%">
              <table
                border="0"
                width="600"
                cellpadding="0"
                cellspacing="0"
                align="center"
                style="
                  width: 600px;
                  min-width: 600px;
                  max-width: 600px;
                  margin: auto;
                "
                class="email-container"
                role="presentation"
              >
                <tbody>
                  <tr>
                    <th valign="top" style="mso-line-height-rule: exactly">
                      <!-- BEGIN : SECTION : HEADER -->
                      <table
                        class="section_wrapper header"
                        data-id="header"
                        id="section-header"
                        border="0"
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        align="center"
                        style="min-width: 100%"
                        role="presentation"
                        bgcolor="#ffffff"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="section_wrapper_th"
                              style="
                                mso-line-height-rule: exactly;
                                padding-top: 52px;
                                padding-bottom: 2px;
                              "
                              bgcolor="#ffffff"
                            >
                              <table
                                border="0"
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                                align="center"
                                style="min-width: 100%"
                                role="presentation"
                              >
                                <tbody>
                                  <tr>
                                    <th
                                      class="column_logo"
                                      style="
                                        mso-line-height-rule: exactly;
                                        padding-top: 13px;
                                        padding-bottom: 0px;
                                      "
                                      align="center"
                                      bgcolor="#ffffff"
                                    >
                                      <!-- Logo : BEGIN -->
                                      <a
                                        href="https://el-chaparro-mu.vercel.app/"
                                        target="_blank"
                                        style="
                                          color: #c3c3c3;
                                          text-decoration: none !important;
                                          text-underline: none;
                                        "
                                      >
                                        <img
                                          src="https://el-chaparro-mu.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.39fcee46.png&w=256&q=75"
                                          class="logo"
                                          width="120"
                                          border="0"
                                          style="
                                            width: 120px;
                                            height: auto !important;
                                            display: block;
                                            text-align: center;
                                            margin: auto;
                                          "
                                        />
                                      </a>
                                      <!-- Logo : END -->
                                    </th>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <!-- END : SECTION : HEADER -->
                      <!-- BEGIN : SECTION : MAIN -->
                      <table
                        class="section_wrapper main"
                        data-id="main"
                        id="section-main"
                        border="0"
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        align="center"
                        style="min-width: 100%"
                        role="presentation"
                        bgcolor="#ffffff"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="section_wrapper_th"
                              style="mso-line-height-rule: exactly"
                              bgcolor="#ffffff"
                            >
                              <table
                                border="0"
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                                align="center"
                                style="min-width: 100%"
                                id="mixContainer"
                                role="presentation"
                              >
                                <!-- BEGIN SECTION: Heading -->
                                <tbody>
                                  <tr
                                    id="section-1468266"
                                    class="section heading"
                                  >
                                    <th
                                      style="
                                        mso-line-height-rule: exactly;
                                        color: #4b4b4b;
                                        padding: 26px 52px 13px;
                                      "
                                      bgcolor="#ffffff"
                                    >
                                      <table
                                        cellspacing="0"
                                        cellpadding="0"
                                        border="0"
                                        width="100%"
                                        role="presentation"
                                        style="color: #4b4b4b"
                                        bgcolor="#ffffff"
                                      >
                                        <tbody>
                                          <tr
                                            style="color: #4b4b4b"
                                            bgcolor="#ffffff"
                                          >
                                            <th
                                              style="
                                                mso-line-height-rule: exactly;
                                                color: #4b4b4b;
                                              "
                                              bgcolor="#ffffff"
                                              valign="top"
                                            >
                                              <h1
                                                data-key="1468266_heading"
                                                style="
                                                  font-family: Georgia, serif,
                                                    'Playfair Display';
                                                  font-size: 28px;
                                                  line-height: 46px;
                                                  font-weight: 700;
                                                  color: #4b4b4b;
                                                  text-transform: none;
                                                  background-color: #ffffff;
                                                  margin: 0;
                                                "
                                              >
                                                Order Confirmation
                                              </h1>
                                            </th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </th>
                                  </tr>
                                  <!-- END SECTION: Heading -->
                                  <!-- BEGIN SECTION: Introduction -->
                                  <tr
                                    id="section-1468267"
                                    class="section introduction"
                                  >
                                    <th
                                      style="
                                        mso-line-height-rule: exactly;
                                        padding: 13px 52px;
                                      "
                                      bgcolor="#ffffff"
                                    >
                                      <p
                                        style="
                                          mso-line-height-rule: exactly;
                                          font-family: -apple-system,
                                            BlinkMacSystemFont, 'Segoe UI',
                                            Arial, 'Karla';
                                          font-size: 16px;
                                          line-height: 26px;
                                          font-weight: 400;
                                          color: #666363;
                                          margin: 0 0 13px;
                                        "
                                        align="center"
                                      >
                                        <span
                                          data-key="1468267_greeting_text"
                                          style="
                                            text-align: center;
                                            font-family: -apple-system,
                                              BlinkMacSystemFont, 'Segoe UI',
                                              Arial, 'Karla';
                                            font-size: 16px;
                                            line-height: 26px;
                                            font-weight: 400;
                                            color: #666363;
                                          "
                                        >
                                          Hey
                                        </span>
                                        ${
                                          body?.user_info?.first_name +
                                          " " +
                                          body?.user_info?.last_name
                                        },
                                      </p>

                                      <p
                                        data-key="1468267_introduction_text"
                                        class="text"
                                        style="
                                          mso-line-height-rule: exactly;
                                          font-family: -apple-system,
                                            BlinkMacSystemFont, 'Segoe UI',
                                            Arial, 'Karla';
                                          font-size: 16px;
                                          line-height: 26px;
                                          font-weight: 400;
                                          color: #666363;
                                          margin: 13px 0;
                                        "
                                        align="center"
                                      ></p>
                                      <p
                                        style="
                                          mso-line-height-rule: exactly;
                                          font-family: -apple-system,
                                            BlinkMacSystemFont, 'Segoe UI',
                                            Arial, 'Karla';
                                          font-size: 16px;
                                          line-height: 26px;
                                          font-weight: 400;
                                          color: #666363;
                                          margin: 0;
                                        "
                                        align="center"
                                      >
                                        Your order has been confirmed!
                                      </p>
                                    </th>
                                  </tr>
                                  <!-- END SECTION: Introduction -->
                                  <!-- BEGIN SECTION: Order Number And Date -->
                                  <tr
                                    id="section-1468270"
                                    class="section order_number_and_date"
                                  >
                                    <th
                                      style="
                                        mso-line-height-rule: exactly;
                                        padding: 2px 52px;
                                      "
                                      bgcolor="#ffffff"
                                    >
                                      <h2
                                        style="
                                          font-family: -apple-system,
                                            BlinkMacSystemFont, 'Segoe UI',
                                            Arial, 'Karla';
                                          color: #4b4b4b;
                                          font-size: 18px;
                                          line-height: 26px;
                                          font-weight: 700;
                                          text-transform: uppercase;
                                          letter-spacing: 1px;
                                          margin: 0;
                                        "
                                        align="center"
                                      >
                                        <span data-key="1468270_order_number"
                                          >Order ID: </span
                                        ><br />
                                        ${body?.user_info?.order_id}
                                      </h2>
                                    </th>
                                  </tr>
                               
                                  <tr
                                    id="section-1468271"
                                    class="section products_with_pricing"
                                  >
                                    <th
                                      style="
                                        mso-line-height-rule: exactly;
                                        padding: 13px 52px;
                                      "
                                      bgcolor="#ffffff"
                                    >
                                      <table
                                        class="table-inner"
                                        cellspacing="0"
                                        cellpadding="0"
                                        border="0"
                                        width="100%"
                                        style="min-width: 100%"
                                        role="presentation"
                                      >
                                        <tbody>
                                          <tr>
                                            <th
                                              class="product-table"
                                              style="mso-line-height-rule: exactly"
                                              bgcolor="#ffffff"
                                              valign="top"
                                            >
                                              <table
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                                width="100%"
                                                style="min-width: 100%"
                                                role="presentation"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <th
                                                      colspan="2"
                                                      class="product-table-h3-wrapper"
                                                      style="
                                                        mso-line-height-rule: exactly;
                                                      "
                                                      bgcolor="#ffffff"
                                                      valign="top"
                                                    >
                                                      <h3
                                                        data-key="1468271_item"
                                                        style="
                                                          font-family: -apple-system,
                                                            BlinkMacSystemFont,
                                                            'Segoe UI', Arial,
                                                            'Karla';
                                                          color: #bdbdbd;
                                                          font-size: 16px;
                                                          line-height: 52px;
                                                          font-weight: 700;
                                                          text-transform: uppercase;
                                                          border-bottom-width: 2px;
                                                          border-bottom-color: #dadada;
                                                          border-bottom-style: solid;
                                                          letter-spacing: 1px;
                                                          margin: 0;
                                                        "
                                                        align="left"
                                                      >
                                                        Items ordered
                                                      </h3>
                                                    </th>
                                                  </tr>
${books
  ?.map((item) => {
    return (
      books.length !== 0 &&
      ` <tr class="row-border-bottom">
          <th
            class="table-stack product-image-wrapper stack-column-center"
            width="1"
            style="
          mso-line-height-rule: exactly;
          border-bottom-width: 2px;
          border-bottom-color: #dadada;
          border-bottom-style: solid;
          padding: 13px 13px 13px
            0;
        "
            bgcolor="#ffffff"
            valign="middle"
          >
            <img
              width="140"
              class="product-image"
              src=${item?.img}
              alt="Product Image"
              style="
            vertical-align: middle;
            text-align: center;
            width: 140px;
            max-width: 140px;
            height: auto !important;
            border-radius: 1px;
            padding: 0px;
          "
            />
          </th>
          <th
            class="product-details-wrapper table-stack stack-column"
            style="
          mso-line-height-rule: exactly;
          padding-top: 13px;
          padding-bottom: 13px;
          border-bottom-width: 2px;
          border-bottom-color: #dadada;
          border-bottom-style: solid;
        "
            bgcolor="#ffffff"
            valign="middle"
          >
            <table
              cellspacing="0"
              cellpadding="0"
              border="0"
              width="100%"
              style="min-width: 100%"
              role="presentation"
            >
              <tbody>
                <tr>
                  <th
                    class="line-item-description"
                    style="
                  mso-line-height-rule: exactly;
                  font-family: -apple-system,
                    BlinkMacSystemFont,
                    'Segoe UI',
                    Arial, 'Karla';
                  font-size: 16px;
                  line-height: 26px;
                  font-weight: 400;
                  color: #666363;
                  padding: 13px
                    6px 13px 0;
                "
                    align="left"
                    bgcolor="#ffffff"
                    valign="top"
                  >
                    <p
                      style="
                    mso-line-height-rule: exactly;
                    font-family: -apple-system,
                      BlinkMacSystemFont,
                      'Segoe UI',
                      Arial,
                      'Karla';
                    font-size: 16px;
                    line-height: 26px;
                    font-weight: 400;
                    color: #666363;
                    margin: 0;
                  "
                      align="left"
                    >
                      <p
                        style="
                      color: #666363;
                      text-decoration: none !important;
                      text-underline: none;
                      word-wrap: break-word;
                      text-align: left !important;
                      font-weight: bold;
                    "
                      >
                        ${item?.title}
                      </p>
                      <br />
                      <span
                        class="muted"
                        style="
                      text-align: center;
                      font-family: -apple-system,
                        BlinkMacSystemFont,
                        'Segoe UI',
                        Arial,
                        'Karla';
                      font-size: 14px;
                      line-height: 26px;
                      font-weight: normal;
                      color: #bdbdbd;
                      word-break: break-all;
                    "
                      >
                        ${item?.ounces?.oz ? item?.ounces?.oz : ""}
                      </span>
                    </p>
                  </th>

                  <th
                    style="
                  mso-line-height-rule: exactly;
                "
                    bgcolor="#ffffff"
                    valign="top"
                  ></th>
                  <th
                  class="right line-item-qty"
                  width="1"
                  style="
                mso-line-height-rule: exactly;
                white-space: nowrap;
                padding: 29px 0
                  13px 13px;
              "
                  align="right"
                  bgcolor="#ffffff"
                  valign="top"
                >
                  <p
                    style="
                  mso-line-height-rule: exactly;
                  font-family: -apple-system,
                    BlinkMacSystemFont,
                    'Segoe UI',
                    Arial,
                    'Karla';
                  font-size: 16px;
                  line-height: 26px;
                  font-weight: 400;
                  color: #666363;
                  margin: 0;
                "
                    align="right"
                  >
                  $${item?.ounces?.oz ? item?.ounces?.price : item?.price}
                  </p>
                </th>
                  <th
                    class="right line-item-qty"
                    width="1"
                    style="
                  mso-line-height-rule: exactly;
                  white-space: nowrap;
                  padding: 29px 0
                    13px 13px;
                "
                    align="right"
                    bgcolor="#ffffff"
                    valign="top"
                  >
                    <p
                      style="
                    mso-line-height-rule: exactly;
                    font-family: -apple-system,
                      BlinkMacSystemFont,
                      'Segoe UI',
                      Arial,
                      'Karla';
                    font-size: 16px;
                    line-height: 26px;
                    font-weight: 400;
                    color: #666363;
                    margin: 0;
                  "
                      align="right"
                    >
                      ×${item?.quantity}
                    </p>
                  </th>
                  
                  <th
                    class="right line-item-line-price"
                    width="1"
                    style="
                  mso-line-height-rule: exactly;
                  white-space: nowrap;
                  padding: 29px 0
                    13px 26px;
                "
                    align="right"
                    bgcolor="#ffffff"
                    valign="top"
                  >
                    <p
                      style="
                    mso-line-height-rule: exactly;
                    font-family: -apple-system,
                      BlinkMacSystemFont,
                      'Segoe UI',
                      Arial,
                      'Karla';
                    font-size: 16px;
                    line-height: 26px;
                    font-weight: 400;
                    color: #666363;
                    margin: 0;
                  "
                      align="right"
                    >
                      $${
                        item?.ounces?.oz
                          ? item?.quantity * item?.ounces?.price
                          : item?.quantity * item?.price
                      }
                    </p>
                  </th>
                </tr>
              </tbody>
            </table>
          </th>
        </tr>`
    );
  })
  .join("<br>")}
                                                 

                                                </tbody>
                                              </table>
                                            </th>
                                          </tr>


                                          <tr>
                                            <th
                                              class="pricing-table"
                                              style="
                                                mso-line-height-rule: exactly;
                                                padding: 13px 0;
                                              "
                                              bgcolor="#ffffff"
                                              valign="top"
                                            >
                                              <table
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                                width="100%"
                                                style="min-width: 100%"
                                                role="presentation"
                                              >
                                                <tbody>
                                                  <tr>

                                                    <th
                                                      class="table-title"
                                                      data-key="1468271_subtotal"
                                                      style="
                                                        mso-line-height-rule: exactly;
                                                        font-family: -apple-system,
                                                          BlinkMacSystemFont,
                                                          'Segoe UI', Arial,
                                                          'Karla';
                                                        font-size: 16px;
                                                        line-height: 26px;
                                                        font-weight: bold;
                                                        color: #666363;
                                                        width: 65%;
                                                        padding: 6px 0;
                                                      "
                                                      align="left"
                                                      bgcolor="#ffffff"
                                                      valign="top"
                                                    >
                                                      Subtotal
                                                    </th>
                                                    <th
                                                      class="table-text"
                                                      style="
                                                        mso-line-height-rule: exactly;
                                                        font-family: -apple-system,
                                                          BlinkMacSystemFont,
                                                          'Segoe UI', Arial,
                                                          'Karla';
                                                        font-size: 16px;
                                                        line-height: 26px;
                                                        font-weight: 400;
                                                        color: #666363;
                                                        width: 35%;
                                                        padding: 6px 0;
                                                      "
                                                      align="right"
                                                      bgcolor="#ffffff"
                                                      valign="middle"
                                                    >
                                                      $${
                                                        body?.user_info
                                                          ?.sub_total
                                                      }
                                                    </th>
                                                  </tr>

                                                  <tr>
                                                    <th
                                                      class="table-title"
                                                      style="
                                                        mso-line-height-rule: exactly;
                                                        font-family: -apple-system,
                                                          BlinkMacSystemFont,
                                                          'Segoe UI', Arial,
                                                          'Karla';
                                                        font-size: 16px;
                                                        line-height: 26px;
                                                        font-weight: bold;
                                                        color: #666363;
                                                        width: 65%;
                                                        padding: 6px 0;
                                                      "
                                                      align="left"
                                                      bgcolor="#ffffff"
                                                      valign="top"
                                                    >
                                                    Delivery
                                                    </th>
                                                    <th
                                                      class="table-text"
                                                      style="
                                                        mso-line-height-rule: exactly;
                                                        font-family: -apple-system,
                                                          BlinkMacSystemFont,
                                                          'Segoe UI', Arial,
                                                          'Karla';
                                                        font-size: 16px;
                                                        line-height: 26px;
                                                        font-weight: 400;
                                                        color: #666363;
                                                        width: 35%;
                                                        padding: 6px 0;
                                                      "
                                                      align="right"
                                                      bgcolor="#ffffff"
                                                      valign="middle"
                                                    >
                                                    $${
                                                      body?.user_info
                                                        ?.delivery_charges
                                                    }
                                                    </th>
                                                  </tr>
                                                  <tr>
                                                    <th
                                                      class="table-title"
                                                      style="
                                                        mso-line-height-rule: exactly;
                                                        font-family: -apple-system,
                                                          BlinkMacSystemFont,
                                                          'Segoe UI', Arial,
                                                          'Karla';
                                                        font-size: 16px;
                                                        line-height: 26px;
                                                        font-weight: bold;
                                                        color: #666363;
                                                        width: 65%;
                                                        padding: 6px 0;
                                                      "
                                                      align="left"
                                                      bgcolor="#ffffff"
                                                      valign="top"
                                                    >
                                                      Flat Tax
                                                    </th>
                                                    <th
                                                      class="table-text"
                                                      style="
                                                        mso-line-height-rule: exactly;
                                                        font-family: -apple-system,
                                                          BlinkMacSystemFont,
                                                          'Segoe UI', Arial,
                                                          'Karla';
                                                        font-size: 16px;
                                                        line-height: 26px;
                                                        font-weight: 400;
                                                        color: #666363;
                                                        width: 35%;
                                                        padding: 6px 0;
                                                      "
                                                      align="right"
                                                      bgcolor="#ffffff"
                                                      valign="middle"
                                                    >
                                                      $${
                                                        body?.user_info
                                                          ?.flat_tax
                                                      }
                                                    </th>
                                                  </tr>

                                                  <tr
                                                    class="pricing-table-total-row"
                                                  >
                                                    <th
                                                      class="table-title"
                                                      data-key="1468271_total"
                                                      style="
                                                        mso-line-height-rule: exactly;
                                                        font-family: -apple-system,
                                                          BlinkMacSystemFont,
                                                          'Segoe UI', Arial,
                                                          'Karla';
                                                        font-size: 16px;
                                                        line-height: 26px;
                                                        font-weight: bold;
                                                        color: #666363;
                                                        width: 65%;
                                                        padding: 6px 0;
                                                      "
                                                      align="left"
                                                      bgcolor="#ffffff"
                                                      valign="top"
                                                    >
                                                      Total
                                                    </th>
                                                    <th
                                                      class="table-text"
                                                      style="
                                                        mso-line-height-rule: exactly;
                                                        font-family: -apple-system,
                                                          BlinkMacSystemFont,
                                                          'Segoe UI', Arial,
                                                          'Karla';
                                                        font-size: 16px;
                                                        line-height: 26px;
                                                        font-weight: 400;
                                                        color: #666363;
                                                        width: 35%;
                                                        padding: 6px 0;
                                                      "
                                                      align="right"
                                                      bgcolor="#ffffff"
                                                      valign="middle"
                                                    >
                                                    $${body?.user_info?.amount}
                                                    </th>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </th>
                                          </tr>
                                          <tr>
                                            <th
                                              style="
                                                mso-line-height-rule: exactly;
                                                border-top-width: 2px;
                                                border-top-color: #dadada;
                                                border-top-style: solid;
                                              "
                                              bgcolor="#ffffff"
                                              valign="top"
                                            ></th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </th>
                                  </tr>
                                  <!-- END SECTION: Products With Pricing -->
                                  <!-- BEGIN SECTION: Payment Info -->
                                  <tr
                                    id="section-1468272"
                                    class="section payment_info"
                                  >
                                    <th
                                      style="
                                        mso-line-height-rule: exactly;
                                        padding: 13px 52px;
                                      "
                                      bgcolor="#ffffff"
                                    >
                                      <table
                                        class="table-inner"
                                        cellspacing="0"
                                        cellpadding="0"
                                        border="0"
                                        width="100%"
                                        style="min-width: 100%"
                                        role="presentation"
                                      ></table>
                                    </th>
                                  </tr>
                                  <!-- END SECTION: Payment Info -->
                                  <!-- BEGIN SECTION: Customer And Shipping Address -->
                                  <tr>
                                    <th
                                      style="
                                        mso-line-height-rule: exactly;
                                        padding-left: 5%;
                                      "
                                      align="center"
                                      bgcolor="#ffffff"
                                      valign="top"
                                    >
                                      <h3
                                        data-key="1468273_ship_to"
                                        style="
                                          font-family: -apple-system,
                                            BlinkMacSystemFont,
                                            'Segoe UI', Arial,
                                            'Karla';
                                          color: #bdbdbd;
                                          font-size: 16px;
                                          line-height: 52px;
                                          font-weight: 700;
                                          text-transform: uppercase;
                                          letter-spacing: 1px;
                                          margin: 0;
                                        "
                                        align="center"
                                      >
                                      ${
                                        body?.user_info?.order_type == "pick up"
                                          ? "Pick up Info."
                                          : "Delivery Info."
                                      }
                                      </h3>
                                    </th>
                                  </tr>
                                  <tr
                                    id="section-1468273"
                                    class="section customer_and_shipping_address"
                                  >
                                            <!-- BEGIN : Column 2 of 2 : SHIP_TO -->
                                            <th
                                              width="100%"
                                              class="column_2_of_2 column_ship_to"
                                              style="
                                                mso-line-height-rule: exactly;
                                              "
                                              align="left"
                                              bgcolor="#ffffff"
                                              valign="top"
                                            >
                                              <table
                                                align="left"
                                                border="0"
                                                width="100%"
                                                cellpadding="0"
                                                cellspacing="0"
                                                style="min-width: 100%"
                                                role="presentation"
                                              >
                                                <tbody>
                                                  <tr>

                                                  <th
                                                    class="shipping_address"
                                                    style="
                                                      mso-line-height-rule: exactly;
                                                      padding-left: 52px;
                                                      width: 50%;
                                                      color: #666363;
                                                    "
                                                    align="left"
                                                    bgcolor="#ffffff"
                                                    valign="top"
                                                  >
                                                    <p
                                                      style="
                                                        mso-line-height-rule: exactly;
                                                        font-family: -apple-system,
                                                          BlinkMacSystemFont,
                                                          'Segoe UI', Arial,
                                                          'Karla';
                                                        font-size: 16px;
                                                        line-height: 26px;
                                                        font-weight: bold;
                                                        color: #666363;
                                                        margin: 0;
                                                      "
                                                      align="left"
                                                    >
                                                    ${
                                                      body?.user_info
                                                        ?.first_name
                                                        ? "Name  <br />"
                                                        : " "
                                                    }  
                                                   
                                                   ${
                                                     body?.user_info?.phone
                                                       ? "Phone  <br />"
                                                       : " "
                                                   }
                                                   
                                                    ${
                                                      body?.user_info
                                                        ?.street_address
                                                        ? "Address  <br />"
                                                        : " "
                                                    }
                                                   
                                                     ${
                                                       body?.user_info
                                                         ?.apartment
                                                         ? "Apartment <br />"
                                                         : ""
                                                     }
                                                   
                                                ${
                                                  body?.user_info?.town_city
                                                    ? "City  <br />"
                                                    : ""
                                                }
                                                    
                                                ${
                                                  body?.user_info?.state_country
                                                    ? "State   <br />"
                                                    : ""
                                                }
                                                 
                                                  ${
                                                    body?.user_info
                                                      ?.state_country
                                                      ? "Country <br />"
                                                      : ""
                                                  }  
                                                   
                                                  ${
                                                    body?.user_info
                                                      ?.postcode_zip
                                                      ? " Postcode/ZIP <br />"
                                                      : ""
                                                  }
                                                    </p >
                                                     </th >

                                                    <th
                                                      class="shipping_address"
                                                      style="
                                                        mso-line-height-rule: exactly;
                                                        padding-right: 52px;
                                                        width: 50%;
                                                      "
                                                      align="right"
                                                      bgcolor="#ffffff"
                                                      valign="top"
                                                    >
                                                      <p
                                                        style="
                                                          mso-line-height-rule: exactly;
                                                          font-family: -apple-system,
                                                            BlinkMacSystemFont,
                                                            'Segoe UI', Arial,
                                                            'Karla';
                                                          font-size: 16px;
                                                          text-transform: capitalize;
                                                          line-height: 26px;
                                                          font-weight: 400;
                                                          color: #666363;
                                                          margin: 0;
                                                        "
                                                        align="right"
                                                      >
                                                      ${
                                                        body?.user_info
                                                          ?.first_name +
                                                        " " +
                                                        body?.user_info
                                                          ?.last_name
                                                      }<br />
                                                      ${body?.user_info?.phone}
                                                      <br />
                                                      ${
                                                        body?.user_info
                                                          ?.order_type ==
                                                        "pick up"
                                                          ? ""
                                                          : body?.user_info
                                                              ?.street_address
                                                      }
                                                      <br />
                                                      ${
                                                        body?.user_info
                                                          ?.order_type ==
                                                        "pick up"
                                                          ? ""
                                                          : body?.user_info
                                                              ?.apartment
                                                      }
                                                      <br />
                                                      ${
                                                        body?.user_info
                                                          ?.order_type ==
                                                        "pick up"
                                                          ? ""
                                                          : body?.user_info
                                                              ?.town_city
                                                      }
                                                      <br />
                                                      ${
                                                        body?.user_info
                                                          ?.order_type ==
                                                        "pick up"
                                                          ? ""
                                                          : body?.user_info
                                                              ?.state_country
                                                      }
                                                      <br />
                                                      ${
                                                        body?.user_info
                                                          ?.order_type ==
                                                        "pick up"
                                                          ? ""
                                                          : body?.user_info
                                                              ?.country
                                                      }
                                                      <br />
                                                      ${
                                                        body?.user_info
                                                          ?.order_type ==
                                                        "pick up"
                                                          ? ""
                                                          : body?.user_info
                                                              ?.postcode_zip
                                                      }
                                                      </p>
                                                    </th>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </th>
                                            <!-- END : Column 2 of 2 : SHIP_TO -->
                                          </tr>
                                        </tbody>
                                      </table>
                                    </th>
                                    <!-- END : 2 COLUMNS : SHIP_TO -->
                                  </tr>
                                  <!-- END SECTION: Customer And Shipping Address -->
                                  <!-- BEGIN SECTION: Divider -->
                                  <tr
                                    id="section-1468275"
                                    class="section divider"
                                  >
                                    <th
                                      style="
                                        mso-line-height-rule: exactly;
                                        padding: 26px 52px;
                                      "
                                      bgcolor="#ffffff"
                                    >
                                      <table
                                        cellspacing="0"
                                        cellpadding="0"
                                        border="0"
                                        width="100%"
                                        role="presentation"
                                      >
                                        <tbody>
                                          <tr>
                                            <th
                                              style="
                                                mso-line-height-rule: exactly;
                                                border-top-width: 2px;
                                                border-top-color: #dadada;
                                                border-top-style: solid;
                                              "
                                              bgcolor="#ffffff"
                                              valign="top"
                                            ></th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </th>
                                  </tr>
                                  <!-- END SECTION: Divider -->
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <!-- END : SECTION : MAIN -->
                    </th>
                  </tr>
                </tbody>
              </table>
            </center>
          </th>
        </tr>
      </tbody>
    </table>
    <!-- END : CONTAINER -->
  </body>
</html>


`;
}
module.exports = { orderTemplete };
