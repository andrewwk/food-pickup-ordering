

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id INT PRIMARY KEY NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  phone VARCHAR(50) NOT NULL
);

