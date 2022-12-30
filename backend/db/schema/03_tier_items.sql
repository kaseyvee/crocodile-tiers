DROP TABLE IF EXISTS tier_items CASCADE;
CREATE TABLE tier_items (
  id SERIAL PRIMARY KEY,
  tier_list_id INTEGER REFERENCES tier_lists(id) ON DELETE CASCADE,
  ranking VARCHAR(255),
  placed BOOLEAN DEFAULT FALSE,
  photo VARCHAR(255),
  name VARCHAR(255) NOT NULL,
  created_at timestamp default current_timestamp
);