import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Burger from "../components/burger"
import { navigate } from "gatsby"
// import Calc from "../assets/Calc.png"
import Pomodoro from "../assets/Pomodoro.jpg"
import Simon from "../assets/simon.png"
import TicTacToe from "../assets/TicTacToe.jpg"
import ReactTicTacToe from "../assets/ReactTicTacToe.jpg"
import Weather from "../assets/weather.jpg"
import Drum from "../assets/drum.jpg"
import Wiki from "../assets/Wiki.png"

const Projects = ({ data }) => {
  const handleClick = e => {
    e.preventDefault()
    console.log("inabouthandleClick")
    navigate("/")
  }

  return (
    <section className="projects_container" id="projects_page">
      <div className="projects_item" id="projects_name">
        TERRY REYNOLDS
        <em id="projects_sub_name">Developer, Teacher</em>
        <hr id="projects_line1" />
        <hr id="projects_line2" />
      </div>
      <div
        role="link"
        tabIndex={0}
        id="projects_hamburger_menu"
        onClick={handleClick}
        onKeyDown={handleClick}
      >
        <Burger />
      </div>
      <div className="projects_item" id="projects_color_long"></div>

      <div className="projects_item" id="projects_link">
        <a
          href="https://codepen.io/beowulfskin/full/bYpKwb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            className="link_pic"
            fixed={data.file.childImageSharp.fixed}
            alt="screenshot of calculator"
          />
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
          <img className="link_pic" src={Simon} alt="Simon Game" />
        </a>
        <p className="thumbnail_descriptors">SIMON GAME</p>
      </div>

      <div className="projects_item" id="projects_link4">
        <a
          href="https://terryjreynolds.github.io/Tic-Tac-Toe-JS/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="link_pic" src={TicTacToe} alt="Tic Tac Toe game" />
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
            src={ReactTicTacToe}
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
          <img className="link_pic" src={Weather} alt="a Weather Station" />
        </a>
        <p className="thumbnail_descriptors">WEATHER STATION</p>
      </div>

      <div className="projects_item" id="projects_link7">
        <a
          href="https://terryjreynolds.github.io/Drum-machine/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="link_pic" src={Drum} alt="Drum Machine" />
        </a>
        <p className="thumbnail_descriptors">DRUM MACHINE</p>
      </div>

      <div className="projects_item" id="projects_link8">
        <a
          href="https://codepen.io/beowulfskin/full/OgbRbX/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="link_pic" src={Wiki} alt="a Wikipedia Viewer" />
        </a>
        <p className="thumbnail_descriptors">WIKIPEDIA VIEWER</p>
      </div>
    </section>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "Calc.png" }) {
      childImageSharp {
        fixed(width: 175, height: 175) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default Projects
