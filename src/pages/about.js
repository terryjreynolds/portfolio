import React from "react"
import Header from "../components/header"
import TerryImg from "../assets/terry-square.jpg"
import Burger from "../components/burger"
import { navigate } from "gatsby"
class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dog: true,
    }
  }
  handleClick = e => {
    e.preventDefault()
    console.log("inabouthandleClick")
    navigate("/")
  }
  render() {
    return (
      <div className="about_container" id="about_page">
        <div className="about_item" id="about_name">
          <Header />
        </div>
        <div id="hamburger_menu" onClick={this.handleClick}>
          <Burger />
        </div>

        <div id="about_color_long"></div>
        <div id="about_picture">
          <img
            src={TerryImg}
            id="terry_photo"
            alt="terry illuminated with blue and red light"
          />
        </div>
        <article id="about_bio">
          <div id="about_text">
            Experienced Developer and Teacher with a demonstrated history of
            teaching Primary, Junior and Intermediate levels in the Ontario
            public school system. Skilled in
            <span className="spanInPara">FullStack Web Development</span>,
            specializing in <span>Javascript</span>, <span>HTML5</span>,
            <span>CSS</span> and related libraries/frameworks (<span>Node</span>
            , <span>React</span>, <span>Gatsby</span>,<span>Bootstrap</span>,{" "}
            <span>CSS Grid</span>, <span>Flex</span>,<span>Typography.js</span>{" "}
            and <span>JQuery</span> ) as well as the
            <span>MERN Stack</span> including <span>GraphQL</span>. Strong
            education professional with a Master of Science in Teaching. Skilled
            copy-editor with a background in English Literature. Eight years
            experience in the electronic manufacturing industry (Nortel/Brock
            Telecom).
          </div>
        </article>
      </div>
    )
  }
}
export default About
