/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useRef, useEffect } from "react";
import "../styles/final/header.css";
import Logo from "../images/naasilogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/iconlibrary";
import { NavLink, Link } from "react-router-dom";
import { TimelineMax, Elastic } from "gsap";
import { CSSTransition } from "react-transition-group";

export default function Header() {
  let menuElement = useRef(null);

  let lineOneElement = useRef(null);
  let lineTwoElement = useRef(null);
  let lineThreeElement = useRef(null);

  const [_, setMenuAnimation] = useState();
  const [t1] = useState(
    new TimelineMax({
      reversed: true,
      paused: true
    })
  );
  useEffect(() => {
    setMenuAnimation(
      t1
        .to(
          lineTwoElement,
          0.125,
          {
            scale: 0,
            ease: Elastic.easeOut.config(1, 0.75)
          },
          0
        )
        .to(
          lineOneElement,
          1,
          {
            rotation: 45,
            transformOrigin: "50% 50%",
            y: 20,
            ease: Elastic.easeOut.config(1, 0.75)
          },
          0
        )
        .to(
          lineThreeElement,
          1,
          {
            rotation: -45,
            transformOrigin: "50% 50%",
            y: -20,
            ease: Elastic.easeOut.config(1, 0.75)
          },
          0
        )
    );
  }, [t1]);
  const [openTab, setOpenTab] = useState(false);

  const dropTab = () => {
    menuElement.classList.toggle("clicked");

    !openTab ? t1.play() : t1.reverse();

    setOpenTab(!openTab);
  };

  return (
    <header>
      <span className="header__emergency">
        <FontAwesomeIcon
          icon={["fas", "ambulance"]}
          size="lg"
          border
          className="ambulance"
        />

        <li className="margin3px emergency__text">Emergency Line : </li>
        <li className="margin3px emergency__number">+254 (0) 728 956 101</li>
      </span>
      <div className="header__logo">
        <Link to="/">
          {/* // eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img src={Logo} alt="logo image did not load" className="logo" />
        </Link>
        {/* <span className="logo--text">Because we care for your health.</span> */}
      </div>

      <nav>
        <ul className="header__navigation">
          <span>
            <svg
              // onClick={dropTab}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 250"
              id="svg8"
              className="burger"
            >
              }
              <g id="layer1" fill="#15b4d8" strokeWidth=".265 *">
                <rect
                  ry="4.158"
                  onClick={dropTab}
                  ref={element => {
                    lineTwoElement = element;
                  }}
                  y="105.575"
                  x="21.923"
                  height="11.339"
                  width="71.815"
                  id="lineTwo"
                />
                <rect
                  id="lineThree"
                  onClick={dropTab}
                  ref={element => {
                    lineThreeElement = element;
                  }}
                  width="71.815"
                  height="11.339"
                  x="21.923"
                  y="125.575"
                  ry="4.158"
                />
                <rect
                  id="lineOne"
                  onClick={dropTab}
                  ref={element => {
                    lineOneElement = element;
                  }}
                  width="71.815"
                  height="11.339"
                  x="21.923"
                  y="85.575"
                  ry="4.158"
                />
              </g>
            </svg>
          </span>
          <CSSTransition in={openTab} timeout={1000} classNames="my-menu">
            <span
              className="menu"
              ref={element => {
                menuElement = element;
              }}
            >
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="activelink__header"
                  className="link__item"
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  exact
                  activeClassName="activelink__header"
                  className="link__item"
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  exact
                  activeClassName="activelink__header"
                  className="link__item"
                >
                  EVENTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/careers"
                  exact
                  activeClassName="activelink__header"
                  className="link__item"
                >
                  CAREERS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacts"
                  exact
                  activeClassName="activelink__header"
                  className="link__item"
                >
                  CONTACTS
                </NavLink>
              </li>
            </span>
          </CSSTransition>
        </ul>
      </nav>
    </header>
  );
}
