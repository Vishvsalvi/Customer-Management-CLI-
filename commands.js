#!/usr/bin/env node


const program = require("commander");
const { prompt } = require('inquirer')

const { addCustomer, findCustomer, deleteCustomer, updateCustomer, listAll } = require("./index");


// Customer Questions

const questions = [
  {
    type:'input',
    name: 'firstname',
    message: 'Customer First name'
  },
  {
    type:'input',
    name: 'lastname',
    message: 'Customer Last name'
  },
  {
    type:'input',
    name: 'email',
    message: 'Customer Email'
  }
]


program.version("1.0.0").description("Client management system");

// Add a customer
// program
//   .command("add <firstname> <lastname> <email>")
//   .alias("a")
//   .description("Add a customer")
//   .action((firstname, lastname, email) => {
//     addCustomer({ firstname, lastname, email });
//   });


// New function with inquirer questions
program
 .command("add")
 .alias("a")
 .description("Add a customer")
 .action(() => {
  prompt(questions).then(answers => addCustomer(answers))
 })

// Find the customer with last name or first name
program
 .command('find <name>')
 .alias('f')
 .description("Find a customer")
 .action((name) => {
    findCustomer(name)
 })


// Update customer 
program
 .command("update <_id>")
 .alias('u')
 .description("Update a customer")
 .action((_id) => {
  prompt(questions).then((answers) => {
    updateCustomer(_id, answers)
  })
 })


// List all customers
program
 .command("list")
 .alias('l')
 .description("Return all the customers")
 .action(() => {
  listAll()
 })


// Remove a customer 
program
 .command("remove <_id>")
 .alias("r")
 .description("Remove a customer")
 .action(_id => deleteCustomer(_id))


program.parse(process.argv);
