import React from "react";
import project1 from "../../assets/MyBlogApp.png";
import project2 from "../../assets/portfolio.png";
import project3 from "../../assets/VibeConnect.png";
import project4 from "../../assets/stackoverflow.png";
import trip from "../../assets/trip.png";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2
        className="section__title"
        data-aos="zoom-out"
        data-aos-duration="6000"
      >
        Portfolio
      </h2>
      <span
        className="section__subtitle"
        data-aos="zoom-out"
        data-aos-duration="6000"
      >
        Recent Works
      </span>

      <div className="portfolio__container container grid">
        <div className="projects grid">
          <div className="project_desc" style={{ textAlign: "right" }}>
            <h2
              className="project_desc_header"
              data-aos="zoom-in-right"
              data-aos-duration="6000"
            >
              Online Book Store
            </h2>
            <p
              className="project_desc_data"
              data-aos="zoom-in-right"
              data-aos-duration="6000"
            >An online bookstore is a website that allows customers to buy books online. 
            Customers can search for books by title or author,
             add them to their cart, and then purchase them.
            </p>
            <div className="project_link">
              <a
                className="deployed-link"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sourabh886/Online-book-store"
              >
                <i class="uil uil-link"></i>
              </a>
              <a
                href="https://github.com/sourabh886/Online-book-store"
                className="project-icon"
                target="_blank"
                rel="noreferrer"
                data-aos="zoom-in-right"
                data-aos-duration="6000"
              >
                <i class="uil uil-github"></i>
              </a>
            </div>
          </div>
          <img
            src={trip}
            alt="Trip"
            className="project_img"
            data-aos="zoom-in-left"
            data-aos-duration="6000"
          />
        </div>
        <div className="projects grid">
          <img
            src={project1}
            alt="MyBlogApp"
            className="project_img"
            data-aos="zoom-in-right"
            data-aos-duration="6000"
          />
          <div className="project_desc">
            <h2
              className="project_desc_header"
              data-aos="zoom-in-left"
              data-aos-duration="6000"
            >
              To Do App
            </h2>
            <p
              className="project_desc_data"
              data-aos="zoom-in-left"
              data-aos-duration="6000"
            >
              A to-do app is a tool that helps you manage your tasks, set reminders, 
              and stay organized. Some to-do apps include Microsoft To Do, To-do List - Tasks Reminders, 
              and other apps available on Google Play and the App Store
            </p>
            <div className="project_link_left">
              <a
                className="deployed-link"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sourabh886/Dragddocs"
              >
                <i class="uil uil-link"></i>
              </a>
              <a
                href="https://github.com/sourabh886/Dragddocs"
                className="project-icon"
                target="_blank"
                rel="noreferrer"
                data-aos="zoom-in-left"
                data-aos-duration="6000"
              >
                <i class="uil uil-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="projects grid">
          <div className="project_desc" style={{ textAlign: "right" }}>
            <h2
              className="project_desc_header"
              data-aos="zoom-in-right"
              data-aos-duration="6000"
            >
              MyPortfolio
            </h2>
            <p
              className="project_desc_data"
              data-aos="zoom-in-right"
              data-aos-duration="6000"
            >
              It's a refined exhibit of my journey in web development. Beyond
              coding, it signifies a commitment to crafting user-centric
              solutions. Each project reflects a fusion of technology,
              creativity, and functionality, illustrating a meticulous approach.
              MyPortfolio serves as an invitation to connect and explore
              collaborative opportunities in the digital realm.
            </p>
            <div className="project_link">
              <a
                href="https://github.com/sourabh886/Portfolio-website"
                className="project-icon"
                target="_blank"
                rel="noreferrer"
                data-aos="zoom-in-right"
                data-aos-duration="6000"
              >
                <i class="uil uil-github"></i>
              </a>
            </div>
          </div>
          <img
            src={project2}
            alt="MyPortfolio"
            className="project_img"
            data-aos="zoom-in-left"
            data-aos-duration="6000"
          />
        </div>
        <div className="projects grid">
          <img
            src={project3}
            alt="VibeConnect"
            className="project_img"
            data-aos="zoom-in-right"
            data-aos-duration="6000"
          />
          <div className="project_desc">
            <h2
              className="project_desc_header"
              data-aos="zoom-in-left"
              data-aos-duration="6000"
            >
              Weather App
            </h2>
            <p
              className="project_desc_data"
              data-aos="zoom-in-left"
              data-aos-duration="6000"
            >
              A weather app is a program that provides information about the weather for a specific location and time. 
              Weather apps can be used on phones or computers
            </p>
            <div className="project_link_left">
              <a
                href="https://github.com/sourabh886/Weather-app"
                className="project-icon"
                target="_blank"
                rel="noreferrer"
                data-aos="zoom-in-left"
                data-aos-duration="6000"
              >
                <i class="uil uil-github"></i>
              </a>
              <a
                className="deployed-link"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sourabh886/Weather-app"
              >
                <i class="uil uil-link"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="projects grid">
          <div className="project_desc" style={{ textAlign: "right" }}>
            <h2
              className="project_desc_header"
              data-aos="zoom-in-right"
              data-aos-duration="6000"
            >
              Uber-Clone
            </h2>
            <p
              className="project_desc_data"
              data-aos="zoom-in-right"
              data-aos-duration="6000"
            >
             A grocery app is a mobile or web-based app that allows users to order groceries online. 
              Users can browse products, add them to their cart, and choose a delivery time and locationction.
            </p>
            <div className="project_link">
              <a
                href="https://github.com/sourabh886/cab-booking"
                className="project-icon"
                target="_blank"
                rel="noreferrer"
                data-aos="zoom-in-right"
                data-aos-duration="6000"
              >
                <i class="uil uil-github"></i>
              </a>
            </div>
          </div>
          <img
            src={project4}
            alt="Stackoverflow"
            className="project_img"
            data-aos="zoom-in-left"
            data-aos-duration="6000"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
