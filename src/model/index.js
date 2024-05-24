const Doctor = require("./doctor");
const ConsultingRoom = require("./consultingRoom");
const Queue = require("./queue");
const Ticket = require("./ticket");
const Patient = require("./patient");

Doctor.hasOne(ConsultingRoom, {
  foreignKey: "id_doctor",
  as: "doctorConsulting"
});

ConsultingRoom.belongsTo(Doctor, {
  foreignKey: "id_doctor",
  as: "doctorConsulting"
});

Doctor.hasMany(Queue, {
  foreignKey: "id_doctor",
  as: "doctorQueue"
});

Queue.belongsTo(Doctor, {
  foreignKey: "id_doctor",
  as: "doctorQueue"
});

Doctor.hasMany(Ticket, {
  foreignKey: "id_doctor",
  as: "doctorTicket"
});

Ticket.belongsTo(Doctor, {
  foreignKey: "id_doctor",
  as: "doctorTicket"
})

Queue.hasMany(Ticket, {
  foreignKey: "id_queue",
  as: "queueTicket"
});

Ticket.belongsTo(Queue, {
  foreignKey: "id_queue",
  as: "queueTicket"
})

Patient.hasMany(Ticket, {
  foreignKey: "id_patient",
  as: "patientTicket"
});

Ticket.belongsTo(Patient, {
  foreignKey: "id_patient",
  as: "patientTicket"
})

module.exports = {
  Doctor,
  ConsultingRoom,
  Queue,
  Ticket,
  Patient,
}