import "./aboutDesc.css";
import Image from "next/image";
import aboutPic from "../../../public/about.jpg";

// TODO: Add a better way to add multiple br's

export default function AboutDesc() {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h1>Want to know more about me?</h1>
        <h2>-- Hi, I’m Bruno Diaz! Nice to meet you 🤝 </h2>
        <p>
          I’m a Software Engineer (technically Informatics because that’s what
          my BSc says) based in Peru with experience in Web Development, looking
          to start my journey into the Game Development scene.
          <br />
          <br />
          I go by Haruchon online, hence the name of this website.
          <br />
          <br />
          This is just a page to show my current and past projects, my
          experiences and some extra info here and there.
          <br />
          <br />
          Hopeful to be able to get my dreams done and maybe more!
          <br />
          <br />
          By the way I really love MapleStory, Pokemon and League so if you find
          some references around this page, well now you know why.
          <br />
          <br />
          If you want to contact me, please do so by email!
          <br />
          <br />
          Email: brunodiazg99@gmail.com
          <br />
          <br />
        </p>
      </div>
      <div className="about-pic">
        <Image src={aboutPic} alt="just a pic" width={768} height={1024} />
      </div>
    </div>
  );
}
