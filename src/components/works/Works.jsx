import "./works.scss";
import { projects } from "../../data";
import { useState } from "react";
import {
  ArrowBackIos,
  ArrowForwardIos,
  GitHub,
  Link,
} from "@material-ui/icons";

export default function Works() {
  const [currentSlider, setCurrentSlider] = useState(0);

  function handleArrowClick(arrow) {
    if (arrow === "left") {
      setCurrentSlider(
        currentSlider > 0 ? currentSlider - 1 : projects.length - 1
      );
    } else {
      setCurrentSlider(
        currentSlider < projects.length - 1 ? currentSlider + 1 : 0
      );
    }
  }
  return (
    <div className="works" id="works">
      <h1>My Projects.</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {projects.map((project) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <span className="project-title">{project.title}</span>
                <span className="description">{project.description}</span>
                <span className="technologies">{project.technologies}</span>
                <div className="links">
                  <a href={project.links.github} target="_blank">
                    <GitHub />
                  </a>
                  <a href={project.links.link} target="_blank">
                    <Link />
                  </a>
                </div>
              </div>
              <img src={project.img} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
      <ArrowBackIos
        className="arrows arrow-left"
        onClick={() => handleArrowClick("left")}
      />
      <ArrowForwardIos
        className="arrows arrow-right"
        onClick={() => handleArrowClick("right")}
      />
    </div>
  );
}
