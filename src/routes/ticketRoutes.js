const express = require("express");
const ticketController = require("../controller/ticketController");

const router = express.Router();

router.get('/ticket/all', ticketController.getAllTickets);
router.get('/ticket/all/search', ticketController.getAllTicketsByFilter);
router.post('/ticket/add', ticketController.addTicket);
router.put('/ticket/edit/:id', ticketController.modifyTicket);
router.delete('/ticket/delete/:id', ticketController.deleteTicket);

module.exports = router;