const express = require("express");
const consultingRoomController = require("../controller/consultingRoomController");
const router = express.Router();

router.get('/consul/all', consultingRoomController.getAllConsultingRooms);
router.get('/consul/all/search', consultingRoomController.getAllConsultingRoomsByFilter);
router.get('/consul/:id', consultingRoomController.getInfoConsultingRoomById);
router.post('/consul/add', consultingRoomController.addConsultingRoom);
router.put('/consul/edit/:id', consultingRoomController.modifyConsultingRoom);

module.exports = router;