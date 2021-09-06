module.exports = {
  reactStrictMode: true,
  env: {
    API_SERVER :'http://localhost:8000/api',
    // API_CATEGORIES: `${process.env.API_SERVER}/categories`,
    API_FEATURED_PRODUCTS: `${process.env.API_SERVER}/api/featured-products`,
    API_PRODUCTS: `${process.env.API_SERVER}/api/products`,
  },
};
