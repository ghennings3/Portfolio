"use client"

import { Button } from "@/app/components/button/button"
import { SectionTitle } from "@/app/components/section-title"
import { TechBadge } from "@/app/components/tech-badge"
import { TbBrandGithub } from "react-icons/tb"
import { FiGlobe } from "react-icons/fi"
import { Link } from "@/app/components/link/link"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { Project } from "@/app/types/projects"
import { RichText } from "@/app/components/rich-text/rich-text"
import { motion } from "framer-motion"

type ProjectDetailsProps = {
    project: Project
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
    return (
        <section className='w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden'>
            <motion.div
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='absolute inset-0 z-[-1]'
                style={{
                    background: `url(${project.pageThumbnail.url}) no-repeat center/cover`,
                }}
            />
            <SectionTitle
                subtitle='projetos'
                title={project.title}
                className='text-center items-center sm:[&>h3]:text-4xl'
            />
            <motion.div
                className='text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
            >
                <RichText content={project.description.raw} />
            </motion.div>
            <div className='w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center'>
                {project.technologies.map((tech, i) => (
                    <TechBadge
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        key={tech.name}
                        name={tech.name}
                    />
                ))}
            </div>
            <motion.div
                className='my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
            >
                {project?.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Button className='min-w-[180px]'>
                            <TbBrandGithub size={20} />
                            Repositório
                        </Button>
                    </a>
                )}
                {project?.liveProjectUrl && (
                    <a
                        href={project.liveProjectUrl}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Button className='min-w-[180px]'>
                            <FiGlobe size={20} />
                            Projeto online
                        </Button>
                    </a>
                )}
            </motion.div>
            <Link href='/projects'>
                <HiArrowNarrowLeft />
                Voltar para projetos
            </Link>
        </section>
    )
}
