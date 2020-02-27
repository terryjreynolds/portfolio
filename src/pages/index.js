import React from "react"
import Header from "../components/header"

class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      grid_item_1: false,
      grid_item_2: false,
      grid_item_3: false,
      strobeInterval: "",
    }
  }

  componentDidMount() {
    const strobe = setInterval(this.strobeNav, 1000)
    this.setState({ strobeInterval: strobe })
  }

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

  handleClick = () => {
    console.log("inhandleClick")
  }
  render() {
    return (
      <div className="grid_container" id="navbar">
        <Header />

        <div
          className={
            this.state.grid_item_1 ? "grid_item_1_On " : "grid_item_1_Off"
          }
          id="about_color"
        ></div>
        <nav
          className="grid_item"
          id="about"
          href="about"
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
          className="grid_item"
          id="projects"
          href="projects"
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
          className="grid_item"
          id="contact"
          href="contact"
          onClick={this.handleClick}
        >
          CONTACT
        </nav>
      </div>
    )
  }
}

export default Nav
