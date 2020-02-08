import { TimelineMax } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
import CSSPlugin from "gsap/CSSPlugin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/iconlibrary";
import "../styles/final/home.css";

export default function Home() {
  const C = CSSPlugin;
  //References
  let homeImgref = useRef(null);
  let changingTextRef = useRef(null);

  //Variables
  const wording = [
    "Because we care for your health",
    "Improving healthcare in Samia",
    "Excelling in Medical",
    "Raising the standards of healthcare further"
  ];

  //Usestate hooks
  const [t2] = useState(new TimelineMax({ repeat: -1 }));
  const [_headerAnimation, setHeaderAnimation] = useState();
  let [changingWordAnimationiteration, setChangingWordAnimation] = useState(0);

  //methods
  setTimeout(() => {
    if (changingWordAnimationiteration < wording.length - 1) {
      setChangingWordAnimation(changingWordAnimationiteration + 1);
    } else {
      setChangingWordAnimation(0);
    }
  }, 10000);

  //useEffect hooks
  //Hook to change wording on homepage after 10 seconds
  useEffect(() => {
    changingTextRef.innerHTML = wording[changingWordAnimationiteration];
  }, [changingWordAnimationiteration]);

  //Hook to change background image after 10 seconds
  useEffect(() => {
    if (window.screen.width < 980) {
      // console.log("lower than 980");
      setHeaderAnimation(
        t2
          .set(
            homeImgref,
            {
              background:
                "url(headerimgs/header9_small.jpg) center center no-repeat "
            },
            0
          )

          .set(
            homeImgref,
            {
              background:
                "url(headerimgs/header2_small.jpg) center center no-repeat"
            },
            10
          )
          .set(
            homeImgref,
            {
              background:
                "url(headerimgs/header10_small.jpg) center center no-repeat"
            },
            20
          )
          .set(
            homeImgref,
            {
              background:
                "url(headerimgs/header9_small.jpg) center center no-repeat"
            },
            30
          )
      );
    } else if (window.screen.width >= 980) {
      setHeaderAnimation(
        t2
          .set(
            homeImgref,
            {
              background:
                "url(headerimgs/header9_big.jpg) center center no-repeat "
            },
            0
          )
          .set(
            homeImgref,
            {
              background:
                "url(headerimgs/header2_big.jpg) center center no-repeat"
            },
            10
          )
          .set(
            homeImgref,
            {
              background:
                "url(headerimgs/header10_big.jpg) center center no-repeat"
            },
            20
          )
          .set(
            homeImgref,
            {
              background:
                "url(headerimgs/header9_big.jpg) center center no-repeat"
            },
            30
          )
      );
    }
  }, []);

  return (
    <div className="home" id="home_top">
      <div
        className="header-img"
        ref={element => {
          homeImgref = element;
        }}
      >
        {" "}
        <div className="homepage__main_item centered_text_container">
          <div
            ref={element => {
              changingTextRef = element;
            }}
            className=" changing__text "
          >
            Centered text
          </div>
        </div>
        <div className="homepage__columns homepage__main_item">
          <div className="opening-hrs--home homepage__columns_item">
            <div className="opening-hrs--item opening-hrs--title homepage__listitem">
              VISITING HRS
            </div>
            <li className="opening-hrs--item homepage__listitem">
              <div className="opening-hrs--date">MON-SUN :</div>
            </li>
            <li className="opening-hrs--item homepage__listitem opening-hrs--times">
              <div>12:00P.M-2:00P.M</div>
              <div>4:00P.M-6:00P.M</div>
            </li>
          </div>
          <div className="services--home homepage__columns_item">
            <div className="homepagecolumns__line_one">
              <span className="homepage__listitem homepage__margin">
                <FontAwesomeIcon
                  className="homepage__icons"
                  icon={["fas", "stethoscope"]}
                />
              </span>
              <div className="homepage__column--title homepage__listitem homepage__margin">
                QUALITY MEDICAL CARE
              </div>
            </div>

            <div className="learn-more small_homepage_icon homepage__listitem ">
              <Link to="/services">Learn more</Link>
            </div>
          </div>
          <div className="personnel--home homepage__columns_item">
            <div className="homepagecolumns__line_one">
              <span className="homepage__listitem homepage__margin">
                <FontAwesomeIcon
                  className="homepage__icons"
                  icon={["fas", "calendar-day"]}
                />
              </span>
              <div className="homepage__column--title homepage__listitem homepage__margin">
                RECENT EVENTS
              </div>
            </div>

            <div className="learn-more small_homepage_icon homepage__listitem ">
              <Link to="/events">Learn more</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="intro--home">
        <FontAwesomeIcon
          className=" intro--home__icon intro--home_item"
          icon={["fas", "clinic-medical"]}
        />
        <div className="intro--home_title intro--home_item">
          Welcome To Nassi Hospitals
        </div>
        <div className="intro--home_text intro--home_item">
          Nassi Hospitals is a private healthcare facility located in Busia
          County, Funyula, dedicated to the provision of indiscriminate quality
          medical care to the neighbouring community and its environs.{" "}
        </div>
        <div className=" intro--home_button intro--home_item">
          <Link to="/about">Learn more</Link>
        </div>
      </div>
    </div>
  );
}
