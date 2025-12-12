import { motion } from "framer-motion";
import caseStudyImg from "@assets/generated_images/luxury_packaging_detail.png";
import { ArrowUpRight, Plus } from "lucide-react";

export function CaseStudy() {
  return (
    <section className="bg-background text-foreground border-t border-black overflow-hidden">
       {/* Marquee-style Header */}
       <div className="border-b border-black py-4 overflow-hidden whitespace-nowrap bg-black text-white">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-12 items-center"
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-12">
                <span className="text-sm font-bold tracking-[0.2em] uppercase">Featured Case Study</span>
                <span className="w-2 h-2 bg-destructive rounded-full" />
                <span className="text-sm font-bold tracking-[0.2em] uppercase">Maison d'Etre</span>
                <span className="w-2 h-2 bg-destructive rounded-full" />
              </div>
            ))}
          </motion.div>
       </div>

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[90vh]">
          
          {/* Left Column: Data Grid */}
          <div className="lg:col-span-5 border-r border-black flex flex-col">
            <div className="p-8 md:p-12 border-b border-black flex-grow">
               <span className="text-xs font-bold tracking-widest uppercase bg-destructive text-white px-2 py-1 inline-block mb-6">
                 Project 01
               </span>
               <h2 className="text-6xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.85] mb-8">
                 Tactile <br/> System
               </h2>
               <p className="text-lg font-medium leading-relaxed max-w-sm">
                 A radical exploration of material reduction. We stripped away the superfluous to reveal the essential quality of the object.
               </p>
            </div>

            {/* Technical Specs Grid */}
            <div className="grid grid-cols-2 border-b border-black lg:border-b-0">
               <div className="p-6 border-r border-b border-black">
                 <span className="block text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-1">Client</span>
                 <span className="text-sm font-bold uppercase">Maison d'Etre</span>
               </div>
               <div className="p-6 border-b border-black">
                 <span className="block text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-1">Year</span>
                 <span className="text-sm font-bold uppercase">2024</span>
               </div>
               <div className="p-6 border-r border-black">
                 <span className="block text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-1">Service</span>
                 <span className="text-sm font-bold uppercase">Art Direction</span>
               </div>
               <div className="p-6">
                 <span className="block text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-1">Sector</span>
                 <span className="text-sm font-bold uppercase">Luxury Goods</span>
               </div>
            </div>
            
            <div className="p-0">
               <button className="w-full h-20 flex items-center justify-between px-8 bg-black text-white hover:bg-destructive transition-colors group">
                 <span className="text-sm font-bold tracking-widest uppercase">View Full Report</span>
                 <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
               </button>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="lg:col-span-7 relative bg-secondary overflow-hidden group">
            {/* Grid overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none grid grid-cols-4 h-full w-full">
              <div className="border-r border-black/10 h-full" />
              <div className="border-r border-black/10 h-full" />
              <div className="border-r border-black/10 h-full" />
              <div className="border-r border-black/10 h-full" />
            </div>

            {/* Crosshairs */}
            <div className="absolute top-8 right-8 z-20 text-black">
              <Plus className="w-6 h-6" />
            </div>
            <div className="absolute bottom-8 left-8 z-20 text-black">
              <Plus className="w-6 h-6" />
            </div>

            <img 
              src={caseStudyImg} 
              alt="Maison d'Etre Packaging" 
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>

        </div>
      </div>
    </section>
  );
}