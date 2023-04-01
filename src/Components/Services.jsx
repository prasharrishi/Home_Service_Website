import React from "react";
import "./Services.css";
import ServiceIcon from "./ServiceIcon";

function Services() {
  const servicesDetail = [
    {
      imagePath: "src/assets/Home.png",
      Title: "House Cleaning",
      Caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facilis similique sint, magnam fugiat impedit corporis ipsam! Explicabo, odit tenetur?",
    },
    {
      imagePath: "src/assets/Star.png",
      Title: "Office Cleaning",
      Caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facilis similique sint, magnam fugiat impedit corporis ipsam! Explicabo, odit tenetur?",
    },
    {
      imagePath: "src/assets/Delete.png",
      Title: "Toilet Cleaning",
      Caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facilis similique sint, magnam fugiat impedit corporis ipsam! Explicabo, odit tenetur?",
    },
    {
      imagePath: "src/assets/Send.png",
      Title: "Window Cleaning",
      Caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facilis similique sint, magnam fugiat impedit corporis ipsam! Explicabo, odit tenetur?",
    },
  ];

  return (
    <>
      <div className="services-heading">
        <h1 className="service-heading-left">
          {" "}
          Always Provide The Best Service
        </h1>
        <div className="service-heading-right">
          <p className="service-heading-right-top"> Our Services </p>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Rem, dolores.
        </div>
      </div>
      <div className="services-box">
        {servicesDetail.map((service, index) => (
          <ServiceIcon
            key={index}
            imageURl={service.imagePath}
            title={service.Title}
            Caption={service.Caption}
          />
        ))}
      </div>
    </>
  );
}

export default Services;
