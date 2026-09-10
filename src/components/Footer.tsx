import { Box } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-borderDefault pt-20 pb-10">
      <div className="container-default">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          <div>
            <a href="#home" className="flex items-center gap-3 mb-6 group inline-flex">
              <div className="text-primaryText group-hover:text-accent transition-colors">
                <Box size={24} strokeWidth={2.5} />
              </div>
              <span className="font-bold text-primaryText tracking-tight text-xl">Smart AR Measure</span>
            </a>
            <p className="text-secondaryText max-w-xs font-medium leading-relaxed">
              Measure the world around you.
            </p>
          </div>
          
          <div className="flex gap-16 md:justify-end">
            <div className="flex flex-col gap-6">
              <h4 className="text-primaryText font-bold text-xs tracking-widest uppercase">Product</h4>
              <nav className="flex flex-col gap-4">
                <a href="#features" className="text-secondaryText hover:text-accent font-medium transition-colors text-sm">Features</a>
                <a href="#how-it-works" className="text-secondaryText hover:text-accent font-medium transition-colors text-sm">How It Works</a>
                <a href="#screenshots" className="text-secondaryText hover:text-accent font-medium transition-colors text-sm">Screenshots</a>
              </nav>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-borderDefault pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-mutedText text-sm font-medium">
            &copy; {new Date().getFullYear()} Smart AR Measure. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm text-mutedText font-medium">
            <span>Version 1.0.0</span>
            <a 
              href="https://github.com/alenkr424-eng/AR-Tape-Measure" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primaryText transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
