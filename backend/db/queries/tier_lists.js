const db = require('../../configs/db.config');

const getAllTierLists = () => {
  return db.query("SELECT * FROM tier_lists;").then(data => {
    return data.rows;
  });
};

const getTierListsById = id => {
  return db.query("SELECT * FROM tier_lists; WHERE id = $1", [id]).then(data => {
    return data.rows;
  });
};

const getTierListsByUser = user => {
  return db.query("SELECT * FROM tier_lists; WHERE user = $1", [user]).then(data => {
    return data.rows;
  });
};

const deleteTierListById = id => {
  return db.query("DELETE * FROM tier_lists; WHERE id = $1", [id]).then(data => {
    return data.rows;
  });
};

const createTierList = (userId, name) => {
  return db.query(`
    INSERT INTO tier_lists
    (user_id, name)
    VALUES ($1, $2)
  `, [userId, name])
    .then((data) => data.rows);
};

const updateTierList = (id, tierListInfo) => {
  const setColums = Object.keys(tierListInfo).map((property, index) => `${property}=$${index + 2}`).join(', ');

  const queryDef = {
    text: `
      UPDATE tier_lists
      SET ${setColums}
      WHERE id = $1
      RETURNING *
    `,
    values: [id, ...Object.values(tierListInfo)],
  };

  return db.query(queryDef)
    .then((data) => data.rows[0]);
};

module.exports = { getAllTierLists, getTierListsById, getTierListsByUser, deleteTierListById, createTierList, updateTierList };