"use client"
import '../style/hero.css'
import Image from "next/image";
import React from "react";
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <div>
      <div className="grid-container">
        <div className="col-span-7">
          <h1 className="text-white margin-bottom-6 text-6xl md:text-8xl">
            <span className="text-transparent bg-clip-text bg-gradient"> Hello Im </span> 
            <div className="margin-top-60"></div>
            <span className="inline-block">
            <TypeAnimation
      sequence={[
        'Rooh-U-Din',
        1000,
        'Student',
        1000,
        'Web Developer',
        1000,
        'UI/UX Designer', 
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
    </span>
          </h1>
          <p className="text-gray-200 text-2xl">
            Portfolio for school assignment
          </p>
          <div>
            <button className="button">Contact</button>
            <button className="button margin-top-3">Download CV</button>
          </div>
        </div>
        <div className="col-span-5">
            <div className="">
            <Image src="/photos/profile.png"
            alt="profile"
            className="object-cover"
            height={1100}
            width={1100}></Image>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;