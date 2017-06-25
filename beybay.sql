/*PRODUCTS TABLE*/

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
VALUES (1, 1, "productOne", "departmentOne", 50.00, 10, TRUE);

INSERT INTO PRODUCTS (id, item_id, product_name, department_name, price, stock_quantity, autographed)
VALUES (2, 2, "productTwo", "departmentTwo", 50.00, 10, FALSE);

INSERT INTO PRODUCTS (id, item_id, product_name, department_name, price, stock_quantity, autographed)
VALUES (3, 3, "productThree", "departmentThree", 50.00, 10, TRUE);

INSERT INTO PRODUCTS (id, item_id, product_name, department_name, price, stock_quantity, autographed)
VALUES (4, 4, "productFour", "departmentFour", 50.00, 10, FALSE);

INSERT INTO PRODUCTS (id, item_id, product_name, department_name, price, stock_quantity, autographed)
VALUES (5, 5, "productFive", "departmentFive", 50.00, 10, TRUE);

INSERT INTO PRODUCTS (id, item_id, product_name, department_name, price, stock_quantity, autographed)
VALUES (6, 6, "productSix", "departmentSix", 50.00, 10, FALSE);

INSERT INTO PRODUCTS (id, item_id, product_name, department_name, price, stock_quantity, autographed)
VALUES (7, 7, "productSeven", "departmentSeven", 50.00, 10, TRUE);

INSERT INTO PRODUCTS (id, item_id, product_name, department_name, price, stock_quantity, autographed)
VALUES (8, 8, "productEight", "departmentEight", 50.00, 10, FALSE);

INSERT INTO PRODUCTS (id, item_id, product_name, department_name, price, stock_quantity, autographed)
VALUES (9, 9, "productNine", "departmentNine", 50.00, 10, TRUE);

INSERT INTO PRODUCTS (id, item_id, product_name, department_name, price, stock_quantity, autographed)
VALUES (10, 10, "productTen", "departmentTen", 50.00, 10, FALSE);

/*SALES DEPT TABLE - */

CREATE TABLE `departments` (
  id INT NOT NULL AUTO_INCREMENT,
  `department_id` INT NULL,
  `department_name` VARCHAR(45) NULL,
  `over_head_costs` INT NULL,
  `product_sales` INT NULL,
  `total_profits` INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO DEPARTMENTS (id, department_id, department_name, over_head_costs, product_sales, total_profits)
VALUES (1, 1, "departmentOne", 1000, 2000, 1000);

INSERT INTO DEPARTMENTS (id, department_id, department_name, over_head_costs, product_sales, total_profits)
VALUES (2, 2, "departmentTwo", 2000, 3000, 1000);
