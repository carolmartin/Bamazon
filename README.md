# Bamazon
Bamazon

This application takes an SQL database table named products, and provides a user with a list of products they may purchase. The user is prompted to select a product and quantity. If the product and quantity is available, the total purchase amount is calculated for the user and displayed, and the product table quantity for the item purchased is reduced by the purchased quantity. 

If the quantity requested is more than what is available, the user is prompted that the quantity is not available, informed of the quantity that is available, and is given another chance to purchase an item.

This application uses NPM packages mysql and inquirer. 

mysql is an npm module used to access the bamazon_db database using SQL commands.

bamazon.sql has SQL to create the bamazon_db database and products table. Seed records are inserted into the products table.  

inquirer is an npm module used to interact with a user via the termninal to ask what product they want and the product quantity wanted. 


