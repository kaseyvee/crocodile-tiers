DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),
  profile_picture VARCHAR(255),
  banner_picture VARCHAR(255),
  description VARCHAR(100),
  created_at timestamp default current_timestamp
);