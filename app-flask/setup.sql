create database cienciasmart;

create user 'aavaa'@'localhost' identified by 'aavaa';

grant all privileges on cienciasmart.* to 'aavaa'@'localhost' with grant option;

use cienciasmart;

CREATE TABLE buyer (
    buyer_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    email VARCHAR(40) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL,
    cellphone CHAR(10) NOT NULL UNIQUE,
    CONSTRAINT chk_cellphone_length_buyer CHECK (LENGTH(cellphone) = 10)
);

CREATE TABLE seller (
    seller_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    email VARCHAR(40) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL,
    cellphone CHAR(10) NOT NULL UNIQUE,
    CONSTRAINT chk_cellphone_length_seller CHECK (LENGTH(cellphone) = 10)
);

CREATE TABLE product (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    seller_id INT,
    name VARCHAR(20) NOT NULL,
    description VARCHAR(80) NOT NULL,
    stock INT,
    cellphone CHAR(10) NOT NULL UNIQUE,
    photo LONGBLOB NOT NULL,
    category VARCHAR(20) NOT NULL,
    price FLOAT8 NOT NULL,
    FULLTEXT(name, description, category),
    CONSTRAINT product_fk FOREIGN KEY (seller_id) REFERENCES seller(seller_id),
    CONSTRAINT chk_cellphone_length_product CHECK (LENGTH(cellphone) = 10)
);

CREATE TABLE request (
    product_id INT,
    buyer_id INT,
    quantity_requested INT NOT NULL,
    finished BOOLEAN NOT NULL,
    CONSTRAINT request_pk PRIMARY KEY (product_id, buyer_id),
    CONSTRAINT request_fk FOREIGN KEY (product_id) REFERENCES product(product_id),
    CONSTRAINT request_fk2 FOREIGN KEY (buyer_id) REFERENCES buyer(buyer_id)
);


CREATE TABLE review (
    product_id INT AUTO_INCREMENT,
    buyer_id INT,
    date DATE NOT NULL,
    comment VARCHAR(60) NOT NULL,
    score INT NOT NULL,
	CONSTRAINT review_pk PRIMARY KEY (product_id, buyer_id),
    CONSTRAINT review_fk FOREIGN KEY (product_id) REFERENCES product(product_id),
	CONSTRAINT review_fk2 FOREIGN KEY (buyer_id) REFERENCES buyer(buyer_id)
);


