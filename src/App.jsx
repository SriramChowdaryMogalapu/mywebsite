/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Experience from "./Components/Experience";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Mogalapu Sriram Chowdary",
  title: "Web Designer & Data Scientist",
  email: "mogalapusriram391@gmail.com",
  gitHub: "SriramChowdaryMogalapu",
  instagram: "sriram.mogalapu",
  linkedIn: "sriram-chowdary-mogalapu-899500185",
  medium: "",
  twitter: "Sriram74987463",
  youTube: "UCGRAExi7yruzPmaFCAQDJKQ",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Projects />
      <Education />
      <Experience />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
