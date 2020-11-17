let dbConn = require("../../config/db.config");

function Task(task) {
  this.description = task.description;
  this.completed = task.completed;
}

Task.create = (newTask, result) => {
  dbConn.query("INSERT INTO task SET ?", newTask, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Task.findById = (id, result) => {
  dbConn.query("SELECT * FROM task WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.findAll = (result) => {
  dbConn.query("SELECT * FROM task", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.update = (id, task, result) => {
  dbConn.query(
    "UPDATE task SET description=?, completed=? WHERE id=?",
    [task.completed ? 0 : 1, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Task.delete = (id, result) => {
  dbConn.query("DELETE FROM task WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.toggleCompleted = (id, task, result) => {
  dbConn.query(
    "UPDATE task SET completed=? WHERE id=?",
    [task.completed ? 0 : 1, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Task;
