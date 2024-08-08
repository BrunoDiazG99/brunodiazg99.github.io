import "./home.css";
import Image from "next/image";
import justPic from "../../../public/haruchon.png";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-desc">
        <h1>Hello there new buddy</h1>
        <p>
          I’m Bruno Diaz, aka Haruchon.
          <br />
          Welcome to my portfolio! Here you can find out the various projects
          I’ve worked so far in my career. <br />
          Have fun browsing around!
        </p>
      </div>
      <div className="home-pic">
        <Image src={justPic} alt="just a pic" width={236} height={296} />
      </div>
    </div>
  );
}
