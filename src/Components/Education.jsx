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
import image from "../images/tim-mossholder-WE_Kv_ZB1l0-unsplash.jpg";

const imageAltText = "Education";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const educationList = [
  {
    title: "B.Tech in Computer Science and Engineering",
    description: "National Institute of Technology,   Raipur     CGPA: 9.18",
    url: "https://nitrr.ac.in",
  },
  {
    title: "Senior Secondary(Intermediate)",
    description: "Tirumala Junior College, Rajahmundry       Percentage: 98.8%",
    url: "https://tirumalaedu.com",
  },
  {
    title: "Secondary Education",
    description: "Sri Chaitanya Techno Schools, Devarapalli   GPA: 10.0",
    url: "https://srichaitanyaschool.net",
  },
];

const Education = () => {
  return (
    <section
      className="padding"
      id="education"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center", color: "white" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {educationList.map((education) => (
            <div className="box" key={education.title}>
              <a href={education.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px", color: "white" }}>{education.title}</h3>
              </a>
              <p className="small">{education.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
