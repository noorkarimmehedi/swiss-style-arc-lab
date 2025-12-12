import { Link } from "wouter";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "#work", label: "Work", id: "01" },
    { href: "#about", label: "About", id: "02" },
    { href: "#contact", label: "Contact", id: "03" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-background/90 backdrop-blur-sm border-b border-black">
        <Link href="/">
          <a className="text-xl font-sans font-bold tracking-tight hover:opacity-70 transition-opacity cursor-pointer uppercase">
            ARC.
          </a>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="text-sm font-bold tracking-widest uppercase hover:text-destructive transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden z-50 relative p-2 -mr-2 text-foreground flex items-center gap-2"
          aria-label="Toggle Menu"
        >
          <span className="text-[10px] font-bold tracking-widest uppercase hidden sm:block">
            {isOpen ? "Close" : "Menu"}
          </span>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay - Swiss Grid Style */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // Custom easing for crisp snap
            className="fixed inset-0 z-40 bg-background flex flex-col pt-24 md:hidden border-b-4 border-destructive"
          >
             {/* Grid Lines Background */}
            <div className="absolute inset-0 z-0 pointer-events-none grid grid-cols-4 h-full w-full opacity-20">
              <div className="border-r border-black h-full" />
              <div className="border-r border-black h-full" />
              <div className="border-r border-black h-full" />
              <div className="border-r border-black h-full" />
            </div>

            <div className="flex flex-col h-full relative z-10">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between px-6 py-8 border-b border-black hover:bg-black hover:text-white transition-colors cursor-pointer"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="text-xs font-bold tracking-widest text-destructive group-hover:text-white transition-colors">
                      ({item.id})
                    </span>
                    <span className="text-5xl font-bold tracking-tighter uppercase">
                      {item.label}
                    </span>
                  </div>
                  <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                </motion.a>
              ))}

              <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.6 }}
                 className="mt-auto p-6 grid grid-cols-2 gap-6 border-t border-black bg-secondary"
              >
                 <div>
                   <span className="block text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-2">Location</span>
                   <p className="text-sm font-bold uppercase">New York, NY</p>
                 </div>
                 <div>
                   <span className="block text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-2">Contact</span>
                   <a href="mailto:hello@arc.design" className="text-sm font-bold uppercase underline">hello@arc.design</a>
                 </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}