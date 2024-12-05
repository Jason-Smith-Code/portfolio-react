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
      I picked this course to refresh and expand upon my existing knowledge, to learn more about Javascript and frameworks such as React. 
      It gave me the confidence and ability to start my own projects and continue learning. 
      The course Covered HTML, CSS, Javascript, Version Control, Git, Github, frameworks such as React, libraries such Redux and react router. 
      I also learned about testing libraries such as Jest, Mocha and react testing library.
      
      `,
    },
    {
      dateFrom: "2018",
      dateTo: "2022",
      title: "Web Designer",
      subTitle: "Self Employed",
      Description: `
        Worked with small business's in my local area to design and build them fantastic websites that convert visitors into customers. 
        I used my graphic design skills and knowledge of HTML, CSS, and Javascript to deliver a high quality service. 
        I held face to face meeting with clients to establish their expectations, to review work and to re-direct where nessecary.
        Really enjoyed this work but wanted to work in a team, be part of something bigger.
        
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
