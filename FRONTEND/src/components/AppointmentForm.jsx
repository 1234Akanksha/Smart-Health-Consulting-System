/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adharCard, setAdharCard] = useState(""); // Updated to Adhar Card
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState(""); // New state for time input
  const [file, setFile] = useState(null); // New state for file upload
  const [filePreview, setFilePreview] = useState(null); // New state for file upload
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorId, setDoctorId] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);
  const [doctors, setDoctors] = useState([]);

  const departmentsArray = [
    "Pediatrics",
    "Yoga",
    "Pyschiatrist",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const handleReportUpload = (e) =>{
    const file = e.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFilePreview(reader.result);
      setFile(file);
    };
  }

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/doctors",
          { withCredentials: true }
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error("Error fetching doctors!");
      }
    };
    fetchDoctors();
  }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();

    // Custom Validation for Required Fields
    console.log(firstName)
    console.log(lastName)
    console.log(email)
    console.log(phone)
    console.log(file)
    console.log(adharCard)
    console.log(dob)
    console.log(gender)
    console.log(appointmentDate)
    console.log(appointmentTime)
    console.log(doctorId)
    console.log(address)
      if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !adharCard || // Ensure Adhar Card is checked
      !dob ||
      !gender ||
      !appointmentDate ||
      !appointmentTime || // Ensure time is selected
      !doctorId ||
      !address
    ) {
      toast.error("Please fill in all the fields.");
      return; // Exit the function if validation fails
    }

    try {
      const hasVisitedBool = Boolean(hasVisited);
      const selectedDoctor = doctors.find((doc) => doc._id === doctorId);
      console.log(file)
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("adharCard", adharCard); // Append Adhar Card
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("appointment_date", appointmentDate);
      formData.append("appointment_time", appointmentTime);
      formData.append("address", address);
      formData.append("hasVisited", hasVisitedBool);
      formData.append("reportFile", file);
      formData.append("department", department);
      formData.append("doctor_firstName", selectedDoctor.firstName);
      formData.append("doctor_lastName", selectedDoctor.lastName);
      formData.append("hasVisited", hasVisitedBool);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/appointment/post",formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      toast.success(data.message);
      // Clear form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setAdharCard(""); // Reset Adhar Card
      setDob("");
      setGender("");
      setAppointmentDate("");
      setAppointmentTime("");
      setDepartment("Pediatrics");
      setDoctorId("");
      setHasVisited(false);
      setAddress("");
      setFile(null); // Clear file input
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred!");
    }
  };

  return (
    <div className="container form-component appointment-form">
      <h2>Appointment</h2>
      <form onSubmit={handleAppointment}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Adhar Card" // Updated placeholder
            value={adharCard}
            onChange={(e) => setAdharCard(e.target.value)}
            required
          />
          <input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div>
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="date"
            placeholder="Appointment Date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="time"
            placeholder="Appointment Time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            required
          />
           </div>
        <div>
          <input
            type="file"
            onChange={handleReportUpload}
            accept=".jpg,.jpeg,.png,.pdf"
          />
        </div>

        <div>
          <select
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
              setDoctorId(""); // Reset doctor selection when department changes
            }}
            required
          >
            {departmentsArray.map((depart, index) => (
              <option value={depart} key={index}>
                {depart}
              </option>
            ))}
          </select>
          <select
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            disabled={!department}
            required
          >
            <option value="">Select Doctor</option>
            {doctors
              .filter((doctor) => doctor.doctorDepartment === department)
              .map((doctor, index) => (
                <option value={doctor._id} key={index}>
                  {doctor.firstName} {doctor.lastName}
                </option>
              ))}
          </select>
        </div>
        <textarea
          rows="10"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          required
        />
        <div
          style={{
            gap: "10px",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          <p style={{ marginBottom: 0 }}>Have you visited before?</p>
          <input
            type="checkbox"
            checked={hasVisited}
            onChange={(e) => setHasVisited(e.target.checked)}
            style={{ flex: "none", width: "25px" }}
          />
        </div>
        <button type="submit" style={{ margin: "0 auto" }}>
          GET APPOINTMENT
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
