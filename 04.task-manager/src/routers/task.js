const express = require("express");
const Task = require("../models/task");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/tasks", auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    owner: req.user._id,
  });
  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

// GET /tasks?limit=10&skip=2
// GET /tasks?sortBy=createdAt:desc
router.get("/tasks", auth, async (req, res) => {
  try {
    const match = {};
    const sort = {};

    if (req.query.completed) {
      match.completed = req.query.completed === "true";
    }

    if (req.query.sortBy) {
      const parts = req.query.sortBy.split(":");
      sort[parts[0]] = parts[1] === "desc" ? -1 : 1;
    }

    await req.user
      .populate({
        path: "tasks",
        match,
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort,
        },
      })
      .execPopulate();
    res.send(req.user.tasks);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/tasks/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findOne({ _id, owner: req.user._id });
    if (!task) return res.status(404).send();
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/tasks/:id", auth, async (req, res) => {
  try {
    const validFields = ["description", "completed"];
    const fields = Object.keys(req.body);
    let isValidOperation = fields.every((field) => validFields.includes(field));
    if (!isValidOperation)
      return res.status(404).send("Contains invalid fields in the update");

    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!task) return res.status(404).send();

    fields.forEach((field) => (task[field] = req.body[field]));
    await task.save();

    res.send(task);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.delete("/tasks/:id", auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!task)
      return res.status(404).send(`No task found with id "${req.params.id}"`);
    res.send(task);
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = router;
