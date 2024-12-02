import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./techSection.css";
import Image from "next/image";

interface Technology {
  name: string;
  tech: {
    name: string;
    logo: string;
  }[];
}

interface Category {
  category: Technology[];
}

const techStack: Category = {
  category: [
    {
      name: "Web Development",
      tech: [
        {
          name: "React",
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        },
        {
          name: "Redux",
          logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
        },
        {
          name: "JavaScript",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png",
        },
        {
          name: "TypeScript",
          logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
        },
        {
          name: "HTML5",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        },
        {
          name: "CSS",
          logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        },
        {
          name: "Sass",
          logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
        },
      ],
    },
    {
      name: "Design",
      tech: [
        {
          name: "Figma",
          logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        },
      ],
    },
    {
      name: "Game Development",
      tech: [
        {
          name: "Unity",
          logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg",
        },
        {
          name: "Godot",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg",
        },
        {
          name: "Tiled",
          logo: "https://static.macupdate.com/products/62323/l/tiled-logo.png?v=1663570260",
        },
      ],
    },
  ],
};

export default function TechSection({}) {
  return (
    <div className="tech-container">
      <h2>{"Techs 'n Tools"}</h2>
      {techStack.category.map((category, index) => (
        <div className="tech-category" key={index}>
          <h3>{category.name}</h3>
          <div className="tech-grid">
            {category.tech.map((tech, index) => (
              <div className="tech-logo" key={index}>
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="tech-logo"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
