import express from "express";
import { getAllUsers, getUserById, addUser, updateUser } from "../db/queries/users.js";

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
  const userInfo = req.body;

  console.log("req.body", req.body);

  const user = addUser(id, userInfo)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.put('/:id/edit', (req, res) => {
  const id = req.params.id;
  const userInfo = req.body;

  const user = updateUser(id, userInfo)
    .then((user) => {
      res.json(user);
    })
    .catch(
      res.status(500).json({ error: err.message })
    );
});

export default router;
