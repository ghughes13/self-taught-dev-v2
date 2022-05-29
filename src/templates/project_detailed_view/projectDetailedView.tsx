import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
// import ManageSubscription from "../../components/ManageSubscription"
// import { useIdentityContext } from "react-netlify-identity-gotrue"

import "./project-detailed-view.scss"

export default function ProjectDetails(someProp: any) {
  const projDetails = someProp.pageContext.projectObs
  const projectDetails = someProp.pageContext.downloadData

  const title = projectDetails.project_title
  const description = projectDetails.project_description
  // const imgUrl = projectDetails.project_img_relative_url
  const fileLink = projectDetails.project_files_link
  const isFreeProject = projectDetails.free_project

  const background = require("../../images/project_thumbnails" +
    projDetails.imgUrl)

  const styles = {
    backgroundImage: `url(${background})`,
  }

  // const identity = useIdentityContext()
  let isUserPro = false

  // if (identity.user && identity.user.app_metadata.roles[0] === "pro") {
  //   isUserPro = true
  // }

  return (
    <Layout>
      <div className="project-detailed-view">
        <div className="background-image" style={styles}></div>
        <div className="content">
          <h1>{title} </h1>
          <p>{description}</p>
          {/* <a
            href={projDetails.videoUrl}
            className="btn-style-1 demo-btn"
            target="_blank"
            rel="noreferrer"
          >
            Demo Video
          </a> */}
          <div className="plan-comparison">
            <div className="lite plan-option">
              {isFreeProject ? (
                <h4 className="larger-h4 regular">{title} - Free</h4>
              ) : (
                <h4 className="larger-h4 regular">{title} - $9.99</h4>
              )}

              <ul className="omit-list-style">
                <li>Desktop Mockup</li>
                <li>Tablet Mockup</li>
                <li>Mobile Mockup</li>
                <li>Project Demo Video</li>
                <li>Lv 1 Requirements</li>
                <li>Lv 2 Requirements</li>
                <li>
                  Lv 3 Requirements
                  <span>(If Applicable)</span>
                </li>
              </ul>
              <div className="project-download">
                <ShouldContentLinkBeDisplayed
                  mockupLink={fileLink}
                  isFreeProject={isFreeProject}
                  projectTitle={title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

type ShouldContentLinkBeDisplayedProps = {
  mockupLink: string
  projectTitle: string
  isFreeProject: boolean
}

function ShouldContentLinkBeDisplayed({
  mockupLink,
  projectTitle,
  isFreeProject,
}: ShouldContentLinkBeDisplayedProps) {
  // const identity = useIdentityContext()

  let showProjectLink = false
  // let isUserSignedIn = identity.user

  // if (
  //   identity.user &&
  //   identity.user.app_metadata.roles.includes(projectTitle.replace(/\s/g, ""))
  // ) {
  //   showProjectLink = true
  // }

  if (false
    // (isUserSignedIn && showProjectLink) ||
    // (isUserSignedIn && isFreeProject)
  ) {
    return (
      <p>
        <a
          href={mockupLink}
          className="btn-style-1 demo-btn"
          target="_blank"
          rel="noreferrer"
        >
          Download Project Files
        </a>
      </p>
    )
  // } else if (!isUserSignedIn && isFreeProject) {
  } else if (true) {
  return (
      <p>
        <Link to="/login" className="btn-style-1 btn demo-btn">
          Login To Download Project Files
        </Link>
      </p>
    )
  } else {
    return (''
      // <p>
      //   <ManageSubscription
      //     innerText="Purchase And Unlock This Project"
      //     projectTitle={projectTitle.replace(/\s/g, "")}
      //   />
      // </p>
    )
  }
}
