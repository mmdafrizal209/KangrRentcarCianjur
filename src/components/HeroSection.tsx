import { motion } from 'framer-motion';
import { MessageCircle, ChevronRight, Star, Car } from 'lucide-react';

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: 'easeOut' as const },
  },
});

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #080808 0%, #1a1a1a 45%, #0a2419 100%)' }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#00B894]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#00B894]/5 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#00B894 1px, transparent 1px), linear-gradient(90deg, #00B894 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <svg viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M600 0 L200 800" stroke="#00B894" strokeWidth="1" opacity="0.3" />
            <path d="M550 0 L150 800" stroke="#00B894" strokeWidth="1" opacity="0.2" />
            <path d="M650 0 L250 800" stroke="#00B894" strokeWidth="1" opacity="0.15" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-20 pointer-events-none">
            <div className="pointer-events-auto">

            {/* Badge */}
            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-[#00B894]/10 border border-[#00B894]/30 rounded-full px-4 py-2"
            >
              <span className="w-2 h-2 bg-[#00B894] rounded-full animate-pulse" />
              <span className="text-[#00B894] text-sm font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                #1 Rental Terpercaya di Cianjur
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp(0.2)} initial="hidden" animate="visible">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Rental Mobil{' '}
                <span className="text-[#00B894]">Terpercaya</span>
                {' '}& Termurah
                <br />
                <span className="text-gray-300 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">Se-Cianjur</span>
              </h1>
            </motion.div>

            {/* Sub-headline */}
            <motion.div variants={fadeUp(0.35)} initial="hidden" animate="visible" className="space-y-3">
              <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                Perjalanan nyaman, aman, dan hemat bersama armada terbaik kami.
              </p>

            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp(0.5)} initial="hidden" animate="visible" className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#00B894] hover:bg-[#00916e] text-white font-bold px-8 py-4 rounded-2xl text-base sm:text-lg transition-all duration-300 shadow-2xl shadow-[#00B894]/40 group"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <MessageCircle className="w-5 h-5" />
                Book via WhatsApp
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#armada"
                onClick={(e) => { e.preventDefault(); document.querySelector('#armada')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="flex items-center justify-center gap-2 border-2 border-[#00B894] text-[#00B894] hover:bg-[#00B894] hover:text-white font-bold px-8 py-4 rounded-2xl text-base sm:text-lg transition-all duration-300 group"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <Car className="w-5 h-5" />
                Lihat Armada
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={fadeUp(0.65)} initial="hidden" animate="visible" className="flex items-center gap-6 pt-2 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white font-bold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>4.9/5</span>
                <span className="text-gray-400 text-sm">(500+ ulasan)</span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#00B894]/20 rounded-full flex items-center justify-center">
                  <Car className="w-3 h-3 text-[#00B894]" />
                </div>
                <span className="text-gray-300 text-sm font-medium">50+ Unit Armada</span>
              </div>
            </motion.div>
            </div>
          </div>

          {/* Right — Car Image */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="relative flex items-center justify-center lg:scale-[1.9] lg:translate-x-4 lg:translate-y-12 mt-12 lg:mt-0"
          >
            <div className="absolute inset-0 bg-[#00B894]/20 rounded-full blur-[100px] scale-90" />

            {/* Car image with true transparency */}
            <div className="w-full flex justify-end">
              <motion.img
                src="/images/avanza-nobg.png"
                alt="Armada Kang Rentcar Cianjur"
                className="w-[110%] max-w-none drop-shadow-2xl"
                style={{ filter: 'brightness(0.85)' }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#00B894] to-transparent" />
      </motion.div>
    </section>
  );
}
