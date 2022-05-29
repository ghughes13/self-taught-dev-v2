import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import DownArrows from "../../components/Animations/DownArrows"
import ProjectData from "../../data/projectData.json"
import ProjectCard from "../../components/ProjectCard"

export default function ProjectArchive() {
  return (
    <Layout>
      <SEO title="Project Archive" />
      <div className="index-hero">
        <h1>
          <span className="mint-green">{"<"}</span>
          Project Archive
          <span className="mint-green">{"/>"}</span>
        </h1>
        <h3 className="page-title">
          Practice Projects For Front End Developers
        </h3>
        <DownArrows />
      </div>
      <div className="project-previews">
        {ProjectData.map(project => {
          return (
            <ProjectCard
              project={project}
              key={project.imgUrl}
              projectCardClasses={project.isFreeProject}
            />
          )
        })}
      </div>
    </Layout>
  )
}
