import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2
        className="section__title"
        data-aos="zoom-out"
        data-aos-duration="6000"
      >
        Qualification
      </h2>
      <span
        className="section__subtitle"
        data-aos="zoom-out"
        data-aos-duration="6000"
      >
        My Personal Journey
      </span>

      <div className="qualification__container container">
        <div
          className="qualification__tabs"
          data-aos="zoom-out"
          data-aos-duration="6000"
        >
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div data-aos="zoom-in-right" data-aos-duration="6000">
                <h3 className="qualification__title">
                  B.Tech - CS(Computer Science Engineering)
                </h3>
                <span className="qualification__subtitle">SRMS CET</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div data-aos="zoom-in-left" data-aos-duration="6000">
                <h3 className="qualification__title">Intermediate</h3>
                <span className="qualification__subtitle">
                  Sacred Hearts Sr Sec Publec School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - 21
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div data-aos="zoom-in-right" data-aos-duration="6000">
                <h3 className="qualification__title">Metriculation</h3>
                <span className="qualification__subtitle">
                  Sacred Hearts Sr Sec Public School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 19
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div data-aos="zoom-in-right" data-aos-duration="6000">
                <h3 className="qualification__title">Backend Developer</h3>
                <span className="qualification__subtitle">Shallowfeet Consulting</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jun 2024 - Sept 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div data-aos="zoom-in-right" data-aos-duration="6000">
                <h3 className="qualification__title">Python Developer</h3>
                <span className="qualification__subtitle">Eschool</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Nov 2023 - Feb 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div data-aos="zoom-in-right" data-aos-duration="6000">
                <h3 className="qualification__title"> Python Basics</h3>
                <span className="qualification__subtitle">
                  Eschool
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> jul 2023 - Jul 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
