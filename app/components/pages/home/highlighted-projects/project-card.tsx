'use client'
import {motion} from 'framer-motion'

import { Link } from "@/app/components/link/link"
import { TechBadge } from "@/app/components/tech-badge"
import { Project } from "@/app/types/projects"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

type ProjectCardProps = {
    project: Project
}

export const ProjectCard = ({project}: ProjectCardProps) => {

    const animateProps = {
        initial: {opacity: 0, y: 50},
        whileInView: {opacity: 1, y: 0},
        exit: {opacity: 0, y: 50}
    }

    return(
        <motion.div className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
            initial= {{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 100}}
            transition={{duration: 0.5}}
        >
            <motion.div className="w-full h-full"
                initial= {{opacity: 0, y: 100, scale: 0.5}}
                whileInView={{opacity: 1, y: 0, scale: 1}}
                exit={{opacity: 0, y: 100, scale: 0.5}}
                transition={{duration: 0.3, delay: 0.3}}
            >
                <Image width={420} height={304} src={project.thumbnail.url} alt={`Thumbnail do Projeto ${project.title}`} className="object-cover rounded-lg lg:min-h-full w-full h-[200px] sm:h-[300px] lg:w-[420px] "/>
            </motion.div>
            <div>
                <motion.h3 className="flex items-center gap-3 font-medium text-lg text-gray-50"
                    {...animateProps}
                    transition={{duration: 0.7}}
                >
                    <Image width={20} height={20} alt="" src={'/images/icons/project-title-icon.svg'} />
                    {project.title}
                </motion.h3>
                <motion.p className="text-gray-400 my-6"
                    {...animateProps}
                    transition={{duration: 0.2, delay: 0.3}}
                >{project.shortDescription}</motion.p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    {project.technologies.map((tech, i) => (
                        <TechBadge
                            initial={{opacity: 0, scale: 0}}
                            whileInView={{opacity: 1, scale: 1}}
                            exit={{opacity: 0, scale: 0}}
                            transition={{duration: 0.2, delay: 0.5 + i * 0.1}}
                            key={`${project.title}-tech-${tech.name}`} name={tech.name} />
                    ))}
                </div>
                <Link href={`/projects/${project.slug}`}>
                    Ver Projeto
                    <HiArrowNarrowRight />
                </Link>
            </div>
        </motion.div>
    )
}