// schemas/marketplace.js
export default {
    name: 'marketplace',
    title: 'Marketplace',
    type: 'document',
    fields: [
      {
        name: 'productTitle',
        title: 'Product Title',
        type: 'string',
      },
      {
        name: 'productSlug',
        title: 'Product Slug',
        type: 'slug',
        options: {
          source: 'productTitle',
          maxLength: 96,
        },
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: ['Office Chairs', 'Home Chairs', 'Restaurant Chairs'], // Adjust as per your categories
        },
      },
      {
        name: 'productDescription',
        title: 'Product Description',
        type: 'text',
      },
      {
        name: 'productImage',
        title: 'Product Image',
        type: 'image',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'stockQuantity',
        title: 'Stock Quantity',
        type: 'number',
      },
      {
        name: 'material',
        title: 'Material',
        type: 'string',
      },
      
      // Order-related fields
      {
        name: 'orderNumber',
        title: 'Order Number',
        type: 'string',
      },
      {
        name: 'orderDate',
        title: 'Order Date',
        type: 'datetime',
      },
      {
        name: 'orderStatus',
        title: 'Order Status',
        type: 'string',
        options: {
          list: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
        },
      },
  
      // Customer-related fields
      {
        name: 'customerFirstName',
        title: 'Customer First Name',
        type: 'string',
      },
      {
        name: 'customerLastName',
        title: 'Customer Last Name',
        type: 'string',
      },
      {
        name: 'customerEmail',
        title: 'Customer Email',
        type: 'string',
      },
      {
        name: 'customerPhone',
        title: 'Customer Phone',
        type: 'string',
      },
      {
        name: 'customerAddress',
        title: 'Customer Address',
        type: 'string',
      },
  
      // Shipment-related fields
      {
        name: 'shipmentMethod',
        title: 'Shipment Method',
        type: 'string',
      },
      {
        name: 'trackingNumber',
        title: 'Tracking Number',
        type: 'string',
      },
      {
        name: 'shipmentDate',
        title: 'Shipment Date',
        type: 'datetime',
      },
      {
        name: 'estimatedDelivery',
        title: 'Estimated Delivery Date',
        type: 'datetime',
      },
      {
        name: 'driverName',
        title: 'Driver Name',
        type: 'string',
      },
  
      // Payment-related fields
      {
        name: 'paymentMethod',
        title: 'Payment Method',
        type: 'string',
        options: {
          list: ['Credit Card', 'PayPal', 'Bank Transfer', 'Cash on Delivery'],
        },
      },
      {
        name: 'paymentStatus',
        title: 'Payment Status',
        type: 'string',
        options: {
          list: ['Pending', 'Completed', 'Failed', 'Refunded'],
        },
      },
      {
        name: 'paymentAmount',
        title: 'Payment Amount',
        type: 'number',
      },
      {
        name: 'paymentDate',
        title: 'Payment Date',
        type: 'datetime',
      },
    ],
  };
  