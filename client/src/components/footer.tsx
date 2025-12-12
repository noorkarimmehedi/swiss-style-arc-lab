export function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 md:px-12 bg-primary text-primary-foreground">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif leading-none mb-8">
              Let's build <br/> something <span className="italic text-muted-foreground font-display">timeless.</span>
            </h2>
            <a href="mailto:hello@ark.design" className="text-xl md:text-2xl underline decoration-1 underline-offset-8 hover:text-muted-foreground transition-colors">
              hello@ark.design
            </a>
          </div>
          
          <div className="flex flex-col justify-end lg:items-end">
            <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm tracking-wider uppercase">
              <div className="space-y-4">
                <h4 className="text-muted-foreground mb-4">Social</h4>
                <a href="#" className="block hover:text-white transition-colors">Instagram</a>
                <a href="#" className="block hover:text-white transition-colors">Twitter</a>
                <a href="#" className="block hover:text-white transition-colors">LinkedIn</a>
              </div>
              <div className="space-y-4">
                <h4 className="text-muted-foreground mb-4">Location</h4>
                <p>New York, NY</p>
                <p>EST 09:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 uppercase tracking-widest">
          <p>&copy; 2025 Ark Design Studio</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}