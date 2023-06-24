import { HeroSection } from "./components/pages/home/hero-section/hero";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects/highlighted-projects";
import { KnownTechs } from "./components/pages/home/known-techs/known-techs";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
      }
    }
  `
  return fetchHygraphQuery(query, 60*60*24)
}

export default async function Home() {
  const {page: pageData} = await getPageData()



  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs />
      <HighlightedProjects />
    </>
  )
}
