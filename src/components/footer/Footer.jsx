import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1
          className="footer__title"
          data-aos="zoom-out"
          data-aos-duration="6000"
        >
          Sourabh Singh Rawat
        </h1>

        <ul className="footer__list">
          <li>
            <a
              href="#about"
              className="footer__link"
              data-aos="zoom-out"
              data-aos-duration="6000"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#portfolio"
              className="footer__link"
              data-aos="zoom-out"
              data-aos-duration="6000"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="footer__link"
              data-aos="zoom-out"
              data-aos-duration="6000"
            >
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/sourabh.rawat.96387/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-out"
            data-aos-duration="6000"
          >
            <i class="uil uil-instagram"></i>
          </a>

          <a
            href="https://github.com/sourabh886 "
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-out"
            data-aos-duration="6000"
          >
            <i class="uil uil-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/sourabh-rawat-9656b5266"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-out"
            data-aos-duration="6000"
          >
            <i class="uil uil-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Sourabh Singh Rawat. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
