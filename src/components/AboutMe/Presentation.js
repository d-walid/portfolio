import React from "react";
import "./AboutMe.css";

const AboutMeDetails = () => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front-presentation">ABOUT ME</div>
        <div className="card-back-presentation">
          <p>
            Hello :) My name is Walid, I’m 27 years old and I’m currently living
            in France. In this presentation, you will discover my working
            experience, my hobbies and what I’m doing in my job.
          </p>
          <p>
            So, in first, let’s talk about the present. I’m studying at Epitech,
            an IT school. Since November 2019, I’m learning the web development
            everyday in this school. I learned such things like HTML, CSS, PHP,
            SQL, Javascript and other things useful in my daily life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeDetails;
