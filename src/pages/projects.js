import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Burger from "../components/burger"
import { navigate } from "gatsby"
import { Helmet } from "react-helmet"

const handleClick = e => {
  e.preventDefault()
  console.log("inabouthandleClick")
  navigate("/")
}

const Projects = props => (
  <section className="projects_container" id="projects_page">
    <Helmet>
      <html lang="en" />
      <title>Terry J Reynolds Projects</title>
      <description>
        Terry has many projects to showcase his HTML, CSS, Javascript, React,
        Jamstack, and MERN stack skills.
      </description>
    </Helmet>
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
        href="https://terryjreynolds-blog.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          className="link_pic"
          fluid={props.data.blog.childImageSharp.fluid}
          alt="screenshot of Terry's blog"
        />
      </a>
      <p className="thumbnail_descriptors">TERRY'S BLOG (GATSBY)</p>
    </div>

    <div className="projects_item" id="projects_link2">
      <a
        href="https://codepen.io/beowulfskin/full/LWqryO"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <Img
          className="link_pic"
          fluid={props.data.terryfox3.childImageSharp.fluid}
          alt="Terry Fox tribute page"
        />
      </a>

      <p className="thumbnail_descriptors">TERRY FOX TRIBUTE PAGE</p>
    </div>

    <div className="projects_item" id="projects_link3">
      <a
        href="https://kringscottages.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          className="link_pic"
          fluid={props.data.krings.childImageSharp.fluid}
          alt="website for kring's cottages"
        />
      </a>
      <p className="thumbnail_descriptors">CLIENT WEBSITE-GATSBY</p>
    </div>

    <div className="projects_item" id="projects_link4">
      <a
        href="https://terryjreynolds.github.io/javascript-30-clock/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          className="link_pic"
          fluid={props.data.jsclock.childImageSharp.fluid}
          alt="Javascript clock app"
        />
      </a>
      <p className="thumbnail_descriptors">JAVASCRIPT CLOCK APP</p>
    </div>

    <div className="projects_item" id="projects_link5">
      <a
        href="https://codepen.io/beowulfskin/full/bYpKwb/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          className="link_pic"
          fluid={props.data.calc.childImageSharp.fluid}
          alt="screenshot of calculator"
        />
      </a>
      <p className="thumbnail_descriptors">JAVASCRIPT CALCULATOR</p>
    </div>

    <div className="projects_item" id="projects_link6">
      <a
        href="https://terryjreynolds.github.io/FCC-Simon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          className="link_pic"
          fluid={props.data.simon.childImageSharp.fluid}
          alt="Simon Game"
        />
      </a>
      <p className="thumbnail_descriptors">SIMON GAME (JS & CSS GRID)</p>
    </div>

    <div className="projects_item" id="projects_link7">
      <a
        href="https://reynolds-react-tictactoe.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          className="link_pic"
          fluid={props.data.reacttictactoe.childImageSharp.fluid}
          alt="TicTacToe Game in React"
        />
      </a>
      <p className="thumbnail_descriptors">TIC TAC TOE (React)</p>
    </div>

    <div className="projects_item" id="projects_link8">
      <a
        href="https://terryjreynolds.github.io/Drum-machine/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          className="link_pic"
          fluid={props.data.drum.childImageSharp.fluid}
          alt="Drum machine app"
        />
      </a>
      <p className="thumbnail_descriptors">DRUM MACHINE</p>
    </div>

    <div className="projects_item" id="projects_link9">
      <a
        href="https://codepen.io/beowulfskin/full/PEdGRz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <Img
          className="link_pic"
          fluid={props.data.pomodoro.childImageSharp.fluid}
          alt="Pomodoro app"
        />
      </a>

      <p className="thumbnail_descriptors">POMODORO TIMER</p>
    </div>

    <div className="projects_item" id="projects_link10">
      <a
        href="https://codepen.io/beowulfskin/full/OgbRbX/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          className="link_pic"
          fluid={props.data.wiki.childImageSharp.fluid}
          alt="Wikipedia Viewer app"
        />
      </a>
      <p className="thumbnail_descriptors">WIKIPEDIA VIEWER</p>
    </div>

    <div className="projects_item" id="projects_link11">
      <a
        href="https://codepen.io/beowulfskin/full/pPBdEa/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          className="link_pic"
          fluid={props.data.weather.childImageSharp.fluid}
          alt="A weatherstation"
        />
      </a>
      <p className="thumbnail_descriptors">WEATHER STATION</p>
    </div>

    <div className="projects_item" id="projects_link12">
      <a
        href="https://terryjreynolds.github.io/Tic-Tac-Toe-JS/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          className="link_pic"
          fluid={props.data.tictactoe.childImageSharp.fluid}
          alt="TicTacToe Game"
        />
      </a>
      <p className="thumbnail_descriptors">TIC TAC TOE (JS)</p>
    </div>
  </section>
)

export default Projects

export const pageQuery = graphql`
  query {
    calc: file(relativePath: { eq: "calc.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pomodoro: file(relativePath: { eq: "pomodoro.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    simon: file(relativePath: { eq: "simon.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tictactoe: file(relativePath: { eq: "tictactoe.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reacttictactoe: file(relativePath: { eq: "reacttictactoe.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    weather: file(relativePath: { eq: "weather.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    drum: file(relativePath: { eq: "drum.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wiki: file(relativePath: { eq: "wiki.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    blog: file(relativePath: { eq: "blog.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jsclock: file(relativePath: { eq: "jsclock.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    krings: file(relativePath: { eq: "krings.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    terryfox3: file(relativePath: { eq: "terryfox3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
