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
        <h2 className="headline">About</h2>
        <p className="text">
          For the past 10 years I've been self employed, running a small
          business which was both a physical and online artist materials store,
          at a later date I also began work as a{" "}
          <span className="white-text">web designer</span>. I've worked alone
          during this time discovering that I was very much{" "}
          <span className="white-text">self-motivated</span>, determined, and{" "}
          <span className="white-text">enthusiastic</span>. but during my self
          employment I wanted to pursue a greater goal, spending the last 2
          years planning a transition to change my occupation, following a set
          of goals, learning and absorbing as much as I can whilst balancing my
          business and home life. Working with code is something I've always
          wanted to do, I'm
          <span className="white-text"> keen to learn more</span> and would love
          an opportunity to settle into a front end role. Outside of work, I'm a
          gamer, a huge fan of real time strategies games, action RPG's and
          occasionally I play first person shooter's (very badly). I also love
          to draw and paint, although that hobby has taken a back seat recently.
          I have a beautiful partner called Sam, and a lovely 3 year old son
          called Casey.
        </p>
        <div id="hobbies-personality">
          <div id="hobbies-container">
            <h4 className="headline">Hobbies</h4>
            <p>Spending time with family</p>
            <p>Gaming</p>
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
