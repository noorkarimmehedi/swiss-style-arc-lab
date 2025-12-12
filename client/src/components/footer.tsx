import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 md:px-12 bg-background text-foreground border-t border-black">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Massive Headline */}
        <div className="mb-24">
          <h2 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black uppercase font-serif">
            Let's Talk
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-black pt-12">
          
          {/* Column 1: Email */}
          <div className="md:col-span-6 lg:col-span-4">
             <span className="block text-xs font-bold tracking-widest uppercase mb-6 text-destructive font-serif">Inquiries</span>
             <a href="mailto:hello@arclabtechnology.com" className="text-lg md:text-xl font-bold tracking-tight hover:text-muted-foreground transition-colors font-serif block mb-8">
              hello@arclabtechnology.com
            </a>
            <a 
              href="#" 
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-4 text-xs font-bold tracking-widest uppercase hover:bg-destructive transition-colors group"
            >
              <span>Book a Free Call</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Column 2: Address */}
           <div className="md:col-span-3 lg:col-span-4">
             <span className="block text-xs font-bold tracking-widest uppercase mb-6 font-serif">Studio</span>
             <address className="not-italic text-sm font-medium leading-relaxed font-serif">
               192 Mercer Street<br/>
               New York, NY 10012<br/>
               United States
             </address>
          </div>

          {/* Column 3: Social & Copyright */}
           <div className="md:col-span-3 lg:col-span-4 flex flex-col justify-between h-full">
             <div>
               <span className="block text-xs font-bold tracking-widest uppercase mb-6 font-serif">Connect</span>
               <div className="flex flex-col gap-2 text-sm font-medium font-serif">
                  <a href="#" className="hover:underline">Instagram</a>
                  <a href="#" className="hover:underline">Twitter / X</a>
                  <a href="#" className="hover:underline">LinkedIn</a>
               </div>
             </div>
             
             <div className="mt-12 md:mt-0">
               <span className="block text-sm font-bold tracking-widest uppercase text-muted-foreground font-serif">
                 &copy; 2025 Arc Lab Technology.
               </span>
             </div>
          </div>

        </div>
      </div>
    </footer>
  );
}