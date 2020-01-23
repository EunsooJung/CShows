DROP DATABASE IF EXISTS cshows_db;
CREATE DATABASE cshows_db;
USE cshows_db;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  user_type VARCHAR(100) NOT NULL,
  location VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE tickets
(
	id INT NOT NULL AUTO_INCREMENT,
	ticket_name varchar(255) NOT NULL,
	ticket_type varchar(255) NOT NULL,
	ticket_cost int NOT NULL,
	PRIMARY KEY (id),
	index(id),
	index(ticket_name),
	FOREIGN KEY (id) REFERENCES users(id)
);

CREATE TABLE artists
(
	id int NOT NULL AUTO_INCREMENT,
	artist_name varchar(255) NOT NULL,
	artist_type varchar(255) NOT NULL,
	PRIMARY KEY (id)
	-- FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE shows
(
	id int NOT NULL AUTO_INCREMENT,
	show_name varchar(255) NOT NULL,
	show_type varchar(255) NOT NULL,
  show_venue varchar(255) NOT NULL,
  show_Date DATE NOT NULL,
  show_genre varchar(255) NOT NULL,
	PRIMARY KEY (id),
  index(id),
  index(show_name),
	FOREIGN KEY (id) REFERENCES tickets(id),
  FOREIGN KEY (id) REFERENCES artists(id)
);
