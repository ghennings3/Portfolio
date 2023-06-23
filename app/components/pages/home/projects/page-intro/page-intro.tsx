import { Link } from "@/app/components/link/link"
import { SectionTitle } from "@/app/components/section-title"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const PageIntro = () => {
    return(
        <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
            <SectionTitle subtitle="Projetos" title="Meus Projetos" className="text-center items-center [&>h3]:text-4xl" />
            <div className="flex flex-col items-center">
                <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">Aqui você poderá ver alguns dos trabalhos que eu desenvolvi.</p>
                <Link href="/">
                    <HiArrowNarrowLeft size={20} />
                    Voltar para Home
                </Link>
            </div>
        </section>
    )
}