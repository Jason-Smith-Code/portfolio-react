import React, { useRef } from "react";
import { useIntersection } from "../../useIntersection";
import "./About.scss";

export const About = () => {
  const ref = useRef();
  const inViewport = useIntersection(ref, "100px");

  if (inViewport) {
    ref.current.classList.remove("hidden");
    ref.current.classList.add("fade-in-element");
  }

  return (
    <section id="about">
      <div ref={ref} className="text-block center-container hidden">
        <h2 className="headline">About Me</h2>
        <p className="text">
          Prior to working as a{" "}
          <span className="white-text">full-stack developer</span>, I was self
          employed running a small business which was an online artist materials
          store that also had a physical presence in my local town. During that
          period of self employment I also started another business as a{" "}
          <span className="white-text">web designer </span>
          where I built up a solid reputation for being awesome with design.
          Being self employed I discovered that I was{" "}
          <span className="white-text">self-motivated</span>, determined, and{" "}
          <span className="white-text">enthusiastic</span>. But during my self
          employment I wanted to pursue a greater goal, spending the last 2
          years of the period planning a transition to change my occupation,
          following a set of goals, learning and absorbing as much as I can
          whilst balancing my business and home life. Working with code was
          something I always wanted to do, I'm was always
          <span className="white-text"> keen to learn</span> more. I'm a
          <span className="white-text"> grafter</span> and{" "}
          <span className="white-text">passionate</span> about the work I do,
          I'm also proud of what I've achieved, so excited to progress more.
          Outside of work, I'm a gamer, a huge fan of real time strategies
          games, action RPG's and occasionally I play first person shooter's
          (very badly). I also love to draw and paint, although that hobby has
          taken a back seat recently. I have a beautiful partner called Sam, and
          a lovely 4 year old son called Casey.
        </p>
        <div id="hobbies-personality">
          <div id="hobbies-container">
            <h4 className="headline">Hobbies</h4>
            <p>Spending time with family</p>
            <p>Gaming</p>
            <p>Playing with software</p>
            <p>Technology</p>
            <p>Country Walks</p>
            <p>Art, drawing, painting</p>
          </div>
          <div>
            <h4 className="headline">Personality</h4>
            <p>Honest</p>
            <p>Easy-going</p>
            <p>Polite</p>
            <p>Determined</p>
          </div>
        </div>
      </div>
    </section>
  );
};
