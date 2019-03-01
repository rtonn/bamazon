# Bamazon

## Description
This application implements a simple command line based storefront using the npm [inquirer](https://www.npmjs.com/package/inquirer) package and the MySQL database backend together with the npm [mysql](https://www.npmjs.com/package/mysql) package. The application presents two interfaces: **customer** and **manager**.

### MySQL Database Setup
In order to run this application, you should have the MySQL database already set up on your machine. If you don't, visit the [MySQL installation page](https://dev.mysql.com/doc/refman/5.6/en/installing.html) to install the version you need for your operating system. Once you have MySQL installed, you will be able to create the *Bamazon* database and the *products* table with the SQL code found in [Bamazon.sql](Bamazon.sql). Run this code inside your MySQL client like [Sequel Pro](https://www.sequelpro.com/) to populate the database, then you will be ready to proceed with running the Bamazon customer and manager interfaces.

## Customer Interface
### `BamazonCustomer.js`   
* Displays the products in the store.
* Prompts customer which product they would like to purchase by ID number.
* Asks for the quantity.
      * If there is a sufficient amount of the product in stock, it will return the total for that purchase.
      * However, if there is not enough of the product in stock, it will tell the user that there isn't enough of the product.
      * If the purchase goes through, it updates the stock quantity to reflect the purchase.
      * It will also update the product sales in the department table.



## Manager Interace
###  'BamazonManager.js`

* Starts with a menu:
    * View Products for Sale
    * View Low Inventory
    * Add to Inventory
    * Add New Product
    * End Session

* If the manager selects `View Products for Sale`, it lists all of the products in the store including all of their details.

* If the manager selects `View Low Inventory`, it'll list all the products with less than five items in its StockQuantity column.

* If the manager selects `Add to Inventory`, it allows the manager to select a product and add inventory.

* If the manager selects `Add New Product`, it allows the manager to add a new product to the store.

