import { motion } from "framer-motion";
import caseStudyImg from "@assets/generated_images/luxury_packaging_detail.png";
import { Button } from "@/components/ui/button";

export function CaseStudy() {
  return (
    <section className="py-32 bg-secondary text-secondary-foreground">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-6 block">
              Case Study
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Redefining Luxury <br/> <span className="italic font-display text-muted-foreground">Tactility</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
              <p>
                For Maison d'Etre, we explored the intersection of tactile materiality and visual minimalism. 
                The challenge was to create a packaging system that felt as substantial as the product within.
              </p>
              <p>
                Using embossed uncoated papers, silver foil stamping, and a restrained typographic palette, 
                we achieved a sensory experience that elevates the unboxing ritual to an art form.
              </p>
            </div>
            
            <div className="mt-10">
              <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-sm tracking-widest uppercase transition-all">
                View Case Study
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden">
              <img 
                src={caseStudyImg} 
                alt="Luxury Packaging Detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}