'use client'

import { Link } from "@/app/components/link/link"
import { ProjectCard } from "./project-card"
import { Project } from "@/app/types/projects"
import { motion } from "framer-motion"

type ProjectsListProps = {
    projects: Project[]
}

export const ProjectsList = ({projects}: ProjectsListProps) => {
    return(
        <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x4 gap-y-6">
            {projects.map((project, i) => (
                <motion.div  key={project.title}
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: 50}}
                    transition={{duration: 0.5, delay: i * 0.1}}
                >
                    <Link href={`/projects/${project.slug}`}>
                        <ProjectCard project={project} />
                    </Link>
                </motion.div>
            ))}    
        </section>
    )
}