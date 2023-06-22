import { HorizontaDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { ProjectCard } from "./project-card"
import { Link } from "@/app/components/link/link"
import { HiArrowNarrowRight } from "react-icons/hi"

export const HighlightedProjects = () => {
    return(
        <section className="container py-16">
            <SectionTitle subtitle="Destaque" title="Projetos em destaque" />
            <HorizontaDivider className="mb-16" />

            <div>
                <ProjectCard />
                <HorizontaDivider className="my-16" />
                <ProjectCard />
                <HorizontaDivider className="my-16" />
                <ProjectCard />
                <HorizontaDivider className="my-16" />
                <p className="flex items-center gap-1.5">
                    <span className='text-gray-400'>Se interessou?</span>
                    <Link className="inline-flex" href={'/projects'}>
                        Ver todos
                        <HiArrowNarrowRight />
                    </Link>
                </p>
            </div>
        </section>
    )
}