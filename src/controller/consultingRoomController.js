const consultingRoomService = require("../service/consultingRoomService");
const { success } = require("../middleware/response");

class ConsultingRoomController {
  async getAllConsultingRooms(req, res, next) {
    try {
      const items = await consultingRoomService.getAllConsultingRooms();
      success(req, res, items, 200);
    } catch (err) {
      next(err);
    }
  }

  async getAllConsultingRoomsByFilter(req, res, next) {
    try {
      const items = await consultingRoomService.getAllConsultingRoomsByFilter(req.body);
      success(req, res, items, 200);
    } catch (err) {
      next(err);
    }
  }

  async getInfoConsultingRoomById(req, res, next) {
    try {
      const items = await consultingRoomService.getInfoConsultingRoomById(req.params.id);
      success(req, res, items, 200);
    } catch (err) {
      next(err);
    }
  }

  async addConsultingRoom(req, res, next) {
    try {
      const response = await consultingRoomService.addConsultingRoom(req.body);
      success(req, res, response, 200);
    } catch (err) {
      next(err);
    }
  }

  async modifyConsultingRoom(req, res, next) {
    try {
      const response = await consultingRoomService.modifyConsultingRoom(req.params.id, req.body);
      success(req, res, response, 200);
    } catch (err) {
      next(err);
    }
  }

  async deleteConsultingRoom(req, res, next){
    try {
      const response = await consultingRoomService.deleteConsultingRoom(req.params.id);
      success(req, res, response, 200);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ConsultingRoomController();
