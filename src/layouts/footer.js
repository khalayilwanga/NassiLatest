import React from "react";
import "../styles/final/footer.css";
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
            <span className="listitem__footer__text">
              nassihospitals@gmail.com
            </span>
          </li>
          <li className="listitem__footer">
            <span>
              <FontAwesomeIcon
                icon={["fas", "compass"]}
                className="icons__footer"
              />
            </span>
            <span className="listitem__footer__text">
              Off Funyula - Bumala Road Mosque Street. P.O Box 486- 50400 ,
              Busia Kenya
            </span>
          </li>
        </div>
        <div className="quick_links__footer content_footer_item">
          <li className="listitem__footer title__footer">Quick Links</li>

          <HashLink to="/services#staff">
            <li className="listitem__footer footer_link">Staff</li>
          </HashLink>
          <HashLink to="/services#services_top">
            <li className="listitem__footer footer_link">Services</li>
          </HashLink>
          <HashLink to="/events#events_top">
            <li className="listitem__footer footer_link">Events</li>
          </HashLink>
          <HashLink to="/careers#careers_top">
            <li className="listitem__footer footer_link">Careers</li>
          </HashLink>
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
        <a
          href="https://khalayi-lwanga.herokuapp.com"
          className="developer__link footer_link"
        >
          Khalayi.T.Lwanga
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
        <span title="netlify">
          <svg
            className="builtByIcon"
            id="netlify"
            width="12px"
            height="12px"
            viewBox="0 0 3 3"
          >
            <path
              d="m 2.144496,1.0813897 a 0.13221057,0.12811594 0 0 1 0.038372,0.028225 L 2.4803413,0.98137591 2.2027497,0.71495854 2.1405702,1.0774628 Z M 1.52726,0.8392703 a 0.16526322,0.16014492 0 0 1 0.026468,0.0704392 l 0.4428544,0.1818657 a 0.13221057,0.12811594 0 0 1 0.044956,-0.021721 L 2.1142294,0.63421114 1.8444894,0.36006267 1.52726,0.83276629 Z M 3.038437,1.5131061 2.563796,1.0531649 2.2411212,1.1812809 3.0343846,1.507952 c 0,0 0.00671,0.00515 0.00405,0.00515 z M 2.9590347,1.5874722 2.1975575,1.2722138 a 0.13221057,0.12811594 0 0 1 -0.088647,0.049946 l -0.081935,0.4855888 a 0.13221057,0.12811594 0 0 1 0.038372,0.089706 l 0.4600773,0.09351 0.4217061,-0.4061913 v -0.00761 z M 1.9502325,1.1710955 1.536378,1.0005197 A 0.15196618,0.14725969 0 0 1 1.4041674,1.0671546 H 1.3789667 L 1.0365359,1.5797411 1.9514989,1.1953933 v 0.00123 a 0.11232833,0.10884946 0 0 1 0,-0.020494 0.0065852,0.00638125 0 0 0 -0.00127,-0.00503 z M 2.4526074,2.067907 2.0479975,1.9871596 a 0.13879577,0.13449718 0 0 1 -0.058254,0.042215 L 1.8933719,2.6085955 2.4552668,2.0691342 c 0,0 -0.00127,0.00245 -0.00266,0.00245 z M 1.88666,2.0281468 A 0.13221057,0.12811594 0 0 1 1.808651,1.9410178 l -0.753499,-0.1499594 -0.010638,0.01669 0.6835945,0.9584152 0.040904,-0.03976 0.1163807,-0.695802 c 0,0 0.00393,0.0027 0.00127,0.00135 z M 1.0709816,1.702703 1.8153626,1.8513125 a 0.13221057,0.12811594 0 0 1 0.1043501,-0.064058 l 0.080669,-0.4778578 -0.017096,-0.014112 -0.925474,0.3843478 a 0.23010212,0.22297572 0 0 1 0.01317,0.02307 z M 0.75894441,1.8230877 0.74311463,1.8077482 0.42183277,1.9358641 0.57785136,2.0858236 0.7550186,1.8192836 Z m 0.21148626,0.048718 a 0.17324144,0.16787605 0 0 1 -0.0712974,0.01534 0.17590085,0.1704531 0 0 1 -0.0569874,-0.00896 L 0.64661609,2.1536857 1.5033253,2.9761312 1.6540252,2.8313258 Z M 0.85012408,1.5477121 a 0.21553869,0.20886333 0 0 1 0.0397643,0 0.17450782,0.16910322 0 0 1 0.0435638,0 L 1.2798085,1.0261674 a 0.15069978,0.14603253 0 0 1 -0.042297,-0.10111841 0.15728499,0.15241379 0 0 1 0,-0.0332559 L 0.81707147,0.70342318 0.47869345,1.0224859 Z M 0.88849574,0.63936525 1.2984245,0.80846844 a 0.15728499,0.15241379 0 0 1 0.1057431,-0.0346063 0.17184842,0.16652617 0 0 1 0.050276,0.007731 L 1.7743317,0.29723187 1.5099106,0.041 0.88849556,0.6316341 c 0,0 -0.001267,0.006382 1.8e-7,0.007731 z M 0.73526301,1.641222 A 0.19831586,0.1921739 0 0 1 0.76565641,1.600235 L 0.41512093,1.0929251 0,1.4836542 0.73500971,1.641222 Z M 0.70208369,1.7271235 0.06749831,1.5987621 0.34648288,1.8730333 0.69815794,1.728228 Z"
              id="path4"
              style={{
                opacity: 1,
                fill: "#1bdef3",
                fillOpacity: 1,
                strokeWidth: 0.12466202
              }}
            />
          </svg>
        </span>
      </div>
    </footer>
  );
}
