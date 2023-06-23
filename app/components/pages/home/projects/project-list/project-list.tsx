import { Link } from "@/app/components/link/link"
import { ProjectCard } from "./project-card"

export const ProjectsList = () => {
    return(
        <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x4 gap-y-6">
            <Link href={'/projects/project-1'}>
                <ProjectCard />
            </Link>    
        </section>
    )
}