"use client";
import { useEffect } from "react";
import Image from "next/image";
import "../projectDetails.css";

import crecemasDist from "@/../public/project-images/workplace/crecemas-dist.png";

export default function WorkplaceDetails() {
  return (
    <div className="proj-container">
      <div className="proj-desc">
        <h1>Crecemas+</h1>
        <h2>My first job</h2>
      </div>

      <div className="proj-desc">
        <p>
          Crecemas+ is the first project I worked on outside of uni. This
          experience allowed me to refine a bit more my Front-end development
          skills, precisely using React and React Native as the chosen libraries
          and the classic CSS for styling. Within this project, my teammates and
          I developed and maintained a set of applications that would support a
          digital marketplace ecosystem which included:
        </p>

        <ul className="list-disc">
          <li>
            A distribution management app, for any warehouse owners that would
            be selling products to stores to eventually be sold
          </li>
          <li>
            A store management app, for any store owners that would be selling
            products to consumers
          </li>
          <li>
            and A consumer app, for all the consumers in the vicinity to browse
            available stores and buy their products
          </li>
        </ul>
      </div>

      <div className="proj-pic">
        <Image src={crecemasDist} alt="just a pic" width={500} height={300} />
      </div>

      <div className="proj-desc">
        <h2> Tech stack </h2>
        <ul className="list-disc">
          <li>React</li>
          <li>React Native</li>
          <li>CSS</li>
          <li>Git Lab</li>
        </ul>
        <p>
          If you want to see the fleshed out project, check out their website ➡{" "}
          <a href="https://www.crecemas.com/">Here!</a>
        </p>
        <p>(It’s in Spanish by the way can’t really do much about it :p)</p>
      </div>
      <br />

      <div className="proj-desc">
        <h1>Reliable Reports</h1>
        <h2>Thanks to ExSquared</h2>
      </div>

      <div className="proj-desc">
        <p>
          I got to work for Reliable Reports via staffing thanks to ExSquared
          (technically hired by them). Within this timeframe, I got to work on 3
          projects for real estate inspections management, all of them using
          React and basic CSS, which are:
        </p>
        <ul className="list-disc">
          <li>
            Migration and optimization of their main Property Inspection Web App
          </li>
          <li>Development of an Inspections Routing Web App</li>
          <li>Development of an Inspections Management Web App</li>
        </ul>
        <p>
          These applications, specially the last 2, allowed me to refine my
          Decision making skills, as I was basically in charge of the front end
          architecture and development. I believe I did a good job, as the
          higher ups liked the final result.
        </p>
      </div>

      <div className="proj-desc">
        <h2> Tech stack </h2>
        <ul className="list-disc">
          <li>React</li>
          <li>CSS</li>
          <li>Git Hub</li>
        </ul>
        <p>Sadly, I can’t provide better images on the projects made</p>
      </div>
    </div>
  );
}
