import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-12 px-6 md:px-12 bg-background overflow-hidden pt-32">
      {/* Grid Lines Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full border-l border-r border-border/40 max-w-[1400px] mx-auto grid grid-cols-4 md:grid-cols-12 gap-4">
          {/* Mobile Grid Lines */}
          <div className="col-span-1 border-r border-border/40 h-full md:hidden" />
          <div className="col-span-1 border-r border-border/40 h-full md:hidden" />
          <div className="col-span-1 border-r border-border/40 h-full md:hidden" />
          
          {/* Desktop Grid Lines */}
          <div className="col-span-1 border-r border-border/40 h-full hidden md:block" />
          <div className="col-span-1 border-r border-border/40 h-full hidden md:block" />
          <div className="col-span-1 border-r border-border/40 h-full hidden md:block" />
          <div className="col-span-1 border-r border-border/40 h-full hidden md:block" />
          <div className="col-span-1 border-r border-border/40 h-full hidden md:block" />
          <div className="col-span-1 border-r border-border/40 h-full hidden md:block" />
          <div className="col-span-1 border-r border-border/40 h-full hidden md:block" />
          <div className="col-span-1 border-r border-border/40 h-full hidden md:block" />
          <div className="col-span-1 border-r border-border/40 h-full hidden md:block" />
          <div className="col-span-1 border-r border-border/40 h-full hidden md:block" />
          <div className="col-span-1 border-r border-border/40 h-full hidden md:block" />
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Top Label */}
        <div className="lg:col-span-12 mb-8 lg:mb-24 flex justify-between items-start border-t border-black pt-4">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-xs font-bold tracking-tighter uppercase"
          >
            (EST. 2025)
          </motion.span>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xs font-bold tracking-tighter uppercase text-right"
          >
            Zurich / New York / Tokyo
          </motion.span>
        </div>

        {/* Main Headline */}
        <div className="lg:col-span-9">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] leading-[0.8] font-serif font-bold tracking-tighter text-black mix-blend-multiply"
          >
            DIGITAL
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] leading-[0.8] font-serif font-bold tracking-tighter text-black mix-blend-multiply ml-[10vw] lg:ml-[15vw]"
          >
            SYSTEMS
          </motion.h1>
        </div>

        {/* Introduction Text */}
        <div className="lg:col-span-3 flex flex-col justify-end mb-4">
           <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
           >
             <div className="w-12 h-1 bg-destructive mb-6" /> {/* Swiss Red Accent */}
             <p className="text-sm font-medium leading-relaxed text-black max-w-[280px]">
               We construct digital infrastructure with a focus on typographic clarity and structural precision. No fluff, just function.
             </p>
           </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}