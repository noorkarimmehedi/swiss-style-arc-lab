import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 md:px-12 bg-background text-foreground border-t border-black">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Massive Headline */}
        <div className="mb-24">
          <h2 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black uppercase font-sans">
            Let's Talk
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-black pt-12">
          
          {/* Column 1: Email */}
          <div className="md:col-span-6 lg:col-span-4">
             <span className="block text-xs font-bold tracking-widest uppercase mb-6 text-destructive font-sans">Inquiries</span>
             <a href="mailto:hello@arc.design" className="text-3xl md:text-4xl font-bold tracking-tight hover:text-muted-foreground transition-colors font-sans">
              hello@arc.design
            </a>
          </div>

          {/* Column 2: Address */}
           <div className="md:col-span-3 lg:col-span-4">
             <span className="block text-xs font-bold tracking-widest uppercase mb-6 font-sans">Studio</span>
             <address className="not-italic text-sm font-medium leading-relaxed font-sans">
               192 Mercer Street<br/>
               New York, NY 10012<br/>
               United States
             </address>
          </div>

          {/* Column 3: Social & Copyright */}
           <div className="md:col-span-3 lg:col-span-4 flex flex-col justify-between h-full">
             <div>
               <span className="block text-xs font-bold tracking-widest uppercase mb-6 font-sans">Connect</span>
               <div className="flex flex-col gap-2 text-sm font-medium font-sans">
                  <a href="#" className="hover:underline">Instagram</a>
                  <a href="#" className="hover:underline">Twitter / X</a>
                  <a href="#" className="hover:underline">LinkedIn</a>
               </div>
             </div>
             
             <div className="mt-12 md:mt-0">
               <span className="block text-[10px] font-bold tracking-widest uppercase text-muted-foreground font-sans">
                 &copy; 2025 Arc Design Systems.
               </span>
             </div>
          </div>

        </div>
      </div>
    </footer>
  );
}