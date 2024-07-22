import "./home.css";
import Image from "next/image";
import justPic from "../../public/haruchon.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="home-container">
        <div className="home-desc">
          <p>
            Hi!
            <br />
            I&apos;m Bruno a Web Developer from Peru! ... Lorem ipsum /
          </p>
        </div>
        <div className="home-pic">
          <Image src={justPic} alt="just a pic" width={236} height={296} />
        </div>
      </div>
    </main>
  );
}
