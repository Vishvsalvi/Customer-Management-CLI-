# Customer Management CLI App

## Overview

This is a command line interface (CLI) application for managing customers in a database. It allows you to add, find, update, list and delete customers.

The app uses [MongoDB](https://www.mongodb.com/) as the database and [Mongoose](https://mongoosejs.com/) as the ODM.

The CLI is built with [Commander](https://www.npmjs.com/package/commander) and [Inquirer](https://www.npmjs.com/package/inquirer).

## Installation

```bash
npm install
```

This will install all the dependencies including Commander, Inquirer, Mongoose etc.

## Usage

```bash
npm link
```

This will symlink the package globally so the `cli-app` command can be run from anywhere.

### Commands

- `cli-app --version` - Version of the app
- `cli-app --help` - Lists all the commands
- `cli-app add` - Add a new customer interactively
- `cli-app find <name>` - Find a customer by first or last name
- `cli-app update <_id>` - Update a customer by id interactively  
- `cli-app list` - List all customers
- `cli-app remove <_id>` - Remove a customer by id

### Examples

Add a customer:

```bash
cli-app add
```

Find customers with last name 'Doe':

```bash
cli-app find Doe
```

Update customer with id 123456789:

```bash  
cli-app update 123456789
```

List all customers:

```bash
cli-app list 
```

Remove customer with id 987654321:

```bash
cli-app remove 987654321
```

## Models

The `Customer` model is defined in `models/Customer.js`. It has the following fields:

- firstname - String, required
- lastname - String, required
- email - String, required

## Configuration

The MongoDB connection URI and database name are specified in the `.env` file.
