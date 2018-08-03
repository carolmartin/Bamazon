# Bamazon

## Application Overview

This application takes an SQL database table named products, and provides a user with a list of products they may purchase. The user is prompted to select a product and quantity. If the product and quantity is available, the total purchase amount is calculated for the user and displayed, and the product table quantity for the item purchased is reduced by the purchased quantity. 

If the quantity requested is more than what is available, the user is prompted that the quantity is not available, informed of the quantity that is available, and is given another chance to purchase an item.

## NPM Packages
This application uses NPM packages:
* mysql
* inquirer

## NPM mysql

mysql is an npm module used to access the bamazon_db database using SQL commands.

## NPM Inquirer

Inquirer is an npm module used to interact with a user via the termninal to ask what product they want and the product quantity wanted. 


## Database

### Schema and Seed files

schema.sql has SQL to create the bamazon_db database and products table. Seed records are inserted into the products table.  

### Products Table

Table Key | Description
------------|--------------------
item_id | Auto generated primary key
product_name | name of product up to 100 characters
department_name | name of department up to 100 characters
price | price of this product
stock_quantity | amount in stock of this product


##Screen SHOTS - Table Create and load:

![Initial table](/SQLTableSelect.png)

##Purchase Items Demo:

![Purchase Demo](/Demo.gif)
