const Task = require("../models/task.models");

exports.findAll = (req, res) => {
  Task.findAll((err, task) => {
    if (err) {
      res.send(err);
    }
    res.send(task);
  });
};

exports.create = (req, res) => {
  const newTask = new Task(req.body);

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required fields" });
  } else {
    Task.create(newTask, (err, task) => {
      if (err) {
        res.send(err);
      }
      res.json({
        error: false,
        message: "Task added successfully!",
        data: task,
      });
    });
  }
};

exports.findById = (req, res) => {
  Task.findById(req.params.id, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required fields" });
  } else {
    Task.update(req.params.id, new Task(req.body), (err, task) => {
      if (err) {
        res.send(err);
      }
      res.json({ error: false, message: "Task successfully updated!" });
    });
  }
};

exports.delete = (req, res) => {
  Task.delete(req.params.id, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json({ error: false, message: "Task successfully deleted!" });
  });
};
exports.toggleCompleted = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required fields" });
  } else {
    Task.toggleCompleted(req.params.id, req.body, (err, task) => {
      if (err) {
        console.log(err);
        res.send(err);
      }
      res.json({ error: false, message: "Task successfully updated!" });
    });
  }
};
