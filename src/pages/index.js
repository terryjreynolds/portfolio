import React from "react"
import Header from "../components/header"
import { navigate } from "gatsby"

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
    }
  }
  //starts the light strobe on page load
  componentDidMount() {
    const strobe = setInterval(this.strobeNav, 1200)
    this.setState({ strobeInterval: strobe })
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
      })
      setTimeout(() => {
        navigate("/about/")
      }, 500)
    } else if (e.target.id === "projects") {
      this.setState({
        projects_clicked: true,
      })
      setTimeout(() => {
        navigate("/projects/")
      }, 500)
    } else {
      this.setState({
        contact_clicked: true,
      })
      setTimeout(() => {
        navigate("/contact/")
      }, 500)
    }
  }
  render() {
    return (
      <div className="grid_container" id="navbar">
        <div className="grid_item" id="name">
          TERRY REYNOLDS <em id="sub_name">Developer, Teacher</em>
          <hr id="line1" />
          <hr id="line2" />
        </div>

        <div
          className={
            this.state.grid_item_1 ? "grid_item_1_On " : "grid_item_1_Off"
          }
          id="about_color"
        ></div>
        <nav
          className={
            this.state.about_clicked ? "about_sweep_right" : "grid_item"
          }
          id="about"
          onClick={this.handleClick}
        >
          ABOUT
        </nav>

        <div
          className={
            this.state.grid_item_2 ? "grid_item_2_On " : "grid_item_2_Off"
          }
          id="projects_color"
        ></div>
        <nav
          className={
            this.state.projects_clicked ? "projects_sweep_right" : "grid_item"
          }
          id="projects"
          onClick={this.handleClick}
        >
          PROJECTS
        </nav>

        <div
          className={
            this.state.grid_item_3 ? "grid_item_3_On " : "grid_item_3_Off"
          }
          id="contact_color"
        ></div>
        <nav
          className={
            this.state.contact_clicked ? "contact_sweep_right" : "grid_item"
          }
          id="contact"
          onClick={this.handleClick}
        >
          CONTACT
        </nav>
      </div>
    )
  }
}

export default Index
