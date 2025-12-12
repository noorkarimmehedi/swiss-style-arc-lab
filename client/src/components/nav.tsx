import { Link } from "wouter";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <Link href="/" className="text-xl font-serif font-bold tracking-tight hover:opacity-70 transition-opacity cursor-pointer">
        ARK.
      </Link>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#work" className="text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors">WORK</a>
        <a href="#about" className="text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors">ABOUT</a>
        <a href="#contact" className="text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors">CONTACT</a>
      </div>

      <button className="md:hidden text-sm font-medium">MENU</button>
    </nav>
  );
}