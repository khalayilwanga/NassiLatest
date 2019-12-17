import React from "react";
import "../styles/css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/iconlibrary";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="content__footer">
        <div className="contacts__footer  content_footer_item">
          <li className="listitem__footer title__footer contact_us_footer">
            CONTACT US
          </li>
          <li className="listitem__footer">
            <span>
              <FontAwesomeIcon
                icon={["fas", "phone-alt"]}
                className="icons__footer"
              />
            </span>
            <span className="listitem__footer__text">
              0728956101/0717106156
            </span>
          </li>
          <li className="listitem__footer">
            <span>
              <FontAwesomeIcon icon={["fas", "at"]} className="icons__footer" />
            </span>
            <span className="listitem__footer__text">inquiries@naasi.org</span>
          </li>
          <li className="listitem__footer">
            <span>
              <FontAwesomeIcon
                icon={["fas", "compass"]}
                className="icons__footer"
              />
            </span>
            <span className="listitem__footer__text">
              Off Funyula - Bumala Road Mosque Street. P.O Box 486- 00506
              Funyula, Busia Kenya
            </span>
          </li>
        </div>
        <div className="quick_links__footer content_footer_item">
          <li className="listitem__footer title__footer">Quick Links</li>
          {/* ***TO-DO*** =>add correct links here!! */}
          <HashLink to="/services#staff">
            <li className="listitem__footer footer_link">Staff</li>
          </HashLink>
          <HashLink to="/services#main">
            <li className="listitem__footer footer_link">Services</li>
          </HashLink>
          <Link to="/events">
            <li className="listitem__footer footer_link">Events</li>
          </Link>
          <Link to="/careers">
            <li className="listitem__footer footer_link">Careers</li>
          </Link>
        </div>
        <div className="social_media__footer content_footer_item">
          <li className="listitem__footer title__footer">SOCIAL MEDIA</li>
          <span className="social_media__footer__icons">
            <span title="Facebook">
              <a href="#">
                <FontAwesomeIcon
                  icon={["fab", "facebook"]}
                  className="icons__footer"
                />
              </a>
            </span>
            <span title="Twitter">
              <a href="#">
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  className="icons__footer"
                />
              </a>
            </span>
            <span title="Linked-in">
              <a href="#">
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  className="icons__footer linkedin__footer"
                />
              </a>
            </span>
          </span>
        </div>
      </div>
      <hr
        style={{
          borderTop: "1px solid whitesmoke",
          borderBottom: "1px solid whitesmoke",
          opacity: 0.7,
          background: "transparent",
          borderRadius: "3px"
        }}
      />

      <div className="bottom__footer">
        &copy; Nassi Hospitals {currentYear} |Developed by
        <a href="#" className="developer__link footer_link">
          Khalayi.L
        </a>
        using{" "}
        <span className="react-icon">
          <FontAwesomeIcon
            icon={["fab", "react"]}
            className="builtByIcon"
            title="React"
          />{" "}
        </span>{" "}
        <span className="gulp-icon">
          <FontAwesomeIcon
            icon={["fab", "gulp"]}
            className="builtByIcon"
            title="Gulp"
          />{" "}
        </span>{" "}
        &amp;{" "}
        <span className="sass-icon">
          <FontAwesomeIcon
            icon={["fab", "sass"]}
            className="builtByIcon"
            title="Sass"
          />{" "}
        </span>{" "}
      </div>
    </footer>
  );
}
