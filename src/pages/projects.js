import React from "react"
import Burger from "../components/burger"
import { navigate } from "gatsby"
import Calc from "../assets/Calc.png"
import Pomodoro from "../assets/Pomodoro.jpg"
class Projects extends React.Component {
  handleClick = e => {
    e.preventDefault()
    console.log("inabouthandleClick")
    navigate("/")
  }
  render() {
    return (
      <section className="projects_container" id="projects_page">
        <div className="projects_item" id="projects_name">
          TERRY REYNOLDS
          <em id="projects_sub_name">Developer, Teacher</em>
          <hr id="projects_line1" />
          <hr id="projects_line2" />
        </div>
        <div id="projects_hamburger_menu" onClick={this.handleClick}>
          <Burger />
        </div>
        <div className="projects_item" id="projects_color_long"></div>

        <div className="projects_item" id="projects_link">
          <a
            href="https://codepen.io/beowulfskin/full/bYpKwb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="link_pic" src={Calc} alt="Javascript Calculator" />
          </a>
          <p className="thumbnail_descriptors">JAVASCRIPT CALCULATOR</p>
        </div>

        <div className="projects_item" id="projects_link2">
          <a
            href="https://codepen.io/beowulfskin/full/PEdGRz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="link_pic" src={Pomodoro} alt="Pomodoro Timer App" />
          </a>
          <p className="thumbnail_descriptors">POMODORO TIMER</p>
        </div>

        <div className="projects_item" id="projects_link3">
          <a
            href="https://terryjreynolds.github.io/FCC-Simon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="link_pic" src="photos/Simon.png" alt="Simon Game" />
          </a>
          <p className="thumbnail_descriptors">SIMON GAME</p>
        </div>

        <div className="projects_item" id="projects_link4">
          <a
            href="https://terryjreynolds.github.io/Tic-Tac-Toe-JS/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="link_pic"
              src="photos/TicTacToe-Vanilla.jpg"
              alt="Tic Tac Toe game"
            />
          </a>
          <p className="thumbnail_descriptors">TIC TAC TOE (JS)</p>
        </div>

        <div className="projects_item" id="projects_link5">
          <a
            href="https://reynolds-react-tictactoe.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="link_pic"
              src="photos/React TicTacToe.JPG"
              alt="a tic tac toe game in React"
            />
          </a>
          <p className="thumbnail_descriptors">TIC TAC TOE (React Build)</p>
        </div>

        <div className="projects_item" id="projects_link6">
          <a
            href="https://codepen.io/beowulfskin/full/pPBdEa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="link_pic"
              src="photos/weather-app-squared.jpg"
              alt="a Weather Station"
            />
          </a>
          <p className="thumbnail_descriptors">WEATHER STATION</p>
        </div>

        <div className="projects_item" id="projects_link7">
          <a
            href="https://terryjreynolds.github.io/Drum-machine/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="link_pic"
              src="photos/Drum.jpg"
              alt="Drum Machine"
            />
          </a>
          <p className="thumbnail_descriptors">DRUM MACHINE</p>
        </div>

        <div className="projects_item" id="projects_link8">
          <a
            href="https://codepen.io/beowulfskin/full/OgbRbX/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="link_pic"
              src="photos/Wikipedia-Viewer.png"
              alt="a Wikipedia Viewer"
            />
          </a>
          <p className="thumbnail_descriptors">WIKIPEDIA VIEWER</p>
        </div>
      </section>
    )
  }
}
export default Projects
