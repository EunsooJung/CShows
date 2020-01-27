DROP DATABASE IF EXISTS cshows_db;
CREATE DATABASE cshows_db;
USE cshows_db;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  location VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE tickets
(
	id INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (id),
	index(id),
	FOREIGN KEY (id) REFERENCES users(id),
	FOREIGN KEY (artist_name) REFERENCES artists(artist_name),
	FOREIGN KEY (genre) REFERENCES artists(genre),
	FOREIGN KEY (show_venue) REFERENCES shows(show_venue)
);

CREATE TABLE artists
(
	id int NOT NULL AUTO_INCREMENT,
	email VARCHAR(100) NOT NULL,
	password VARCHAR(100) NOT NULL,
	artist_name varchar(255) NOT NULL,
	genre varchar(225) NOT NULL,
	index(id),
	index(artist_name),
	PRIMARY KEY (id)
);

CREATE TABLE shows
(
	id int NOT NULL AUTO_INCREMENT,
	show_venue varchar(255) NOT NULL,
	show_Date DATE NOT NULL,
	PRIMARY KEY (id),
	index(id),
	index(artist_name),
	FOREIGN KEY (artist_name) REFERENCES artists(artist_name),
	FOREIGN KEY (genre) REFERENCES artists(genre)
);
