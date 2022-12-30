const db = require("../../configs/db.config");

const getAllUsers = () => {
  return db.query("SELECT * FROM users;").then((data) => {
    return data.rows;
  });
};

const getUserById = (id) => {
  return db.query("SELECT * FROM users WHERE id = $1", [id]).then((data) => {
    return data.rows;
  });
};

const addUser = (email, password, name) => {
  return db.query(
    "INSERT INTO users (email, password, name) VALUES ($1, $2, $3) RETURNING *;",
    [email, password, name]
  );
};

const updateUser = (id, userInfo) => {
  const setColums = Object.keys(userInfo).map((property, index) => `${property}=$${index + 2}`).join(', ');

  console.log("setColums", setColums);

  const queryDef = {
    text: `
      UPDATE tier_items
      SET ${setColums}
      WHERE id = $1
      RETURNING *
    `,
    values: [id, ...Object.values(userInfo)],
  };

  return db.query(queryDef)
    .then((data) => data.rows[0]);
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
};
