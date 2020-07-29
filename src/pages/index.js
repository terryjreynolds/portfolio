import React from "react"
import { Helmet } from "react-helmet"
import { navigate } from "gatsby"
import { JsonLd } from "../components/JsonLd"

class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      grid_item_1: false,
      grid_item_2: false,
      grid_item_3: false,
      strobeInterval: "",
      about_clicked: false,
      projects_clicked: false,
      contact_clicked: false,
      lights_out: false,
    }
  }
  //starts the light strobe on page load
  componentDidMount() {
    const strobe = setInterval(this.strobeNav, 1200)
    this.setState({
      strobeInterval: strobe,
      about_clicked: false,
      projects_clicked: false,
      contact_clicked: false,
      lights_out: false,
    })
  }
  //stops the light strobe on page change
  componentWillUnmount() {
    clearInterval(this.state.strobeInterval)
  }

  strobeNav = () => {
    console.log("instrobeNav")

    setTimeout(() => {
      this.setState({
        grid_item_1: true,
      })
    }, 100)

    setTimeout(() => {
      this.setState({
        grid_item_1: false,
        grid_item_2: true,
      })
    }, 200)

    setTimeout(() => {
      this.setState({
        grid_item_1: false,
        grid_item_2: false,
        grid_item_3: true,
      })
    }, 300)

    setTimeout(() => {
      this.setState({
        grid_item_1: false,
        grid_item_2: false,
        grid_item_3: false,
      })
    }, 400)
  }

  handleClick = e => {
    console.log("inhandleClick", e.target.id)
    if (e.target.id === "about") {
      this.setState({
        about_clicked: true,
        lights_out: true,
      })
      setTimeout(() => {
        navigate("/about/")
      }, 400)
    } else if (e.target.id === "projects") {
      this.setState({
        projects_clicked: true,
        lights_out: true,
      })
      setTimeout(() => {
        navigate("/projects/")
      }, 400)
    } else {
      this.setState({
        contact_clicked: true,
        lights_out: true,
      })
      setTimeout(() => {
        navigate("/contact/")
      }, 400)
    }
  }
  render() {
    return (
      <div className="grid_container" id="navbar">
        <Helmet>
          <html lang="en" />
          <title>Terry J Reynolds Portfolio</title>
          <description>
            Terry J Reynolds is a developer and teacher from Sharbot Lake,
            Ontario, Canada.
          </description>
          <meta
            name="keywords"
            content="Javascript, developer, css, React, MERN, HTML, Jamstack, teacher, Gatsby"
          />
          <meta name="author" content="Terry J Reynolds"></meta>
          <JsonLd>
            {{
              "@context": "https://schema.org",
              "@type": "Person",
              url: "https://terryjreynolds.dev",
              name: "Terry J Reynolds",
              description:
                "Terry Reynolds is a Canadian, javascript developer and teacher experienced in HTML, CSS, React, MERN, and Jamstack including Gatsby.",
              alumniOf: "Queen's University",
              email: "terrancejreynolds@gmail.com",
              hasOccupation: "Teacher",
              nationality: "Canadian",
            }}
          </JsonLd>
        </Helmet>
        <div className="grid_item" id="name">
          TERRY REYNOLDS <em id="sub_name">Developer, Teacher</em>
          <hr id="line1" />
          <hr id="line2" />
        </div>

        <div
          className={
            this.state.lights_out
              ? "grid_item_1_Off"
              : this.state.grid_item_1
              ? "grid_item_1_On "
              : "grid_item_1_Off"
          }
          id={this.state.about_clicked ? "about_animated" : "about_color"}
        ></div>
        <button className="grid_item" id="about" onClick={this.handleClick}>
          <span>ABOUT</span>
        </button>

        <div
          className={
            this.state.lights_out
              ? "grid_item_2_Off"
              : this.state.grid_item_2
              ? "grid_item_2_On "
              : "grid_item_2_Off"
          }
          id={
            this.state.projects_clicked ? "projects_animated" : "projects_color"
          }
        ></div>
        <button className="grid_item" id="projects" onClick={this.handleClick}>
          PROJECTS
        </button>

        <div
          className={
            this.state.lights_out
              ? "grid_item_3_Off"
              : this.state.grid_item_3
              ? "grid_item_3_On "
              : "grid_item_3_Off"
          }
          id={this.state.contact_clicked ? "contact_animated" : "contact_color"}
        ></div>
        <button className="grid_item" id="contact" onClick={this.handleClick}>
          CONTACT
        </button>
      </div>
    )
  }
}

export default Index
