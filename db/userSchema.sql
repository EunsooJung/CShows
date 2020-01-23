DROP DATABASE IF EXISTS cshows_db;
CREATE DATABASE cshows_db;
USE cshows_db;

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) false,
  password VARCHAR(100) NOT NULL,
  user_type VARCHAR(100) NOT NULL,
  location VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);