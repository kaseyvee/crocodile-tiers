DROP TABLE IF EXISTS tier_lists CASCADE;
CREATE TABLE tier_lists (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255),
  upvote INTEGER,
  downvote INTEGER,
  created_at timestamp default current_timestamp
);