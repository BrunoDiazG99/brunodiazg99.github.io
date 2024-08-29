"use client";
import { useEffect } from "react";
import Image from "next/image";
import "../projectDetails.css";
import seinn1 from "@/../public/project-images/seinn/seinn1.png";
import seinn2 from "@/../public/project-images/seinn/seinn2.png";
import seinn3 from "@/../public/project-images/seinn/seinn3.png";
import seinn4 from "@/../public/project-images/seinn/seinn4.png";
import seinn5 from "@/../public/project-images/seinn/seinn5.png";

export default function SeinnDetails() {
  return (
    <div className="proj-container">
      <div className="proj-desc">
        <h1>Seinn</h1>
        <h2>My first game ever</h2>
      </div>
      <div className="proj-pic">
        <Image src={seinn1} alt="just a pic" width={720} height={540} />
      </div>

      <div className="proj-desc">
        <p>
          There’s so much to say about Seinn. This project began as my end of
          career project, back in 2019. I decided that I wanted to work on a
          game development project as my last project in the career, since that
          was the main reason for me to study such degree. So together with some
          professors, we came up with and idea of an educational math game, that
          would help children get their algebraic and arithmetic skills leveled
          up. The project is far from perfect, as it’s the first experience I
          had developing games, but I always come back to it thinking I did a
          very impressive job for, again, being my first game ever.
        </p>
      </div>

      <div className="proj-pic pics-row">
        <Image src={seinn2} alt="just a pic" width={480} height={360} />
        <Image src={seinn3} alt="just a pic" width={480} height={360} />
      </div>

      <div className="proj-desc">
        <p>
          This game’s development includes a GDD, some mockups and the final
          product being the game itself. The original intent for this game was
          to connect the game’s educational module to a web based configuration
          and profiles server, but the server is long gone (as it was only made
          available for a few days for the presentation) and I don’t really have
          the details on how the profiles work so I would have to do it all from
          scratch if I wanted that to work. So, for now, the game has
          pre-defined configurations in the title screen.
        </p>
        <br />
        <p>
          Why is this relevant you may think? Because the game’s educational
          features change based on the needs of the user. This was the key
          feature that made it a viable end of career project in my univ.
          Example of how it worked: If a child needs to work on their basic
          operations skills, the game’s mechanics will only show smaller numbers
          and a variety of operations. In contrast, if a child is learning
          fractions and needs to see and operate with them more often, the game
          will mostly show fractions within it's mechanics.
        </p>
        <br />
        <p>
          Again, this project is far from perfect. So the actual implementation
          of what I described lacks a lot, but I tried my best on it.{" "}
        </p>
      </div>

      <div className="proj-pic pics-row">
        <Image src={seinn4} alt="just a pic" width={480} height={360} />
        <Image src={seinn5} alt="just a pic" width={480} height={360} />
      </div>

      <div className="proj-desc">
        <h2> Tech stack </h2>
        <ul className="list-disc">
          <li>Unity</li>
          <li>Tiled</li>
          <li>Figma</li>
        </ul>
        <p>
          If you are interested in checking the project you can visit the
          repository ➡ <a href="https://github.com/Haruchon/Seinn">Here!</a>
        </p>
        <br />
        <p>The repository also contains various documents, including:</p>
        <ul className="list-disc">
          <li>A Game Design Document</li>
          <li>A Serious Game Design Canvas</li>
          <li>A list and description of the educative elements used</li>
          <li>Some details on the design patterns for the mechanics used</li>
          <li>Some (very rough) mockups</li>
        </ul>
        <p>
          So check them out to your heart's content!
          <br />
          Disclaimer: Everything is in Spanish! Sorry about that but let me know
          if you are interested in an English version!!
        </p>
      </div>
    </div>
  );
}
