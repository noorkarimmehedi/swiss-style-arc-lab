import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/minimalist_architectural_hero_texture.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12 overflow-hidden bg-grain">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Abstract Architecture" 
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="block text-sm md:text-base font-medium tracking-[0.2em] text-muted-foreground mb-6 uppercase"
        >
          Portfolio &mdash; 2025
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-9xl font-serif font-medium leading-[0.9] tracking-tight mb-8 text-primary"
        >
          Digital <br/> <i className="font-display font-light text-muted-foreground">Soul</i> & Matter
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl mx-auto text-lg md:text-xl text-muted-foreground font-light leading-relaxed"
        >
          Crafting sophisticated digital experiences for forward-thinking brands. 
          Specializing in minimalist interface design and strategic art direction.
        </motion.p>
      </div>
    </section>
  );
}