import { HeroSection } from "./components/pages/home/hero-section/hero";
import { KnownTechs } from "./components/pages/home/known-techs/known-techs";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
    </>
  )
}
