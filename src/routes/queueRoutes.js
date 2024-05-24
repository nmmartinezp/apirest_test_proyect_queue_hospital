const express = require("express");
const queueController = require("../controller/queueController");

const router = express.Router();

router.get('/queue/all', queueController.getAllQueues);
router.post('/queue/add', queueController.addQueue);
router.put('/queue/edit/:id', queueController.modifyQueue);
router.delete('/queue/delete/:id', queueController.deleteQueue);

module.exports = router;