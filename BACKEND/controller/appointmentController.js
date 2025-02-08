import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Appointment } from "../models/appointmentSchema.js";
import { User } from "../models/userSchema.js";
import fs from "fs";
import path from "path";
import cloudinary from "cloudinary";



// Post Appointment - Creating new appointment
export const postAppointment = catchAsyncErrors(async (req, res, next) => {
  const { reportFile } = req.files;

    // Allowed file formats for avatar
    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
    if (!allowedFormats.includes(reportFile.mimetype)) {
        return next(new ErrorHandler("File Format Not Supported!", 400));
    }
  let {
    firstName,
    lastName,
    email,
    phone,
    adharCard, // Using Aadhar Card instead of NIC
    dob,
    gender,
    appointment_date,
    appointment_time, // Added time field
    department,
    doctor_firstName,
    doctor_lastName,
    hasVisited,
    address,
  } = req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !adharCard ||
    !dob ||
    !gender ||
    !appointment_date ||
    !appointment_time ||
    !department ||
    !doctor_firstName ||
    !doctor_lastName ||
    !address
  ) {
    return next(new ErrorHandler("Please fill the full form!", 400));
  }

  // Log incoming request data
  console.log("Incoming appointment data:", req.body);

  let uploadedFilePath = null;
  if (req.file) {
    uploadedFilePath = req.file.path; // Assuming `multer` is used for file upload
    console.log("Uploaded file path:", uploadedFilePath);
  }

  // Find doctor in the database based on first name, last name, and department
  const isConflict = await User.find({
    firstName: doctor_firstName.trim(),
    lastName: doctor_lastName.trim(),
    role: "Doctor",
    doctorDepartment: department.trim(),
  });

  // Log the doctor search criteria
  console.log("Searching for doctor with criteria:", {
    firstName: doctor_firstName.trim(),
    lastName: doctor_lastName.trim(),
    role: "Doctor",
    department: department.trim(),
  });

  // Check if doctor exists
  if (isConflict.length === 0) {
    // Delete the uploaded file if doctor is not found
    if (uploadedFilePath) fs.unlinkSync(uploadedFilePath);
    return next(new ErrorHandler("Doctor not found", 404));
  }

  // Handle multiple doctor matches (conflict)
  if (isConflict.length > 1) {
    if (uploadedFilePath) fs.unlinkSync(uploadedFilePath);
    return next(
      new ErrorHandler(
        "Doctor conflict! Please contact through email or phone.",
        400
      )
    );
  }

  const doctorId = isConflict[0]._id;
  const patientId = req.user._id;
  // Upload avatar to Cloudinary
  const cloudinaryResponse = await cloudinary.uploader.upload(reportFile.tempFilePath);
  if (!cloudinaryResponse || cloudinaryResponse.error) {
      console.error("Cloudinary Error:", cloudinaryResponse.error || "Unknown Cloudinary error");
      return next(new ErrorHandler("Failed To Upload Doctor Avatar To Cloudinary", 500));
  }
  hasVisited=false
  console.log(hasVisited)
  // Create new appointment
  const appointment = await Appointment.create({
    firstName,
    lastName,
    email,
    phone,
    adharCard, // Ensure Aadhar Card is used consistently
    dob,
    gender,
    appointment_date,
    appointment_time, // Save time
    department,
    doctor: {
      firstName: doctor_firstName,
      lastName: doctor_lastName,
    },
    hasVisited,
    address,
    doctorId,
    patientId,
    file: {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
  },
  });

  res.status(200).json({
    success: true,
    appointment,
    message: "Appointment sent successfully!",
    file:{
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
  },
  });
});

// Get all appointments
export const getAllAppointments = catchAsyncErrors(async (req, res, next) => {
  const appointments = await Appointment.find();
  res.status(200).json({
    success: true,
    appointments,
  });
});

export const findUserAppointment = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body);
  const userAppointments = await Appointment.find({email:req.body.email});
  console.log(userAppointments);
  res.status(200).json({
    success: true,
    userAppointments,
  });
});



// Update appointment status
export const updateAppointmentStatus = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let appointment = await Appointment.findById(id);
  if (!appointment) {
    return next(new ErrorHandler("Appointment not found!", 404));
  }
  appointment = await Appointment.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "Appointment status updated!",
    appointment,
  });
});

// Delete appointment
export const deleteAppointment = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const appointment = await Appointment.findById(id);
  if (!appointment) {
    return next(new ErrorHandler("Appointment not found!", 404));
  }
  await appointment.deleteOne();
  res.status(200).json({
    success: true,
    message: "Appointment deleted successfully!",
  });
});

export const uploadDocument = async (req, res) => {
  try {
      const result = await cloudinary.v2.uploader.upload(req.file.path, {
          folder: "documents",
      });

      req.user.documents.push({ url: result.secure_url });
      await req.user.save();

      res.status(200).json({ message: "Document uploaded successfully!", document: result.secure_url });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

export const getReports = async (req, res) => {
  res.status(200).json({ reports: req.user.reports });
};


