import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import project1 from "@assets/generated_images/minimalist_branding_mockup.png";
import project2 from "@assets/generated_images/clean_website_interface_mockup.png";
import project3 from "@assets/generated_images/editorial_magazine_layout.png";

const projects = [
  {
    id: 1,
    title: "Aesop & Stone",
    category: "Branding Identity",
    year: "2024",
    image: project1,
    description: "A complete brand overhaul focusing on tactile materiality and negative space."
  },
  {
    id: 2,
    title: "Vogue Digital",
    category: "Web Platform",
    year: "2024",
    image: project2,
    description: "Reimagining the digital editorial experience for the modern fashion consumer."
  },
  {
    id: 3,
    title: "Kinfolk",
    category: "Editorial Layout",
    year: "2023",
    image: project3,
    description: "Art direction and layout design for the quarterly slow-living publication."
  }
];

export function PortfolioGrid() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-background">
      {/* Section Header */}
      <div className="flex items-start justify-between mb-24 border-t border-black pt-4 max-w-[1400px] mx-auto">
        <span className="text-xs font-bold tracking-tighter uppercase">(SELECTED WORKS)</span>
        <span className="text-xs font-bold tracking-tighter uppercase text-right">001 &mdash; 003</span>
      </div>

      <div className="max-w-[1400px] mx-auto flex flex-col gap-32">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center group`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-7/12 aspect-[4/3] relative overflow-hidden bg-secondary">
              <div className="absolute inset-0 bg-destructive/0 group-hover:bg-destructive/10 z-10 transition-colors duration-500 mix-blend-multiply" />
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-5/12 flex flex-col justify-between h-full py-4">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-bold tracking-widest text-destructive">0{project.id}</span>
                  <div className="h-[1px] w-12 bg-border" />
                  <span className="text-xs font-bold tracking-widest uppercase">{project.category}</span>
                </div>
                
                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[0.9] uppercase group-hover:text-stroke-black transition-all">
                  {project.title}
                </h3>
                
                <p className="text-sm md:text-base text-muted-foreground max-w-sm mb-12 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center gap-2 cursor-pointer group/btn">
                <span className="text-xs font-bold tracking-widest uppercase group-hover/btn:underline">View Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}