import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import project1 from "@assets/generated_images/minimalist_branding_mockup.png";
import project2 from "@assets/generated_images/clean_website_interface_mockup.png";
import project3 from "@assets/generated_images/editorial_magazine_layout.png";

const projects = [
  {
    id: 1,
    title: "Aesop & Stone",
    category: "Branding / Identity",
    image: project1,
    size: "col-span-1 md:col-span-1 lg:col-span-5",
    aspect: "aspect-[4/3]"
  },
  {
    id: 2,
    title: "Vogue Digital",
    category: "Web Design / UX",
    image: project2,
    size: "col-span-1 md:col-span-1 lg:col-span-7",
    aspect: "aspect-[16/9]"
  },
  {
    id: 3,
    title: "Kinfolk Editorial",
    category: "Print / Layout",
    image: project3,
    size: "col-span-1 md:col-span-2 lg:col-span-12",
    aspect: "aspect-[21/9]"
  }
];

export function PortfolioGrid() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="flex items-end justify-between mb-16 border-b border-border pb-6">
        <h2 className="text-3xl md:text-4xl font-serif">Selected Works</h2>
        <span className="text-sm text-muted-foreground hidden md:block">(03)</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`group cursor-pointer ${project.size}`}
          >
            <div className={`relative overflow-hidden bg-muted ${project.aspect} mb-6`}>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-medium mb-1 group-hover:text-muted-foreground transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">{project.category}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}