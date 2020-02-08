import "../styles/final/services.css";
import React, { Component } from "react";
import EventSlider from "../layouts/flickity_slider";

const servicesImages = [
  "services_slider/servicesPg1.jpg",
  "services_slider/servicesPg2.jpg",
  "services_slider/servicesPg3.jpg",
  "services_slider/servicesPg4.jpg",
  "services_slider/servicesPg5.jpg",
  "services_slider/servicesPg6.jpg",
  "services_slider/servicesPg7.jpg",
  "services_slider/servicesPg8.jpg",
  "services_slider/servicesPg9.jpg",
  "services_slider/servicesPg10.jpg",
  "services_slider/servicesPg11.jpg",
  "services_slider/servicesPg12.jpg",
  "services_slider/servicesPg13.jpg",
  "services_slider/servicesPg14.jpg"
];

export default class Services extends Component {
  render() {
    return (
      <div className="services">
        <div className="main_services " id="services_top">
          <div id="main" className="services__services services__item">
            <h3 className="services--title">Services Offered</h3>
            <EventSlider eventImages={servicesImages} />
            <p>
              Our facility serves a daily average of 40-45 patients, 3 to 5 of
              which are usually in-patient clients and is open every day 24
              hours a day.
            </p>
            <p>
              With a bed capacity of 20 and 5 for In-patient and Out-patient
              observation rooms respectively as well as a staff of 25 and we are
              able offer the following services:
            </p>
            <ul className="services--items">
              <li className="servicespage__listitem">General Medicine</li>
              <li className="servicespage__listitem">Laboratory Services</li>
              <li className="servicespage__listitem">Minor Surgeries</li>
              <li className="servicespage__listitem">Diabetes Clinics</li>
              <li className="servicespage__listitem">Nutrition Clinics</li>
              <li className="servicespage__listitem">Gynecological services</li>
              <li className="servicespage__listitem">
                Maternity (Pre-Natal & Ante-Natal care)
              </li>
              <li className="servicespage__listitem">Pharmacy services</li>
              <li className="servicespage__listitem">Physiotherapy</li>
            </ul>
          </div>
          {/* <div className="patientInfo__services services__item">
            <h3 className="services--title">
              Patient Information since Inception
            </h3>
            <p>
              Our facility serves a daily average of 40-45 patients, 3 to 5 of
              which are usually in-patient clients and is open every day 24
              hours a day.
            </p>
            <div>Some of the particulars of our practice are: </div>
            <ul className="services--items">
              <li className="servicespage__listitem">
                Births-
                <span style={{ color: "orange" }}>
                  __fill in particulars here__{" "}
                </span>
              </li>
              <li className="servicespage__listitem">
                Minor surgeries-
                <span style={{ color: "orange" }}>
                  __fill in particulars here__{" "}
                </span>{" "}
                per week
              </li>
              <li className="servicespage__listitem">
                Pharmaceutical revenue-
                <span style={{ color: "orange" }}>
                  __fill in particulars here__{" "}
                </span>{" "}
                per month.
              </li>
              <li className="servicespage__listitem">
                Revenue for Laboratory tests-
                <span style={{ color: "orange" }}>
                  __fill in particulars here__{" "}
                </span>
              </li>
              <li className="servicespage__listitem">
                Physiotherapy services-serving{" "}
                <span style={{ color: "orange" }}>
                  __fill in particulars here__{" "}
                </span>{" "}
                people per month
              </li>
            </ul>
          </div> */}
          <div id="staff" className=" services__item staffpicture__services">
            <picture>
              <source
                media="(max-width: 650px)"
                srcset="nassiStaff/nassiStaff_300_wide_197_tall.jpg"
              ></source>
              <source
                media="(max-width: 965px)"
                srcset="nassiStaff/nassiStaff_500_wide_328_tall.jpg"
              ></source>
              <img src="nassiStaff/nassiStaff.jpg" alt="Nassi Staff" />
            </picture>
            <figcaption className="caption__services">
              Nassi Hospitals Staff
            </figcaption>
          </div>
          <div className="services__services services__item">
            <h3 className="services--title">Targets</h3>

            <ul className="services--items">
              <li className="servicespage__listitem">
                Explore opportunities to work with other players in the health
                sector to enhance universal health care •
              </li>
              <li className="servicespage__listitem">
                Open new wing dedicated to Therapy and Rehabilitation Centre
                dedicated to addicts engaging in alcohol and substance abuse.
              </li>
              <li className="servicespage__listitem">
                Initiate an ambulance service further enhancing speedy
                transportation of patients to the hospital especially in
                emergencies.
              </li>
              <li className="servicespage__listitem">
                {" "}
                Open an affiliated Centre solely dedicated to physiotherapy
                services especially targeting the elderly suffering from
                arthritis as well as congenital conditions in children and
                issues stemming from developmental delays.
              </li>
              <li className="servicespage__listitem">
                Commence the distribution of vaccines to infants born both
                within and without the hospital.
              </li>
              <li className="servicespage__listitem">
                Open a HIV/Aids Awareness Centre that not only administers the
                tests and counselling but also one that distributes the vital
                ART medication necessary for the healthy survival with the
                virus.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
