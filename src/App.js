import React, { useEffect, useRef, useState } from "react";
import Header from "./layouts/header";
import Footer from "./layouts/footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//com
import Home from "./components/home";
import About from "./components/about";
import Careers from "./components/careers";
import Contacts from "./components/contacts";
import Events from "./components/events";
import Services from "./components/services";
import "./styles/css/app.css";

function App() {
  let headerRef = useRef(null);
  let [currentScroll, setcurrentScroll] = useState(null);

  useEffect(() => {
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      let currentScroll = window.pageYOffset;

      if (currentScroll === 0 || currentScroll < 150) {
        headerRef.classList.remove(scrollDown);
        headerRef.classList.add(scrollUp);

        // console.log("start");
        return;
      }

      if (
        currentScroll > lastScroll &&
        !headerRef.classList.contains(scrollDown)
      ) {
        // down

        headerRef.classList.remove(scrollUp);
        headerRef.classList.add(scrollDown);
        // console.log("down");
      } else if (
        currentScroll < lastScroll &&
        headerRef.classList.contains(scrollDown)
      ) {
        // up

        headerRef.classList.remove(scrollDown);
        headerRef.classList.add(scrollUp);
        // console.log("up");
      }
      lastScroll = currentScroll;
    });
  }, [currentScroll]);
  return (
    <Router>
      <div className="app">
        <div
          id="header_rep"
          className="scroll-up"
          ref={el => {
            headerRef = el;
          }}
        >
          <Header />
        </div>
        <Switch>
          <div className="switch__item">
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/careers" component={Careers}></Route>
            <Route exact path="/events" component={Events}></Route>
            <Route exact path="/services" component={Services}></Route>
            <Route exact path="/contacts" component={Contacts}></Route>
          </div>
        </Switch>
        <div id="footer-rep">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
