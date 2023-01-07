import express from 'express';
import { getAllTierLists, getTierListsById, deleteTierListById, createTierList, updateTierList } from "../db/queries/tier_lists.js";

const router = express.Router();

router.get("/", (req, res) => {
  const tierLists = getAllTierLists()
    .then((tierLists) => {
      res.json(tierLists);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  const tierLists = getTierListsById(id)
    .then((tierLists) => {
      res.json(tierLists);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/:id/delete", (req, res) => {
  const id = req.params.id;

  const tierLists = deleteTierListById(id)
    .then((tierLists) => {
      res.json(tierLists);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/new", (req, res) => {
  const tierLists = createTierList(req.body.id, req.body.name)
    .then((tierLists) => {
      console.log("tierlists", tierLists)
      res.json(tierLists);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.put("/:id/edit", (req, res) => {
  const id = req.params.id;
  const tierListInfo = req.body;

  const tierList = updateTierList(id, tierListInfo)
    .then((tierList) => {
      console.log("tierList:", tierList)
      res.json(tierList);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

export default router;