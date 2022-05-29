import axios from 'axios'
import { resolve } from 'path'
import { slash } from 'gatsby-core-utils'
require("dotenv").config()

export async function createPages({ actions }) {
  const data = require("./src/data/projectData.json")
  const { createPage } = actions

  const pageTemplate = resolve(
    "./src/templates/project_detailed_view/projectDetailedView.tsx"
  )

  async function query({ query }) {  
    const options = {
      method: "POST",
      url: `${process.env.HASURA_API_URL}`,
      headers: {
        "Content-Type": "application/json",
        "X-Hasura-admin-secret": `${process.env.HASURA_ADMIN_SECRET}`,
      },
      data: JSON.stringify({ query }),
    }

    const result : any = await axios(options)
      .then(res => res)
      .catch(err => {
        console.error("THERE WAS AN ERROR")
        console.error(JSON.stringify(err, null, 2))
      })

    return result.data
  }

  await query({
    query: `
    query {
      Project_Data {
        project_title
        project_img_relative_url
        project_skills
        project_description
        free_project
        project_files_link
      }
    }
    `,
  }).then(res => {
    data.map(indvProjectData => {
      let projectToPassDown

      res.data.Project_Data.forEach(project => {
        if (project.project_title === indvProjectData.projectTitle) {
          projectToPassDown = project
        }
      })

      createPage({
        path: `/${indvProjectData.projectTitle.replace(/\s/g, "")}`,
        component: slash(pageTemplate),
        context: {
          projectObs: indvProjectData,
          downloadData: projectToPassDown,
        },
      })
    })
  })
}
