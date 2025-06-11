"use client";
import { useEffect } from "react";
import Image from "next/image";
import "./home.css";
import home from "../../../public/home.jpg";
import data from "../../data/data.json";
import ProjectSection from "../projectSection/projectSection";
import TechSection from "../techSection/techSection";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-intro">
        <div className="home-desc">
          <h1>Hello there!</h1>
          <p>
            I’m Bruno Diaz.
            <br />
            Welcome to my portfolio! Here you can find out the various projects
            I’ve worked so far in my career. <br />
            Have fun browsing around!
          </p>
        </div>
        <div className="home-pic">
          <Image src={home} alt="just a pic" width={195} height={245} />
        </div>
      </div>
      <div className="divider"></div>
      <TechSection />
      <div className="divider" id="Projects"></div>
      {data.section.map((section) => (
        <ProjectSection
          key={section.id}
          title={section.title}
          projects={section.projects}
        />
      ))}
    </div>
  );
}
