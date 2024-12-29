import React from "react"
import { navigate } from "gatsby"
import { Helmet } from "react-helmet"
import Burger from "../components/burger"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faBlog} from "@fortawesome/free-solid-svg-icons"
import {
  faSquareXTwitter,
  faGithubAlt,
  faLinkedinIn,
  faFreeCodeCamp,
} from "@fortawesome/free-brands-svg-icons"

const handleClick = e => {
  e.preventDefault()
  console.log("incontacthandleClick")
  navigate("/")
}
const Contact = () => (
  <section className="contact_container" id="contact_page">
    <Helmet>
      <html lang="en" />
      <title>Contact Terry J Reynolds</title>
      <description>
        Terry J Reynolds is a developer and teacher from Sharbot Lake, Ontario,
        Canada.
      </description>
    </Helmet>
    <div className="contact_item" id="contact_name">
      TERRY REYNOLDS
      <em id="contact_sub_name">Developer, Teacher</em>
      <hr id="contact_line1" />
      <hr id="contact_line2" />
    </div>
    <div
      role="link"
      tabIndex={0}
      id="contact_hamburger_menu"
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <Burger />
    </div>
    <div className="contact_item" id="contact_color_long"></div>
    <div className="contact_item" id="contact_link">
      <p className="contact_allCaps">EMAIL</p>
      <p id="contact_email">
        <a
          style={{ color: "#efedf5" }}
          href="mailto:terrancejreynolds@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          terrancejreynolds@gmail.com
        </a>
      </p>
      <p id="location">LOCATION</p>
      <p id="location_sub">
        <a
          style={{ color: "#efedf5" }}
          href="https://www.google.ca/maps/place/Sharbot+Lake,+ON+K0H+2B0/@44.769494,-76.7069016,14z/data=!3m1!4b1!4m5!3m4!1s0x4cd2f6990affcff1:0xb43047c2bd53a39f!8m2!3d44.7694959!4d-76.689392"
          target="_blank"
          rel="noopener noreferrer"
          alt="map of Sharbot Lake, Ontario"
        >
          Sharbot Lake, Ontario, Canada
        </a>
      </p>
    </div>
    <div className="contact_item" id="contact_link2">
      <a
        href="mailto:terrancejreynolds@gmail.com"
        aria-label="terry's email"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} id="envelope_icon" />
      </a>
    </div>
    <div className="contact_item" id="contact_link3">
      <a
        aria-label="github"
        href="https://github.com/terryjreynolds"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithubAlt} id="github_icon" />
      </a>
    </div>
    <div className="contact_item" id="contact_link4">
      <a
        aria-label="terry's twitter"
        href="https://twitter.com/codecadence"
        target="_blank"
        rel="noopener noreferrer"
        alt="twitter for terry reynolds"
      >
        <FontAwesomeIcon icon={faSquareXTwitter} id="twitter_icon" />
      </a>
    </div>
    <div className="contact_item" id="contact_link5">
      <a
        aria-label="terry's linked in"
        href="https://www.linkedin.com/in/terryreynolds5330/"
        target="_blank"
        rel="noopener noreferrer"
        alt="linked in for terry reynolds"
      >
        <FontAwesomeIcon icon={faLinkedinIn} id="linkedin_icon" />
      </a>
    </div>
    <div className="contact_item" id="contact_link6">
      <a
        aria-label="terry's personal blog"
        href="https://terryjreynolds-blog.netlify.com"
        target="_blank"
        rel="noopener noreferrer"
        alt="personal blog for terry reynolds"
      >
        <FontAwesomeIcon icon={faBlog} id="blog_icon" />
      </a>
    </div>
    <div className="contact_item" id="contact_link7">
      <a
        aria-label="terry's free code camp front-end certificate"
        href="https://www.freecodecamp.org/certification/beowulfskin/legacy-front-end"
        target="_blank"
        rel="noopener noreferrer"
        alt="freecodecamp front end certificate for terry reynolds"
      >
        <FontAwesomeIcon icon={faFreeCodeCamp} id="freecodecamp_icon" />
      </a>
    </div>
  </section>
)

export default Contact
