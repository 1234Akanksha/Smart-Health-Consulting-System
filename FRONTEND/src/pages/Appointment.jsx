import {useState} from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";
import axios from "axios";

const Appointment = () => {

  const [Email, setEmail] = useState("");
  const [Status, setStatus] = useState("");

  const handleUserSubmit = (e) =>{
    setEmail(e.target.value)
  }


  const handleAppointment =async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", Email);
    e.preventDefault();
    console.log(Email);
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/appointment/getappoint", { "email": Email },
        { withCredentials: true }
      );
      console.log(data?.userAppointments?.[0]?.status);
      setStatus(data?.userAppointments?.[0]?.status)
    } catch (error) {
      console.error(`Error fetching doctors!${error}`);
    }
  }
  
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | Smart Health Consulting System"}
        imageUrl={"/singh.png"}
      />
       <div className="container form-component appointment-form">
      <form onSubmit={handleAppointment}>
        <br/> <br/> <br/> <h1>
        <input onChange={handleUserSubmit} name="AppChecker"placeholder ="Check your Appointment"/>
        
        <button type="Submit" > Submit</button></h1>
      </form>
      <h1>
      {Status !== ""?<div> Your Appointment is {Status}</div>:<div> </div>}
      </h1>
      </div>
      <AppointmentForm/>
     
    </>
  );
};

export default Appointment;