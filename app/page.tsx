import { Hero } from "@/components/home/hero"
import { Stats } from "@/components/home/stats"
import { Ethos } from "@/components/home/ethos"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { Approach } from "@/components/home/approach"
import { NewsPreview } from "@/components/home/news-preview"
import { CtaBand } from "@/components/cta-band"
import ClientReviews from "@/components/ClientReviews"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Ethos />
      <FeaturedProjects />
      <ClientReviews />
      <Approach />
      <NewsPreview />
      <CtaBand />
    </>
  )
}
