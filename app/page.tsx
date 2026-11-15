import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { HowItWorks } from "@/components/how-it-works"
import { Impact } from "@/components/impact"
import { Nuclei } from "@/components/nuclei"
import { GetInvolved } from "@/components/get-involved"
import { Colabora } from "@/components/colabora"
import { NeedsHelp } from "@/components/needs-help"
import { News } from "@/components/news"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Impact />
        <Nuclei />
        <GetInvolved />
        <Colabora />
        <NeedsHelp />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
