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
        I am a passionate lover of all things technology, driven by a relentless curiosity and a constant desire to push the boundaries of what's possible. My journey has been anything but conventional. As a former business owner, I made the bold decision to pursue my true passion for development. Transitioning from business management to coding was not an easy feat, but it was a path I chose because I knew it was my true calling. Self-taught and highly self-motivated, I poured countless hours into learning programming languages, frameworks, and tools to make my dream a reality. This journey hasn't been without its challenges, but the passion and perseverance I have for what I do continue to fuel my growth and success.
        <br/><br/>

Persistence is one of my defining traits. I have a tendency to be a bit stubborn when it comes to solving problems, but that’s because I take immense pride in my work and always strive to deliver the best possible results. I'm constantly looking for ways to improve, refine my skills, and expand my knowledge. Whether it's learning new technologies or improving my problem-solving approaches, I am committed to continuous growth and learning.
<br/><br/>

One of the aspects I’m most proud of is my ability to communicate effectively. While I may be a bit shy in new or unfamiliar situations, I’ve been told by colleagues, mentors, and peers that I’m an excellent communicator. I’m able to explain complex ideas in a simple, relatable manner and connect with others in a meaningful way. That’s one of the reasons why I thrive in collaborative environments. I do my best work when I’m part of a great team, where everyone shares ideas, learns from each other, and works toward a common goal.
<br/><br/>
When I’m not coding or exploring new technologies, you can usually find me enjoying the outdoors. I make it a point to go on at least one hike every weekend to reconnect with nature and refresh my mind. Photography is another passion of mine; I love capturing moments and creating beautiful visuals through my lens. In addition to that, gaming is a favorite pastime of mine—it's not just a way to unwind, but also a source of inspiration for my creative pursuits, especially in game development.
<br/><br/>
Currently, I’m revisiting two of my favorite game development applications, Unity and GameMaker Studio 2. Both platforms offer unique opportunities to bring ideas to life, and I’m excited to dive deeper into both to further develop my skills and work on new projects. The world of game development continues to inspire me, and I’m always looking for ways to merge my technical expertise with my creative ideas.
<br/><br/>
In everything I do, I remain driven by the excitement of continuous learning, growth, and the pursuit of excellence.
        </p>
        <div id="hobbies-personality">
          <div id="hobbies-container">
            <h4 className="headline">Hobbies</h4>
            <p>Spending time with family</p>
            <p>Gaming</p>
            <p>Music production</p>
            <p>Unity and GM2</p>
            <p>photography</p>
            <p>Country Walks</p>
            <p>Art, drawing, painting</p>
          </div>
          <div>
            <h4 className="headline">Personality</h4>
            <p>Honest</p>
            <p>Easy-going</p>
            <p>Polite</p>
            <p>Determined</p>
            <p>Passionate</p>
          </div>
        </div>
      </div>
    </section>
  );
};
