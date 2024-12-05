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
      Description: `
      Worked on several React projects in the techforgood community. Worked in an Agile environment as both a team member and team leader. 
      Got great experience working in teams, having the pleasure of meeting some fantastic people.
      `,
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
      Description: `
      Whilst working full time I took out a loan so that I could invest in several UK companies that produced high quality artist materials, an area
      that I was knowledgeable in. For several years I worked very long hours while building up my stock levels to the point I could leave my full time job
      and run my own business. Taught me so much about my self and also about business in general. Covid certainly had a negative impact on my business, 
      but at that point I was already looking at my next move to become a developer.
      `,
    },
    {
      dateFrom: "2004",
      dateTo: "2016",
      title: "Shop Manager",
      subTitle: "Alnwick paint and glass",
      Description: `
      A small business in my home town and my first job coming straight out of college. I stayed here way longer than expected, had a great relationship with
      the owners. My position was essentially customer facing in the shop, as time passed I was given more responsibility eventually managing that side of the business myself.
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
    },
    {
      dateFrom: "1984",
      dateTo: "",
      title: "Born",
      subTitle: "Ashington, Northumberland, UK",
      Description: "",
    },
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
