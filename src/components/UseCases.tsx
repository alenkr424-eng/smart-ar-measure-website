import { motion } from 'framer-motion';
import { Armchair, Maximize, Box, Hammer, DraftingCompass, Ruler } from 'lucide-react';

const useCases = [
  { icon: <Armchair size={24} />, title: 'Furniture Sizing', desc: 'Ensure that new couch fits perfectly in your living room before buying.' },
  { icon: <Maximize size={24} />, title: 'Room Dimensions', desc: 'Quickly measure wall lengths and floor space for planning and remodeling.' },
  { icon: <Box size={24} />, title: 'Object Sizing', desc: 'Get exact dimensions of boxes for shipping or storage without a physical tape.' },
  { icon: <Hammer size={24} />, title: 'DIY Projects', desc: 'Measure materials on the fly while working on home improvement.' },
  { icon: <DraftingCompass size={24} />, title: 'Interior Planning', desc: 'Map out space requirements for art, rugs, and decor placement.' },
  { icon: <Ruler size={24} />, title: 'Everyday Measurements', desc: 'Quickly check the size of any item you encounter in daily life.' },
];

export default function UseCases() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container-default">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-primaryText tracking-tight mb-6"
          >
            Built for <span className="text-mutedText">real-world use.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-[24px] bg-surface border border-borderDefault hover:border-borderAccent transition-colors group flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-elevated border border-borderDefault flex items-center justify-center text-primaryText mb-6 group-hover:text-accent group-hover:border-borderAccent group-hover:-translate-y-1 transition-all">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-bold text-primaryText mb-3">{useCase.title}</h3>
              <p className="text-secondaryText leading-relaxed">{useCase.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
