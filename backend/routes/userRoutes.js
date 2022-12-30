const express = require("express");
import { getAllUsers, getUserById, addUser, updateUser } from "../db/queries/users";

const router = express.Router();

router.get("/", (req, res) => {
  const users = getAllUsers()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const user = getUserById(id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/:id/new", (req, res) => {
  const id = req.params.id;

  console.log("req.body", req.body);
  const tierItem = addTierItem(id, req.body)
    .then((tierItem) => {
      res.json(tierItem);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  const tierItem = deleteTierItem(id)
    .then((tierItem) => {
      res.json(tierItem);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.put('/:id/edit', (req, res) => {
  const id = req.params.id;

  const tierItem = updateTierItem(id, tierItemInfo)
    .then((tierItem) => {
      res.json(tierItem);
    })
    .catch(
      res.status(500).json({ error: err.message })
    );
});

module.exports = router;
