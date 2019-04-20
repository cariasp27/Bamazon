DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
-- Use BAMAZON for the following statements --
USE bamazon;
CREATE TABLE products(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Create a string column called "product_name" --
product_name VARCHAR(255),
-- Create a string column called "department_name" --
department_name VARCHAR(1000),
  -- Create an integer column called "price" --
price DECIMAL(10,2),
 -- Create an integer column called "stock_quantity" --
stock_quantity INTEGER(100),
  -- Set the id as this table's primary key
  PRIMARY KEY (item_id)
);

-- Create new example rows (name, deparment, price, stock) --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("FIFA Approved Official Match Ball", "Sports", 149.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("Razor Optical Mouse", "Electronics", 49.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("Ken Griffy Junior Signed Baseball", "Memorabilia", 699.99, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("Lionel Messi Game Worn World Cup Jersey", "Memorabilia", 1499.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("Used Baseball Mit", "Sports", 19.99, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("Bartolo Colon Signed Baseball Card", "Memorabilia", 169.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("Bluetooth Keyboard", "Electronics", 49.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("USB Type C Charging Cable", "Electronics", 9.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("Nothing But Nets RED Shoelaces", "Sports", 19.99, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("1997 Cleveland Indians World Series Pin", "Memorabilia", 2.99, 169);


Select * from products;


