DROP DATABASE IF EXISTS `beybay`;
CREATE DATABASE `beybay`;

USE `beybay`;

CREATE TABLE `products` (
  id INT NOT NULL AUTO_INCREMENT,
  item_id INT NULL,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  autographed BOOLEAN,
  PRIMARY KEY (id)
);

INSERT INTO PRODUCTS (id, item_id, product_name, department_name, price, stock_quantity, autographed)
VALUES (1, 1, "productOne", "productOne", 50.00, 100, TRUE);

INSERT INTO PRODUCTS (id, item_id, product_name, department_name, price, stock_quantity, autographed)
VALUES (2, 2, "productTwo", "productTwo", 50.00, 100, FALSE);

INSERT INTO PRODUCTS (id, item_id, product_name, department_name, price, stock_quantity, autographed)
VALUES (3, 3, "productThree", "productThree", 50.00, 100, TRUE);

INSERT INTO PRODUCTS (id, item_id, product_name, department_name, price, stock_quantity, autographed)
VALUES (4, 4, "productFour", "productFour", 50.00, 100, FALSE);

INSERT INTO PRODUCTS (id, item_id, product_name, department_name, price, stock_quantity, autographed)
VALUES (5, 5, "productFive", "productFive", 50.00, 100, TRUE);

INSERT INTO PRODUCTS (id, item_id, product_name, department_name, price, stock_quantity, autographed)
VALUES (6, 6, "productSix", "productSix", 50.00, 100, FALSE);

INSERT INTO PRODUCTS (id, item_id, product_name, department_name, price, stock_quantity, autographed)
VALUES (7, 7, "productSeven", "productSeven", 50.00, 100, TRUE);

INSERT INTO PRODUCTS (id, item_id, product_name, department_name, price, stock_quantity, autographed)
VALUES (8, 8, "productEight", "productEight", 50.00, 100, FALSE);

INSERT INTO PRODUCTS (id, item_id, product_name, department_name, price, stock_quantity, autographed)
VALUES (9, 9, "productNine", "productNine", 50.00, 100, TRUE);

INSERT INTO PRODUCTS (id, item_id, product_name, department_name, price, stock_quantity, autographed)
VALUES (10, 10, "productTen", "productTen", 50.00, 100, FALSE);