import "./About.css";
import jeff_pixel from "../images/jeff_pixel.png";
import tyson_pixel from "../images/tyson_pixel.png";
import drew_pixel from "../images/drew_pixel.png";
import LI_small from "../images/LI_small.png";
import GitHub32 from "../images/GitHub32.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="About">
      <h2>About Us</h2>
      <p className="about-paragraph">
        This was created as a final class project for Grand Circus's full stack
        front end course to demonstrate our ability to use React, APIs, MongoDB,
        CSS, Firebase, and TypeScript
      </p>
      <h3>Meet our group members:</h3>
      <div className="group-member">
        <h4 className="white">Tyson Walker II</h4>
        <div className="group-member-content">
          <img
            src={tyson_pixel}
            alt="group member tyson"
            className="profile-pic"
          />
          <div className="text-link">
            <p className="about-paragraph">
              Tyson always been interested in an aesthetic genre that
              implemented many elements from the User Interfaces of old Windows
              machines. This eventually lead Tyson to making modifications to
              the User Interface of his own Windows machine to have the same
              aesthetic that he was obsessed with. The process of that is what
              introduced Tyson to Software Development, and he's been passionate
              about Software Development ever since. After joining Grand Circus,
              Tyson progressed rapidly when it comes to learning things like
              JavaScript, Typescript, React, MongoDB, etc. It has overall lead
              Tyson to becoming more interested in the possibilities that they
              unlock.
            </p>
            <div className="link-container">
              <Link
                to={{ pathname: "https://www.linkedin.com/in/tysonwalkerii/" }}
                target="_blank"
                className="link"
              >
                <img
                  src={LI_small}
                  alt="LinkedIn link"
                  className="link-image"
                />
              </Link>
              <Link
                to={{ pathname: "https://github.com/TysonWalkerII" }}
                target="_blank"
                className="link"
              >
                <img src={GitHub32} alt="GitHub link" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="group-member">
        <h4 className="white">Andrew Cyburt</h4>
        <div className="group-member-content">
          <img
            src={drew_pixel}
            alt="group member andrew"
            className="profile-pic"
          />
          <div className="text-link">
            <p className="about-paragraph">
              Andrew started teaching himself programming about 17 years ago
              when he wanted to make a homepage for his dog. He then became
              interested in Roblox and started programming with that. He started
              taking formal classes and courses about 14 years ago, and has
              continued taking them since then, as well as working on countless
              side-projects. Andrew compares programming to puzzle solving, such
              as Sudoku. Trying to find the best and most robust solutions to
              solving a problem is satisfying for him. There are puzzle games
              inspired by this connection to programming, such as Shenzhen IO,
              Hacknet, and TIS-100, and many others, all of which Andrew enjoys.
              Andrew loves doing work that he finds enjoyable and satisfying.
            </p>
            <div className="link-container">
              <Link
                to={{ pathname: "https://www.linkedin.com/in/andrewcyburt/" }}
                target="_blank"
                className="link"
              >
                <img
                  src={LI_small}
                  alt="LinkedIn link"
                  className="link-image"
                />
              </Link>
              <Link
                to={{ pathname: "https://github.com/DecadentCode" }}
                target="_blank"
                className="link"
              >
                <img src={GitHub32} alt="GitHub link" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="group-member">
        <h4 className="white">Jeff Robinson</h4>
        <div className="group-member-content">
          <img
            src={jeff_pixel}
            alt="group member jeff"
            className="profile-pic"
          />
          <div className="text-link">
            <p className="about-paragraph">
              Before diving into a career of web development, Jeff spent years
              in the hospitality industry. Jeff then spent time working as an
              installation technician where he used software that was often
              unintuitive and clunky. That was when he decided to enroll in
              Grand Circus’s JavaScript course with the goal of creating
              intuitive software that anyone can use. Jeff's experience in
              hospitality has taught him the value of working with a wide-array
              of people in a fast-paced environment, which will help him
              accomplish challenges with different teams and clients. Jeff is
              excited to utilize the technical skills gained at Grand Circus and
              work with a team of like-minded individuals to hone his skills as
              a junior developer.
            </p>
            <div className="link-container">
              <Link
                to={{
                  pathname: "https://www.linkedin.com/in/jeffrey-h-robinson/",
                }}
                target="_blank"
                className="link"
              >
                <img
                  src={LI_small}
                  alt="LinkedIn link"
                  className="link-image"
                />
              </Link>
              <Link
                to={{ pathname: "https://github.com/jrobins3645" }}
                target="_blank"
                className="link"
              >
                <img src={GitHub32} alt="GitHub link" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
