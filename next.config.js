module.exports = {
  env: {
    SERVER:
      process.env.NODE_ENV === 'development'
        ? process.env.ENDPOINT
        : process.env.ENDPOINT,
    ESCROW_PERCENTAGE: process.env.ESCROW_PERCENTAGE
  }
};
