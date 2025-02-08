import express from "express";
import {
  
  deleteAppointment,
  getAllAppointments,
  postAppointment,
  updateAppointmentStatus,
  uploadDocument,
  getReports,
  findUserAppointment
} from "../controller/appointmentController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isPatientAuthenticated, postAppointment);
router.get("/getall", isAdminAuthenticated, getAllAppointments);
router.post("/getappoint", findUserAppointment);
router.put("/update/:id", isAdminAuthenticated, updateAppointmentStatus);
router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment);
router.post("/upload", isPatientAuthenticated, uploadDocument);
router.get("/reports", isPatientAuthenticated, getReports);

export default router;