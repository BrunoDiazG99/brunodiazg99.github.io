"use client";
import Image from "next/image";
import "../projectDetails.css";

import animusicScreenshot from "@/../public/project-images/animusic/screenshot.png";

export default function AnimusicDetails() {
  return (
    <div className="proj-container">
      <div className="proj-desc">
        <h1>Animusic</h1>
        <h2>Anime music search</h2>
      </div>

      <div className="proj-desc">
        <p>
          This is a small project for searching (and in the future listening,
          hopefully) anime opening and ending themes. It was made with React,
          TypeScript and Tailwind CSS, and it uses the Jikan API to fetch the
          anime data, and the Spotify API to fetch the music data. The idea is
          to have a simple and easy to use interface for searching anime music,
          and to be able to listen to it directly from the app.
        </p>
      </div>

      <div className="proj-pic">
        <Image
          src={animusicScreenshot}
          alt="just a pic"
          width={500}
          height={300}
        />
      </div>

      <div className="proj-desc">
        <h2> Tech stack </h2>
        <ul className="list-disc">
          <li>React</li>
          <li>TypeScript</li>
          <li>Tailwind</li>
          <li>
            <a href="https://jikan.moe/" target="_blank">
              Jikan API
            </a>
          </li>
          <li>
            <a href="https://developer.spotify.com/" target="_blank">
              Spotify API
            </a>
          </li>
        </ul>
        <p>
          If you want to see the fleshed out project, check out their website ➡{" "}
          <a href="https://brunodiazg99.github.io/animusic/">Here!</a>
        </p>
        {/* <p>(It’s in Spanish by the way can’t really do much about it :p)</p> */}
      </div>
    </div>
  );
}
