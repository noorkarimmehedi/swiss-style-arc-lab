import { motion } from "framer-motion";
import caseStudyImg from "@assets/generated_images/luxury_packaging_detail.png";
import { ArrowUpRight } from "lucide-react";

export function CaseStudy() {
  return (
    <section className="py-24 bg-background text-foreground border-t border-black">
       {/* Header */}
       <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 flex justify-between items-end">
          <h2 className="text-[10vw] leading-[0.8] font-bold tracking-tighter uppercase">
            In Depth
          </h2>
          <span className="hidden md:block text-xs font-bold tracking-widest uppercase mb-2">
            (Feature 01)
          </span>
       </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-black">
          
          {/* Image Side - Left */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square lg:aspect-auto lg:h-[80vh] border-b lg:border-b-0 lg:border-r border-black overflow-hidden group"
          >
            <div className="absolute inset-0 bg-destructive/0 group-hover:bg-destructive/10 z-10 transition-colors duration-500 mix-blend-multiply" />
            <img 
              src={caseStudyImg} 
              alt="Maison d'Etre Packaging" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Overlay Label */}
            <div className="absolute top-6 left-6 z-20 bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
              Maison d'Etre
            </div>
          </motion.div>

          {/* Content Side - Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-between p-8 lg:p-16"
          >
            <div>
              <div className="flex gap-4 text-xs font-bold tracking-widest uppercase mb-12 text-destructive">
                <span>Packaging</span>
                <span>/</span>
                <span>Identity</span>
                <span>/</span>
                <span>2024</span>
              </div>

              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8 leading-none uppercase">
                Tactile <br/> Minimalism
              </h3>
              
              <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed max-w-md">
                <p>
                  A study in reduction. We stripped away the superfluous to reveal the essential quality of the material itself.
                </p>
                <p className="text-muted-foreground">
                   Embossed uncoated papers meet silver foil stamping—a sensory experience that elevates the unboxing ritual to an architectural event.
                </p>
              </div>
            </div>
            
            <div className="mt-16 lg:mt-0 pt-8 border-t border-black/10">
              <button className="group flex items-center gap-4 text-sm font-bold tracking-widest uppercase hover:text-destructive transition-colors">
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}