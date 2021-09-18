import "./works.scss";
import { projects } from "../../data";
import { useState } from "react";
import {
  ArrowBackIos,
  ArrowForwardIos,
  GitHub,
  Link,
  Close,
} from "@material-ui/icons";
import { useMediaQuery } from "react-responsive";

export default function Works() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 420px)" });
  const [currentSlider, setCurrentSlider] = useState(0);
  const [sliderMobileInfo, setSliderMobileInfo] = useState(false);

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
              {isSmallScreen ? (
                <div
                  className={"left-mobile " + (sliderMobileInfo && "active")}
                  onClick={() => setSliderMobileInfo(!sliderMobileInfo)}
                >
                  <span className="project-title">{project.title}</span>
                  {sliderMobileInfo && (
                    <div className="info">
                      <span className="description">{project.description}</span>
                      <span className="technologies">
                        {project.technologies}
                      </span>
                    </div>
                  )}
                  <div className="links">
                    <a href={project.links.github} target="_blank">
                      <GitHub />
                    </a>
                    <a href={project.links.link} target="_blank">
                      <Link />
                    </a>
                  </div>
                </div>
              ) : (
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
              )}

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
      <div className="slider-pagination">
        {projects.map((project, i) => (
          <div
            key={i}
            className={"slider-thumbnail " + (currentSlider === i && "current")}
            onClick={() => setCurrentSlider(i)}
          ></div>
        ))}
      </div>
    </div>
  );
}
