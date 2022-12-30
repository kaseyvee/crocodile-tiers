import express from 'express';
import { getAllUsers, getUserById } from "../db/queries/users.js";

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

export default router;