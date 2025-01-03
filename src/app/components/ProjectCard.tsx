import '../style/project.css'
import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface cards {
  imgUrl: string;
  title: string;
  description: string;
  previewUrl: string;
  gitUrl: string;
}

const ProjectCard: React.FC<cards> = ({ imgUrl, title, description, previewUrl, gitUrl }) => {
  return (
    <div className="project-card">
      <div
        className="project-card-image"
        style={{ background: `url(${imgUrl})` }}
      ></div>
      
      <div className="overlay">
        <Link href={gitUrl} className="icon-link">
          <CodeBracketIcon className="icon" />
        </Link>
        <Link href={previewUrl} className="icon-link">
          <EyeIcon className="icon" />
        </Link>
      </div>
      
      <div className="text-container">
        <h5 className="text-title">{title}</h5>
        <p className="text-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;