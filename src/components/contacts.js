import "../styles/iconlibrary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/final/contacts.css";
import TextareaAutosize from "react-textarea-autosize";
import React, { Component } from "react";
import axios from "axios";

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      errors: "None",
      name: "",
      emailAddress: "",
      message: ""
    };
    this.messageAlertref = React.createRef();
    this.emailAlertref = React.createRef();
  }
  emailErrorChecker = e => {
    let re = /\w+@[a-zA-Z]+\.[a-z A-Z]{3}/gi;
    if (re.test(e.target.value) === false) {
      console.log("error");
      this.flashMessage(
        "red",
        "Please insert a valid email address",
        this.emailAlertref
      );
      return;
    } else if (re.test(e.target.value) === true) {
      console.log("all good");
      return;
    }
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  flashMessage = (color, message, el) => {
    el.current.hidden = false;
    el.current.innerText = message;
    el.current.style.color = color;

    setTimeout(() => {
      el.current.hidden = true;
    }, 12000);
  };
  emailSender = () => {
    let data = { ...this.state };
    if (this.state.emailAddress === "" || this.state.emailAddress === null) {
      this.flashMessage(
        "red",
        "Please provide us with your email address",
        this.messageAlertref
      );

      return;
    }
    console.log(this.state);
    axios
      .post("emailSender", data)
      .then(res => {
        if (res.data.message === "Sent") {
          this.messageAlertref.current.style.color = "green";
          this.flashMessage(
            "green",
            "Your message was sent successfully. We will get back to you as soon as possible",
            this.messageAlertref
          );
        }
      })
      .catch(err => console.log(err));

    //resetting the state
    this.setState({ name: "", emailAddress: "", message: "" });
  };

  render() {
    return (
      <div className="contactsPage">
        <div className="main_contactsPage contacts_top">
          <div className=" contactsPage__item">
            <h3 className="contactsPage--title">CONTACTS</h3>
            <li className="contactsPage--listitem">
              <span>
                <FontAwesomeIcon
                  icon={["fas", "phone-alt"]}
                  className="contactsPage--icon"
                />
              </span>
              <span>0728956101/0717106156</span>
            </li>
            <li className="contactsPage--listitem">
              <span>
                <FontAwesomeIcon
                  icon={["fas", "at"]}
                  className="contactsPage--icon"
                />
              </span>
              <span>nassihospitals@gmail.com</span>
            </li>
            <li className="contactsPage--listitem contactsPage--location">
              <span>
                <FontAwesomeIcon
                  icon={["fas", "compass"]}
                  className="contactsPage--icon"
                />
              </span>
              <span>
                <div>Off Funyula - Bumala Road Mosque Street,</div>
                <div>P.O Box 486- 50400,</div>
                <div>Busia County, Kenya.</div>
              </span>
            </li>
          </div>
          <div className=" contactsPage__item">
            <h3 className="contactsPage--title">LEAVE A MESSAGE</h3>
            <div>
              <form>
                <div className="contactsPage--formitem">
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.changeHandler}
                    className="contactsPage--input"
                    placeholder="Name"
                    name="name"
                  ></input>
                </div>
                <div className="contactsPage--formitem">
                  <input
                    type="email"
                    onChange={this.changeHandler}
                    className="contactsPage--input"
                    placeholder="Email Address"
                    value={this.state.emailAddress}
                    onBlur={this.emailErrorChecker}
                    name="emailAddress"
                  ></input>
                </div>
                <div
                  id="successMessage"
                  style={{ fontWeight: "bold" }}
                  hidden={true}
                  ref={this.emailAlertref}
                >
                  {" "}
                </div>

                <small className="contactsPage--smallTag contactsPage--formitem">
                  *We'll never share your email with anyone else.
                </small>

                <div className="contactsPage--formitem">
                  <TextareaAutosize
                    className="contactsPage--textarea"
                    onChange={this.changeHandler}
                    name="message"
                    value={this.state.message}
                    rows="1"
                    placeholder="Message"
                  />
                </div>
                <button
                  type="submit"
                  className="contactsPage--submit"
                  onClick={this.emailSender}
                >
                  Submit
                </button>
              </form>
              <div
                id="successMessage"
                style={{ fontWeight: "bold" }}
                hidden={true}
                ref={this.messageAlertref}
              >
                {" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
