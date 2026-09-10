import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-secondary">
      <div className="container-default">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center">
          
          {/* Left Text */}
          <div className="order-2 lg:order-1">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="font-extrabold tracking-tight text-primaryText leading-[1.1] mb-8"
              style={{ fontSize: 'clamp(4rem, 8vw, 7rem)' }}
            >
              OPEN.<br />
              POINT.<br />
              <span className="text-accent">MEASURE.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-secondaryText leading-relaxed max-w-md font-medium"
            >
              We stripped away all the unnecessary complexity. No menus to dig through, no confusing calibration processes. Just launch the app and you're immediately ready to measure the world around you.
            </motion.p>
          </div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative w-full aspect-square max-w-md mx-auto rounded-full bg-background border border-borderDefault overflow-hidden flex items-center justify-center shadow-2xl"
          >
            {/* AR Concentric Rings Animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[120%] h-[120%] rounded-full border border-white/5 absolute animate-[spin_20s_linear_infinite]"></div>
              <div className="w-full h-full rounded-full border border-white/5 absolute animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="w-3/4 h-3/4 rounded-full border border-borderAccent absolute animate-[spin_10s_linear_infinite]"></div>
              <div className="w-1/2 h-1/2 rounded-full border border-accent/40 absolute flex items-center justify-center animate-[pulse_4s_ease-in-out_infinite]">
                <div className="w-4 h-4 bg-accent rounded-full shadow-[0_0_30px_rgba(56,189,248,1)]"></div>
              </div>
            </div>
            
            {/* Overlay Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_#070A0F_80%)] pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
