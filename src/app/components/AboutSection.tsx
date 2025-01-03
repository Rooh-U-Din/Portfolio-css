"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import "../style/about.css";

const Tab_Data = [
  {
    title: "Skills",
    id: "skills",
    Content: (
      <ul className="custom-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>NextJS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    Content: (
      <ul className="custom-list">
        <li>Metric</li>
        <li>Inter</li>
        <li>Programming Learning</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id:string) => {
    setTab(id);
  };

  return (
    <div className="about-section" id="about">
      <div className="about-container ">
        <Image src="/photos/pc.png" alt="img" width={500} height={500} />
        <div className="about-content">
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-base lg:text-lg">
            I am student at giaic i am learing programing i have <br />
            learned HTML,CSS,JAVASCRIPT/TYPESCRIPT and <br />
            NextJS i am a quick learner and iam always looking for <br /> expend
            my knowledge and skill.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={()=> handleTabChange("skills")}active={(tab==="skills")}>Skills</TabButton>
            <TabButton selectTab={()=> handleTabChange("education")}active={(tab==="education")}>Education</TabButton>
          </div>
          <div className="mt-8">{Tab_Data.find((t) => t.id===tab)?.Content}</div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;