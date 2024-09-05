import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./techSection.css";
import Image from "next/image";

interface Technology {
  name: string;
  description: string;
  logo: string;
}

const techStack: Technology[] = [
  {
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "HTML5",
    description: "The standard markup language for creating web pages.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    name: "CSS",
    description:
      "A style sheet language used for describing the look and formatting of a document.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    name: "Figma",
    description: "A powerful online UI design and prototyping tool.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "Unity",
    description:
      "A game engine used to develop 2D and 3D games and simulations.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg",
  },
  {
    name: "Godot",
    description: "An open-source game engine for developing 2D and 3D games.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg",
  },
  {
    name: "TypeScript",
    description:
      "A strongly typed programming language that builds on JavaScript.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    name: "Redux",
    description: "A predictable state container for JavaScript apps.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
  },
  {
    name: "Sass",
    description:
      "A CSS extension language used to write efficient and maintainable stylesheets.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
  },
];

export default function TechSection({}) {
  return (
    <div className="tech-carousel-container">
      <h2>Technologies I've Worked With</h2>
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        emulateTouch
        showArrows={false}
        showStatus={false}
        showIndicators={false}
      >
        {techStack.map((tech) => (
          <div key={tech.name} className="tech-item">
            <div className="tech-logo">
              <Image
                src={tech.logo}
                alt={tech.name}
                width={80}
                height={80}
                className="tech-logo"
              />
            </div>
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
