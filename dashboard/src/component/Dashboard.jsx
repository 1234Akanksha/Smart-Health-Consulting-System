/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const { isAuthenticated, admin } = useContext(Context);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/appointment/getall",

          { withCredentials: true }

        );
        setAppointments(data.appointments); // Ensure data.appointments holds the appointments array
      } catch (error) {
        toast.error("Failed to fetch appointments!"); // Show an error message
        setAppointments([]); // Reset appointments on error
      }
    };

    fetchAppointments();
  }, []);

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/appointment/update/${appointmentId}`,
        { status },  
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message); // Notify success
    } catch (error) {
      toast.error(error.response.data.message || "Error updating status!"); // Show error message
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />; // Redirect if not authenticated
  }

  return (
    <section className="dashboard page">
      <div className="banner">
        <div className="firstBox">
          <img src="/doc.png" alt="docImg" />
          <div className="content">
            <div>
              <p>Hello,</p>
              
            </div>
            <p>
            The good physician treats the disease; <br/>
            the great physician treats the patient who has the disease.
            <br/>
            Their ethical commitment to the well-being of patients makes 
            them invaluable in real-time crises and routine care.
            </p>
          </div>
        </div>
        <div className="secondBox">
          <p>Total Appointments</p>
          <h3>{appointments.length}</h3> {/* Dynamic count of appointments */}
        </div>
        <div className="thirdBox">
          <p>Registered Doctors</p>
          <h3>10</h3> {/* You can also fetch this data from the server if needed */}
        </div>
      </div>
      <div className="banner">
        <h5>Appointments</h5>
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Date</th>
              <th>Time</th>
              <th>Doctor</th>
              <th>Department</th>
              <th>Status</th>
              <th>Visited</th>
              <th>Reports</th>
            </tr>
          </thead>
          
          <tbody>
            {console.log(appointments)}
            {appointments && appointments.length > 0 ? (
              appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                  <td>{new Date(appointment.appointment_date
                  ).toDateString()}</td>
                  <td>{appointment.appointment_time
                  }</td>
                  <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
                  <td>{appointment.department}</td>
                  <td>
                    <select
                      className={
                        appointment.status === "Pending"
                          ? "value-pending"
                          : appointment.status === "Accepted"
                          ? "value-accepted"
                          : "value-rejected"
                      }
                      value={appointment.status}
                      onChange={(e) =>
                        handleUpdateStatus(appointment._id, e.target.value)
                      }
                    >
                      <option value="Pending" className="value-pending">
                        Pending
                      </option>
                      <option value="Accepted" className="value-accepted">
                        Accepted
                      </option>
                      <option value="Rejected" className="value-rejected">
                        Rejected
                      </option>
                    </select>
                  </td>
                  

                  <td>
                  
                  {console.log(appointment.hasVisited)} {/* Log to check the value */}
                    {appointment.hasVisited === true ? 
                      <GoCheckCircleFill className="green" />
                     : 
                      <AiFillCloseCircle className="red" />
                    }
                  </td>
                  <td><a href={appointment.file.url} target="_blank" rel="noopener noreferrer" >Click Here</a></td>
                  
                </tr>

              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No Appointments Found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
