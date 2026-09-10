import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function DownloadCTA() {
  return (
    <section id="download" className="py-24 lg:py-32 relative overflow-hidden bg-background">
      <div className="container-default">
        
        <div className="relative w-full rounded-[40px] bg-elevated border border-borderDefault p-12 md:p-20 overflow-hidden text-center max-w-5xl mx-auto shadow-2xl">
          
          {/* Background Glow inside container */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[400px] bg-accent/15 rounded-[100%] blur-[80px] pointer-events-none"></div>
          
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primaryText tracking-tight mb-6"
            >
              Ready to measure <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accentBright">a little smarter?</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-secondaryText leading-relaxed mb-12 max-w-xl mx-auto font-medium"
            >
              Download Smart AR Measure and turn your Android device into a powerful, pocket-sized measurement tool.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center gap-6"
            >
              <a 
                id="bottom-download-button"
                href="https://github.com/alenkr424-eng/AR-Tape-Measure/releases/download/v1.0.0/SmartARMeasure-v1.0.0.apk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Smart AR Measure APK from GitHub Releases"
                className="inline-flex justify-center items-center gap-3 px-10 py-5 rounded-2xl bg-accent text-[#061018] font-bold text-xl hover:bg-accentBright transition-all hover:-translate-y-1 shadow-[0_8px_20px_rgba(56,189,248,0.3)] hover:shadow-[0_12px_30px_rgba(56,189,248,0.5)]"
              >
                <Download size={24} strokeWidth={2.5} />
                DOWNLOAD APK
              </a>
              
              <div className="flex items-center gap-6 text-sm font-semibold text-secondaryText tracking-wide">
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div> Android</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div> APK Format</span>
              </div>
              
              <p className="text-xs text-mutedText max-w-sm mx-auto mt-2 leading-relaxed">
                Installation from outside Google Play may require permission to install apps from unknown sources in your device settings.
              </p>
            </motion.div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
