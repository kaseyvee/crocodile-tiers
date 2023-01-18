import db from "../connection.js";

export const getAllTierItems = () => {
  return db.query("SELECT * FROM tier_items;")
    .then(data => {
      return data.rows;
    });
};

export const getTierItemsByTierListId = (id) => {
  return db.query("SELECT * FROM tier_items where tier_list_id = $1;", [id])
    .then(data => {
      return data.rows;
    });
};

export const addTierItem = (tierListId, item) => {
  const setColumns = [...Object.values(item)];

  return db.query(`
	INSERT INTO tier_items
	(tier_list_id, ranking, photo)
	VALUES ($1, $2, $3)
  RETURNING *;
`, [tierListId, ...setColumns])
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
  return db.query("DELETE FROM tier_items WHERE id = $1 RETURNING *;", [id])
    .then(data => {
      return data.rows;
    });
};