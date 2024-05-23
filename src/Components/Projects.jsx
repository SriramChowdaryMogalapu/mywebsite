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
import "../styles.css";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/octavian-dan-b21Ty33CqVs-unsplash.jpg";

const imageAltText = "Projects";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Temperature Converter",
    description:
      "Web Application that Automatically converts into other scales once the user enters the input.It contains the formulas for converting scales, at the footer for the knowledge of the user. HTML is used to structure the website and CSS is used to beautify the website.JavaScript is used to convert the temperature values.",
    url: "https://temperatureconverter-sriram.netlify.app/",
  },
  {
    title: "Surprise Housing",
    description:
      "Built a regression model using regularization to predict the actual value of the prospective properties and decide whether the company to invest in them or not. The Project is built using Python language and Lasso and Rigid Regression models. It also covers the Data Exploration and Imputation part.",
    url: "https://github.com/SriramChowdaryMogalapu/surpriseHousing",
  },
  {
    title: "Hierarchical Clustering",
    description:
      "Segmented Customers using Agglomerative hierarchical clustering technique in machine learning. The dendrogram representing this can be found by running the ipynb file available in github. Using this Segmentation makes marketing to be done easily.",
    url: "https://github.com/SriramChowdaryMogalapu/hierarchicalClustering",
  },
  {
    title: "College Management System in C++",
    description:
      "Through this project, we can maintain the student records in a file. You can add a student through 1st choice add and then it asks for student details after entering them it saves them in the College.txt file.You can ask the system to display all or edit student records.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Projects = () => {
  return (
    <section className="padding" id="projects" style={{ backgroundColor: "black", color: "white" }}>
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center", color: "white" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px", color: "white" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
