import "../styles/final/about.css";
import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="main__about" id="about_top">
          <div className="background__about about__item">
            <h3 className="about--title content--title__about">Background</h3>
            <p className="background__about--content">
              Nassi Hospitals is a privately-funded hospital facility located in
              the Funyula sub-country of Busia county offering the general
              public both in-patient and out-patient Medical services. It was
              established in March 2018, necessitated by the need for an
              affordable and near-by health-care provider in the immediate and
              neighbouring environment.
            </p>
            <p className="background__about--content">
              {" "}
              Currently Nassi offers medical services under the AON-Minet
              Insurance for the TSC Staff under a co-payment arrangement.
              Additionally, Nassi is finalizing its NHIF Accreditation to
              further enhance the facility’s affordability for all its patients.
            </p>
          </div>
          <div className="directors__about about__item">
            {/* <h3 className="about--title ">
              {" "}
              Board of Directors
            </h3> */}
            <figure
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
              }}
            >
              <picture>
                <source
                  media="(max-width: 650px)"
                  srcset="board/board_of_directors_nassi_300_wide_195_tall.jpg"
                ></source>

                <source
                  media="(max-width: 850px)"
                  srcset="board/board_of_directors_nassi_500_wide_325_tall.jpg"
                ></source>
                <source
                  media="(max-width: 1000px)"
                  srcset="board/board_of_directors_nassi_700_wide_456_tall.jpg"
                ></source>

                <img
                  src="board/board_of_directors_nassi_700_wide_456_tall.jpg"
                  alt="Board of directors"
                />
              </picture>

              <figcaption className="bod_image">
                <small>Board of directors Nassi Hospitals</small>
              </figcaption>
            </figure>
          </div>
          <div className="mission__about about__item">
            <h3 className="about--title">Mission</h3>
            <p className="mission__statement">
              Faithful to our tradition, we aim to provide the highest possible
              standard of care and treatment in a professional and compassionate
              manner to each and every patient walking through our doors.
            </p>
          </div>
          <div className="values__about about__item">
            <h3 className="about--title">Values</h3>
            <p className="values__statement">
              <ul className="target--items_about">
                <li className="aboutpage__listitem">
                  To provide nearby, convenient and affordable health-care to
                  all our patients in a timely and well-organized manner
                </li>
                <li className="aboutpage__listitem">
                  To promote a culture within the facility that ensures:
                  <ul className="target--items_innerlist">
                    <li className="aboutpage__listitem">
                      High quality care service is provided.
                    </li>
                    <li className="aboutpage__listitem">
                      Ensure that all decisions regarding delivery of care are
                      patient focused
                    </li>
                    <li className="aboutpage__listitem">
                      Support and invest in education and training, thereby
                      promoting the continuous development of the workforce in
                      order to maximize the potential of staff at all levels.
                    </li>
                    <li className="aboutpage__listitem">
                      Partner with like-minded players in the field of health in
                      the area to offer sought after health services
                    </li>
                    <li className="aboutpage__listitem">
                      Offer affordable and quality service to the community and
                      its environs
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
          <div className="goals__about about__item">
            <h3 className="about--title">Goals</h3>
            <p className="goals__statement">
              <ul className="goals--items_about">
                <li className="aboutpage__listitem">
                  To continuously improve all our services through quality
                  management
                </li>
                <li className="aboutpage__listitem">
                  Maintain the highest ethical standards in protecting the
                  public and the environment.
                </li>
                <li className="aboutpage__listitem">
                  Take all reasonable steps to ensure that patients, visitors,
                  staff and all others in contact with the Hospital are afforded
                  the safest possible environment.{" "}
                </li>
                <li className="aboutpage__listitem">
                  Recognize and reward employees’ contributions.
                </li>
                <li className="aboutpage__listitem">
                  Use training, teamwork and open communication to enable all
                  employees to achieve their full potential{" "}
                </li>
                <li className="aboutpage__listitem">
                  Have the highest degree of respect for one another and value
                  diversity{" "}
                </li>
                <li className="aboutpage__listitem">
                  Empower employees to make appropriate decisions
                </li>
                <li className="aboutpage__listitem">
                  Involve all our partners in our quality improvement activities{" "}
                </li>
                <li className="aboutpage__listitem">
                  Focus on our patients and deliver high quality service{" "}
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
