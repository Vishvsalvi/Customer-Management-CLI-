const mongoose = require("mongoose");
require('dotenv').config();
// Connect the database
  mongoose
    .connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((result) => {
      
    })
    .catch((err) => console.log(err));


// Import model
const Customer = require("./Models/customer");

// Add customer
const addCustomer = (customer) => {
  Customer.create(customer).then((customer) => {
    console.info("New customer added");
    
  });
};

// Find customer
const findCustomer = (name) => {
  // Make the search case insensitive
  const search = new RegExp(name, "i");

  Customer.find({ $or: [{ firstname: search }, { lastname: search }] }).then(
    (customer) => {
      console.info(customer);
      console.info(`${customer.length} matches`);
      

    }
  );
};

// Update the customer
const updateCustomer = (_id, customer) => {
    Customer.updateOne({_id}, customer).then((customer) => {
        console.info("Customer data updated!!")
    })
}

// Remove the customer
const deleteCustomer = (_id,) => {
    Customer.deleteOne({_id}).then((customer) => {
        console.info("Customer data deleted!!")
    })
}

// List all customers
const listAll = () => {
    Customer.find().then((customers) => {
        console.info(customers)
        console.info(`${customers.length} customers`)
    })
}


// Remove a customer

module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  deleteCustomer,
  listAll
};
