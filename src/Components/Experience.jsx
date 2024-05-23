/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/absolutvision-82TpEld0_e4-unsplash.jpg";

const imageAltText = "Experience";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const experienceList = [
  {
    title: "Data Science with Python Intern",
    description:
      "Threat Prism(Coincent) from Oct-2023 to Dec-2023. Built two projects using concepts of machine learning.",
  },
  {
    title: "Research Internship",
    description:
      "IIIT Sricity under Dr. Chandra Mohan sir from Jun-2023 to Jul-2023. Did Research on Detection Of Binding Pockets On The Proteins.Deduced Some Important Outputs from the dataset.",
  },
];

const Experience = () => {
  return (
    <section
      className="padding"
      id="experience"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <h2 style={{ textAlign: "center" }}>Experience</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center", color: "white" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {experienceList.map((experience) => (
            <div className="box" key={experience.title}>
              <h3 style={{ flexBasis: "40px", color: "white" }}>{experience.title}</h3>
              <p className="small">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
