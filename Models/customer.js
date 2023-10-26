const mongoose = require("mongoose");

// Create a schema for customer

const customerSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('customerSchema', customerSchema)
