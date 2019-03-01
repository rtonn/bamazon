//require mysql and inquirer
var mysql = require('mysql');
var inquirer = require('inquirer');

//create connection to db
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon_db"
})

//establish connection
connection.connect(function(err){
	if (err) throw err;
	console.log('connected as id: ' + connection.threadId)
  showProducts();
});

//display items for sale
function showProducts() { 
    connection.query('SELECT * FROM tblproducts', function(err, res){
      if (err) throw err;      
      console.log('=================Items in Store==================');      
  
      for(i=0;i<res.length;i++){
        console.log('Item ID:' + res[i].item_id + " // " + ' Product Name: ' + res[i].product_name + " // " + ' Price: ' + '$' + res[i].price + " // " + 'Quantity left: ' + res[i].stock_quantity)
      }
      console.log('=================================================');
      placeOrder();
      })
  }

//prompt to place an order
function placeOrder(){  
  inquirer
    .prompt ([
      {
        name: "item_id", 
        type: "input",
        message: "Please enter the ID of the product you wish to purchase",
        validate: function(value) {
                  if (isNaN(value) === false) {
                  return true;
                  }
                  return false;
        } 
      },
      {
        name: "quantity",
        type: "input", 
        message: "How many would you like to purchase?",
        validate: function(value) {
                  if (isNaN(value) === false) {
                  return true;
                  }
                  return false;        
        }
      }
    //..................................
    ]).then(function(input) {

      var item = input.item_id;  
      var quantity = input.quantity; 
      var queryStr = 'SELECT * from tblproducts WHERE ?'; 

      connection.query(queryStr, {item_id: item}, function (err, data) {
        if (err) throw err;
        if (data.length === 0) {
          console.log("Error: Invalid Item ID"); 
          showProducts();           
        }
        else {
          var productData = data[0]; 
          if (quantity <= productData.stock_quantity) {
            console.log('Congratulations, the product you requested is in stock! Placing order!');
  
            // Construct the updating query string
            var updateQueryStr = 'UPDATE tblproducts SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
            // console.log('updateQueryStr = ' + updateQueryStr);
  
            // Update the inventory
            connection.query(updateQueryStr, function(err, data) {
              if (err) throw err;
  
              console.log('Your oder has been placed! Your total is $' + productData.price * quantity);
              console.log('Thank you for shopping with us!');
              console.log("\n---------------------------------------------------------------------\n");
  
              // End the database connection
              connection.end();
            })
          } else {
            console.log('Sorry, there is not enough product in stock, your order can not be placed as is.');
            console.log('Please modify your order.');
            console.log("\n---------------------------------------------------------------------\n");
  
            displayInventory();
          }
        }
      })
    })
  }