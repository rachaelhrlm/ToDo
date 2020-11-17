const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");

router.get("/", taskController.findAll);
router.post("/", taskController.create);
router.put("/:id/status", taskController.toggleCompleted);
router.patch("/:id/status", taskController.toggleCompleted);
router.get("/:id", taskController.findById);
router.put("/:id", taskController.update);
router.patch("/:id", taskController.update);
router.delete("/:id", taskController.delete);

module.exports = router;
