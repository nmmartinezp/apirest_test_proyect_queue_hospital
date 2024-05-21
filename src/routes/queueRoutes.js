const express = require("express");
const queueController = require("../controller/queueController");

const router = express.Router();

router.get('/tickets', queueController.getAllTickets);
router.get('/tickets/search', queueController.getTicketsByCriterion);

module.exports = router;