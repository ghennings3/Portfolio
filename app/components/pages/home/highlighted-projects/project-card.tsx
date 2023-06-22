import { Link } from "@/app/components/link/link"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

export const ProjectCard = () => {
    return(
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image width={420} height={304} src={'/images/project-sample.jpg'} alt="Thumbnail do Projeto" className="object-cover rounded-lg lg:min-h-full w-full h-[200px] sm:h-[300px] lg:w-[420px] "/>
            </div>
            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <Image width={20} height={20} alt="" src={'/images/icons/project-title-icon.svg'} />
                    Project Sample
                </h3>
                <p className="text-gray-400 my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, distinctio illo et consectetur laudantium saepe iure laborum nobis? Veniam, obcaecati!</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <TechBadge name="next.js" />
                    <TechBadge name="next.js" />
                    <TechBadge name="next.js" />
                </div>
                <Link href={'/projects/project1'}>
                    Ver Projeto
                    <HiArrowNarrowRight />
                </Link>
            </div>
        </div>
    )
}