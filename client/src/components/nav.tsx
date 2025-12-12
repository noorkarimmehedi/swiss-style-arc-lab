import { Link } from "wouter";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-background/80 backdrop-blur-sm border-b border-border/40">
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
          className="md:hidden z-50 relative p-2 -mr-2 text-foreground"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-background flex flex-col pt-32 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-bold tracking-tighter uppercase text-foreground hover:text-destructive transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="mt-auto mb-12 border-t border-border pt-8"
            >
               <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
                 Get in Touch
               </p>
               <a href="mailto:hello@arc.design" className="text-lg font-bold">
                 hello@arc.design
               </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}