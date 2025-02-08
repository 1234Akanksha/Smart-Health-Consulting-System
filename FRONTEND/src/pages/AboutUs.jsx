/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import HealthTips from "../components/HealthTips";
import Health from "../components/Health";
import Food from "../components/Food";
import Sleep from "../components/Sleep";
import Exercise from "../components/Exercise";
import Drink from "../components/Drink";
import Outdoor from "../components/Outdoor";
const AboutUs = () => {
  return (
    <>
      <HealthTips
        title={"Health Tips for Patients | Smart Health Consulting System"}
        imageUrl={"/healthtips.png"}
      />
      <Health imageUrl={"/food4.png"} />
      <Food
        title={"Limit processed foods and sugar"}
        imageUrl={"/sugar4.jpg"}
      />
      <Sleep imageUrl={"/water2.jpg"} />
      <Exercise
        title={"Exercise regularly "}
        imageUrl={"/exercise2.png"}
        />
        <Drink imageUrl={"/screen.jpg"} />
        <Outdoor
        title={"Get outdoors daily "}
        imageUrl={"/cycle.jpg"}
        />

    </>
  );
};

export default AboutUs;