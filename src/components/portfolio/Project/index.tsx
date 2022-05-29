import React from "react"
import { Link } from "gatsby"
import "./styles.scss"

type ProjectProps = {
  title: string
  imgSrc: string
  skills: string[] 
  demoLink: string
  codeLink: string
  videoLink?: string
}

const Project = ({
  title,
  imgSrc,
  skills,
  demoLink,
  codeLink,
  videoLink = "",
}: ProjectProps) => {
  return (
    <div className="project">
      <img
        src={require("../../../images/portfolio-sites/" + imgSrc)}
        alt="Respontive Portfolio Site"
      />
      <div className="overlay">
        <h4>{title}</h4>
        <ul>
          {skills.map((skill: any) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <div className="btns">
          <Link to={demoLink} target="_blank" rel="noreferrer">
            See the Site
          </Link>
          <Link to={codeLink} target="_blank" rel="noreferrer">
            See the Code
          </Link>
          {videoLink ? (
            <Link to={videoLink} target="_blank" rel="noreferrer">
              Video Demo
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}

export default Project
