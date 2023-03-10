import express from 'express';
import { getAllTierItems, getTierItemsByTierListId, deleteTierItem, updateTierItem, addTierItem } from "../db/queries/tier_items.js";

const router = express.Router();

router.get("/", (req, res) => {
  const tierItems = getAllTierItems()
    .then((tierItems) => {
      res.json(tierItems);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/:id/new", (req, res) => {
  const id = req.params.id;
  
  const tierItem = addTierItem(id, req.body)
    .then((tierItem) => {
      res.json(tierItem);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  const tierItems = getTierItemsByTierListId(id)
    .then((tierItems) => {
      res.json(tierItems);
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

export default router;