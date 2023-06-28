import { PageIntro } from "../components/pages/home/projects/page-intro/page-intro"
import { ProjectsList } from "../components/pages/home/projects/project-list/project-list"
import { ProjectsPageData } from "../types/page-info"
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query"

export const metadata = {
  title: 'Projetos'
}

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    `
  return fetchHygraphQuery(query, 60 * 60 * 24)
}

export default async function Projects() {
  const { projects } = await getPageData()
  return (
    <>
      <PageIntro />
      <ProjectsList projects={projects} />
    </>
  )
}