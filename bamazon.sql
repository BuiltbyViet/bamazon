CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id int not null auto_increment,
product_name varchar(300) not null ,
department_name  varchar(300) not null,
price decimal(10,2) default 0,
stock_quantity int default 0,
primary key (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
Values("Trash can", "Household", 5, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
Values("Super Smash Brothers", "Video Game", 40, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
Values("iPod", "Electronics", 100, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
Values("Broom", "Household", 4, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
Values("Hair Gel", "Cosmetics", 5, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
Values("Clock", "Household", 10, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
Values("Ruby", "Decoration", 5000, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
Values("Nintendo Switch", "Video Game", 200, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
Values("Cat", "Animal", 200, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
Values("Tooth Brush", "Household", 4, 20);

SELECT*FROM products
