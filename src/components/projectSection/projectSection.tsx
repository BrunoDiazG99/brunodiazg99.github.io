import Image from "next/image";
import "./projectSection.css";
import { PROJECT_CARDS_URI } from "@/utils/utils";

type Project = {
  id: string;
  name: string;
  description: string;
  background: string;
};

type PSProps = {
  title: string;
  projects: Array<Project>;
};

export default function ProjectSection({ title, projects }: PSProps) {
  return (
    <div className="project-section">
      <div className="title">
        <h1>{title}</h1>
      </div>

      <div className="items">
        {projects.map((proj) => (
          <div className="project-card" key={proj.id}>
            <div className="card">
              <Image
                src={`${PROJECT_CARDS_URI}${proj.background}`}
                alt="just a pic"
                width={500}
                height={300}
              />
            </div>
            <div className="data">
              <p className="title">{proj.name}</p>
              <p className="description">{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
