import React from "react"
import Header from "../components/header"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Burger from "../components/burger"
import { navigate } from "gatsby"

const handleClick = e => {
  e.preventDefault()
  console.log("inabouthandleClick")
  navigate("/")
}

const About = props => (
  <div className="about_container" id="about_page">
    <div className="about_item" id="about_name">
      <Header />
    </div>
    <div
      role="link"
      tabIndex={0}
      id="hamburger_menu"
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <Burger />
    </div>

    <div id="about_color_long"></div>
    <div id="about_picture">
      <Img
        className="terry_photo"
        fluid={props.data.terry.childImageSharp.fluid}
        alt="terry illuminated with blue and red light"
      />
    </div>
    <article id="about_bio">
      <div id="about_text">
        Experienced Developer and Teacher with a demonstrated history of
        teaching Primary, Junior and Intermediate levels in the Ontario public
        school system. Skilled in
        <span className="spanInPara">FullStack Web Development</span>,
        specializing in <span>Javascript</span>, <span>HTML5</span>,
        <span>CSS</span> and related libraries/frameworks (<span>Node</span>,{" "}
        <span>React</span>, <span>Gatsby</span>,<span>Bootstrap</span>,{" "}
        <span>CSS Grid</span>, <span>Flex</span>,<span>Typography.js</span> and{" "}
        <span>JQuery</span> ) as well as the
        <span>MERN Stack</span> including <span>GraphQL</span>. Strong education
        professional with a Master of Science in Teaching. Skilled copy-editor
        with a background in English Literature. Eight years experience in the
        electronic manufacturing industry (Nortel/Brock Telecom).
      </div>
    </article>
  </div>
)

export default About
export const pageQuery = graphql`
  query {
    terry: file(relativePath: { eq: "terry.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
