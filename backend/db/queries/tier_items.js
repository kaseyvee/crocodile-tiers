import db from '../../configs/db.config.js';

export const getAllTierItems = (tierListId) => {
  return db.query("SELECT * FROM tier_items WHERE tier_list_id = $1", [tierListId])
    .then(data => {
      return data.rows;
    });
};

export const addTierItem = (tierListId, name, photo) => {
  return db.query(`
	INSERT INTO tier_items
	(tier_list_id, name, photo)
	VALUES ($1, $2)
`, [tierListId, name, photo])
    .then(data => {
      return data.rows;
    });
};

export const updateTierItem = (id, tierItemInfo) => {
  const setColums = Object.keys(tierItemInfo).map((property, index) => `${property}=$${index + 2}`).join(', ');

  const queryDef = {
    text: `
      UPDATE tier_items
      SET ${setColums}
      WHERE id = $1
      RETURNING *
    `,
    values: [id, ...Object.values(tierItemInfo)],
  };

  return db.query(queryDef)
    .then((data) => data.rows[0]);
};

export const deleteTierItem = (id) => {
  return db.query("DELETE * FROM tier_items; WHERE id = $1", [id])
    .then(data => {
      return data.rows;
    });
};