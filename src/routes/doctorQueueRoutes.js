const express = require("express");
const doctorQueueController = require("../controller/doctorQueueController");
const router = express.Router();

router.get('/manageQueue/all/:id', doctorQueueController.getQueues);
router.put('/manageQueue/ticket/:id.:status', doctorQueueController.syncTicket);

module.exports = router;