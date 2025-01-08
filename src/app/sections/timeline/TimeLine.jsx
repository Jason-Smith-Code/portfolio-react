import React, { useRef } from "react";
import { useIntersection } from "../../useIntersection";
import "./TimeLine.scss";

export const TimeLine = () => {
  const ref = useRef();

  const inViewport = useIntersection(ref, "100px");
  if (inViewport) {
    ref.current.classList.remove("hidden");
    ref.current.classList.add("fade-in-element");
  }

  const timeLineData = [
    {
      dateFrom: "12/01/2023",
      dateTo: "Current",
      title: "Full Stack Developer",
      subTitle: "Accenture",
      Description: <>
        <p>
          During my time at Accenture, I dedicated the majority of my efforts to a government project developed with TypeScript, React, Cypress, Jest, and a government design framework. As a UI Developer, I was responsible for delivering new routes and functionality within an existing application. This required close collaboration with a large, cross-functional team that initially began with two UI developers and later expanded to four. I worked alongside backend developers, testers, business analysts, and a UX team. I was provided mural designs, documentation, and a Jira board with tickets in a sprint based work flow. Additionally, I actively participated in story refinement sessions and engaged with business analysts to clarify and define the functionality of the application.
        </p>
        <br/>
        <p>
          Our code underwent rigorous testing with Cypress, Cucumber, and Jest, and I found Cypress to be particularly valuable, as it provided the most confidence in the quality and reliability of the code. A significant challenge we faced was inheriting an application from another company, which contained substantial code duplication and inefficiencies. About 20% of my time was spent refactoring this code to align with our team’s coding standards and to improve overall performance and maintainability.
        </p>
        <br/>
        <p>
          In addition to development, I was deeply involved in several major Node.js upgrades, which were critical to maintaining the application’s security. These upgrades required me to address complex issues related to package dependencies, which I resolved to ensure a stable and secure platform. I also contributed to the creation of detailed documentation to help new team members navigate the complexities of the project. To facilitate this process, I led shadowing sessions for new starters, helping them get up to speed quickly.
        </p>
        <br/>
        <p>
          I had the opportunity to lead a Show and Tell presentation to our team and client for a government project, where I demonstrated the front end of a new route that our team had been working on. This provided an opportunity to highlight the progress we had made and was received well by wider stakeholders.
        </p>
        <br/>
        <p>
          In addition to my primary responsibilities, I also led a small team on a charity project, where we developed an application built with React. This application was designed to manage the data of clients attending boat trips, aimed at both admin users and clients. Despite being for a charity, the project was quite complex, and we worked toward delivering an MVP. I took the initiative to lead the project from its early stages, thoroughly analyzing the charity's documentation and creating an application diagram to guide the team’s development. Throughout the project, I organized regular Show and Tell sessions with the client, presenting our progress and ensuring that the application met their needs and expectations. Our focus was on building a robust MVP that could effectively manage client data for the boat trips.
        </p>
      </>,
    },
    {
      dateFrom: "2021",
      dateTo: "2022",
      title: "Code Accademy",
      subTitle: "Front end developer",
      Description: `
      I chose this course to both refresh and expand my existing knowledge, with a focus on deepening my understanding of JavaScript and modern frameworks like React. It provided me with the confidence and skills needed to start my own projects and continue my learning journey. The course covered a range of essential topics, including HTML, CSS, and JavaScript, as well as version control with Git and GitHub. It also introduced me to popular frameworks such as React, along with libraries like Redux and React Router. Additionally, I gained experience with testing libraries, including Jest, Mocha, and React Testing Library, enhancing my ability to write robust and maintainable code.
      `,
    },
    {
      dateFrom: "2018",
      dateTo: "2022",
      title: "Web Designer",
      subTitle: "Self Employed",
      Description: `
      I collaborated with small businesses in my local area to design and develop impactful websites that effectively convert visitors into customers. By leveraging my graphic design expertise alongside my knowledge of HTML, CSS, and JavaScript, I was able to deliver high-quality, user-centric solutions. I worked closely with clients through face-to-face meetings to understand their vision, set expectations, review progress, and make adjustments as needed. While I thoroughly enjoyed this work, I was eager to transition into a team environment where I could contribute to larger projects and be part of something more expansive.
        `,
    },
    {
      dateFrom: "2012",
      dateTo: "2022",
      title: "Business Owner",
      subTitle: "Artist Materials Online and physical store",
      Description: 
      <>
      <p>
        While working full-time, I decided to take out a loan in order to invest in a number of UK companies that produced high-quality artist materials. This was a field I had extensive knowledge in, having always had a strong passion for the arts and a deep understanding of the materials used by artists. I saw a significant opportunity to tap into this market, and the idea of combining my expertise with entrepreneurial ambition felt like the perfect way to take the next step in my career.
      <p>
      <br/>
      </p>
        For several years, I dedicated myself to working extremely long hours, often balancing both my full-time job and the demands of building my business on the side. I used every free moment to research, plan, and invest in inventory, gradually growing my stock levels. As the business grew, it reached a point where I could leave my full-time job and fully focus on running my own venture. This period taught me an immense amount about myself, as it was a huge leap into the unknown, but also about business in general—how to manage resources, navigate challenges, and make decisions that could significantly impact the future of my company.
      <p>
      <br/>
      </p>
        The experience was incredibly rewarding, both professionally and personally, as I learned to balance the creative aspects of the business with the more strategic, logistical elements. However, the arrival of the Covid-19 pandemic certainly had a major negative impact on my business. It brought new challenges that were difficult to overcome, including disruptions in supply chains, a slowdown in demand, and financial pressures. Despite these challenges, by the time the pandemic hit, I had already started to look ahead to my next career move.
      <p>
      <br/>
      </p>
        The experience I gained while running my own business gave me a new perspective and set the stage for my transition into a completely different field: software development. I realized that the skills I had developed—problem-solving, adaptability, and managing complex projects—would be valuable in a new career path, and so I began to prepare for a shift into the tech industry. Even in the face of adversity, I saw an opportunity for growth and reinvention, setting my sights on the future with a clear vision of what I wanted to achieve.
      </p>
      </>
    },
    {
      dateFrom: "2004",
      dateTo: "2016",
      title: "Shop Manager",
      subTitle: "Alnwick paint and glass",
      Description: `
      A small business in my home town and my first job coming straight out of college. I stayed here way longer than expected, had a great relationship with the owners. My position was essentially customer facing in the shop, as time passed I was given more responsibility eventually managing that side of the business myself.
      `,
    },
    {
      dateFrom: "2002",
      dateTo: "2004",
      title: "Student at Northumberland Collage",
      subTitle: "Fine Art",
      Description:
        "Really enjoyed painting and art, it was certainly one of my strengths although I chose not to pursue this as a career I still paint for fun.",
    },
    {
      dateFrom: "2000",
      dateTo: "2002",
      title: "Student at Northumberland Collage",
      subTitle: "Graphic Design",
      Description:
        "Higher National Diploma in graphic design. Learned some fantastic processes to develop ideas and transform them into finished designs.",
    },
    {
      dateFrom: "1996",
      dateTo: "2000",
      title: "Student At Duchess High School",
      subTitle: "GCSE",
      Description: "",
    }
  ];

  // Animate in the each row when it comes into view

  const generateTimeLine = () => {
    return timeLineData.map((item, index) => {
      // count through all the items, and then style all odd and even items the same

      if (index % 2 === 0) {
        // left version
        return (
          <div className="time-line-row">
            <div className="time-line-item">
              <div className="time-line-left">
                <h3 className="time-line-title">{item.title}</h3>
                <h4 className="time-line-subtitle">{item.subTitle}</h4>
                <p className="time-line-description">{item.Description}</p>
              </div>
              <div className="time-line-icon-container">
                <div className="time-line-circle"></div>
              </div>
              <div className="time-line-right">
                <h3 className="time-line-subtitle">
                  {item.dateFrom} - {item.dateTo}
                </h3>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="time-line-row">
            <div className="time-line-item">
              <div className="time-line-right">
                <h3 className="time-line-subtitle date-right">
                  {item.dateFrom} - {item.dateTo}
                </h3>
              </div>

              <div className="time-line-icon-container">
                <div className="time-line-circle"></div>
              </div>

              <div className="time-line-left">
                <h3 className="time-line-title">{item.title}</h3>
                <h4 className="time-line-subtitle">{item.subTitle}</h4>
                <p className="time-line-description">{item.Description}</p>
              </div>
            </div>
          </div>
        );
      }
    });
  };

  const today = new Date();
  const stringToday = today.toLocaleDateString("en-UK");

  return (
    <section id="history">
      <h2 className="headline">History</h2>
      <div className="history-container">
        <div className="time-line-container">
          <div className="time-line-rows">{generateTimeLine()}</div>

          <div className="time-line-bar"></div>
        </div>
      </div>
    </section>
  );
};
