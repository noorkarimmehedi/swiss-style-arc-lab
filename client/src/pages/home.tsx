import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { CaseStudy } from "@/components/case-study";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background">
      <Nav />
      <main>
        <Hero />
        <PortfolioGrid />
        <CaseStudy />
      </main>
      <Footer />
    </div>
  );
}