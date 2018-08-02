DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price NUMERIC(5,2),
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Green shirt Small', 'Apparel', 15.95, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Green shirt Medium', 'Apparel', 15.95, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Green shirt Large', 'Apparel', 15.95, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Green shirt XLarge', 'Apparel', 17.95, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Pink shirt Small', 'Apparel', 15.95, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Pink shirt Medium', 'Apparel', 15.95, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Pink shirt Large', 'Apparel', 15.95, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Pink shirt XLarge', 'Apparel', 17.95, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Turquoise Ring', 'Jewelry', 150.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Turquoise Earrings', 'Jewelry', 79.00, 2);

SELECT * FROM products;