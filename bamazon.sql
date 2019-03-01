
CREATE DATABASE bamazon_db;

USE bamazon_db; 

CREATE TABLE tblProducts (
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR(35) NOT NULL, 
department_name VARCHAR(35) NOT NULL, 
price DECIMAL(11,2), 
stock_quantity INTEGER(9),
PRIMARY KEY (item_id)
); 

Use bamazon_db; 

INSERT into tblProducts (product_name, department_name, price, stock_quantity)
VALUES ("Ring", "Luxury", 7999.99, 3),
	   ("Car", "Luxury", 195500.00, 2),
       ("Mansion", "Luxury", 199500250.95, 1),
       ("TV", "Entertainment", 899.00, 10),
       ("Computer", "Entertainment", 450.00, 20),
       ("Stereo", "Entertainment", 250.00, 8),
       ("Jeans", "Clothing", 50.00, 100),
       ("Shirts", "Clothing", 20.00, 150),
       ("Hats", "Clothing", 9.99, 250),
       ("Milk", "Food", 2.49, 40),
       ("Bread", "Food", 1.50, 12),
       ("Candy", "Food", 0.25, 40); 
       
       select * from tblProducts; 
    
     
       

       
       




































