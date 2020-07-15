import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Burger from "../components/burger"
import { navigate } from "gatsby"

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
            fluid={data.calc.childImageSharp.fluid}
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
          <Img
            className="link_pic"
            fluid={data.pomodoro.childImageSharp.fluid}
            alt="Pomodoro app"
          />
        </a>
        <p className="thumbnail_descriptors">POMODORO TIMER</p>
      </div>

      <div className="projects_item" id="projects_link3">
        <a
          href="https://terryjreynolds.github.io/FCC-Simon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            className="link_pic"
            fluid={data.simon.childImageSharp.fluid}
            alt="Simon Game"
          />
        </a>
        <p className="thumbnail_descriptors">SIMON GAME</p>
      </div>

      <div className="projects_item" id="projects_link4">
        <a
          href="https://terryjreynolds.github.io/Tic-Tac-Toe-JS/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            className="link_pic"
            fluid={data.TicTacToe.childImageSharp.fluid}
            alt="TicTacToe Game"
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
          <Img
            className="link_pic"
            fluid={data.ReactTicTacToe.childImageSharp.fluid}
            alt="TicTacToe Game in React"
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
          <Img
            className="link_pic"
            fluid={data.weatherStation.childImageSharp.fluid}
            alt="A weatherstation"
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
          <Img
            className="link_pic"
            fluid={data.drumMachine.childImageSharp.fluid}
            alt="Drum machine app"
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
          <Img
            className="link_pic"
            fluid={data.wikipediaViewer.childImageSharp.fluid}
            alt="Wikipedia Viewer app"
          />
        </a>
        <p className="thumbnail_descriptors">WIKIPEDIA VIEWER</p>
      </div>
    </section>
  )
}

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    calc: file(relativePath: { eq: "Calc.png" }) {
      ...squareImage
    }
    pomodoro: file(relativePath: { eq: "Pomodoro.jpg" }) {
      ...squareImage
    }
    simon: file(relativePath: { eq: "simon.jpg" }) {
      ...squareImage
    }
    TicTacToe: file(relativePath: { eq: "TicTacToe.jpg" }) {
      ...squareImage
    }
    ReactTicTacToe: file(relativePath: { eq: "ReactTicTacToe.jpg" }) {
      ...squareImage
    }
    weatherStation: file(relativePath: { eq: "weather.jpg" }) {
      ...squareImage
    }
    drumMachine: file(relativePath: { eq: "Drum.jpg" }) {
      ...squareImage
    }
    wikipediaViewer: file(relativePath: { eq: "wiki.jpg" }) {
      ...squareImage
    }
  }
`
export default Projects
