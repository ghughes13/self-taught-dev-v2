import React from "react"
import { Link } from "gatsby"
import "./styles.scss"

type ProjectCardTypes = {
  project: project,
  projectCardClasses: string
}

type project = {
  imgUrl: string,
  projectTitle: string,
  skills: string,

}

const ProjectCard = ({ project: project, projectCardClasses }: ProjectCardTypes) => {
  console.log()
  return (
    <div className={"project-card " + projectCardClasses}>
      <div className="preview-img">
        <img
          src={require(`../../images/project_thumbnails${project.imgUrl}`).default}
          alt={project.projectTitle}
        />
      </div>
      <div className="project-skills">
        {project.skills.split(",").map((skill: string) => {
          return (
            <p key={skill} className="skill">
              {skill}
            </p>
          )
        })}
      </div>
      <h4>{project.projectTitle}</h4>
      <Link
        className="btn-style-1"
        to={"/" + project.projectTitle.replace(/\s/g, "")}
      >
        Learn More
      </Link>
    </div>
  )
}

export default ProjectCard
