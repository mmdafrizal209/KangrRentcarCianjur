import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Fuel, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';


const armada = [
  {
    img: '/images/avanza.png',
    name: 'Toyota Avanza',
    type: 'MPV',
    kapasitas: '7 Penumpang',
    bbm: 'Bensin',
    harga: '250.000',
    tersedia: true,
    badge: null,
  },
  {
    img: '/images/xenia.jpg',
    name: 'Daihatsu Xenia',
    type: 'MPV',
    kapasitas: '7 Penumpang',
    bbm: 'Bensin',
    harga: '250.000',
    tersedia: true,
    badge: null,
  },
  {
    img: '/images/rocky.jpg',
    name: 'Daihatsu Rocky',
    type: 'Compact SUV',
    kapasitas: '5 Penumpang',
    bbm: 'Bensin',
    harga: '300.000',
    tersedia: true,
    badge: '🔥 Favorit',
  },
  {
    img: '/images/innova.jpg',
    name: 'Toyota Innova',
    type: 'MPV Premium',
    kapasitas: '7 Penumpang',
    bbm: 'Diesel',
    harga: '450.000',
    tersedia: true,
    badge: '⭐ Premium',
  },
  {
    img: '/images/hrv.jpg',
    name: 'Honda HR-V',
    type: 'SUV',
    kapasitas: '5 Penumpang',
    bbm: 'Bensin',
    harga: '400.000',
    tersedia: false,
    badge: null,
  },
];

export default function ArmadaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const scrollRef = useRef<HTMLDivElement>(null);


  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = 320;
      scrollRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
    }
  };

  return (
    <section id="armada" ref={ref} className="py-20 sm:py-28" style={{ background: '#111111' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-block text-[#00B894] text-sm font-semibold tracking-widest uppercase mb-3 bg-[#00B894]/10 px-4 py-1.5 rounded-full border border-[#00B894]/20">
              Armada Kami
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Pilih Kendaraan{' '}
              <span className="text-[#00B894]">Idamanmu</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-[#00B894] hover:border-[#00B894] flex items-center justify-center text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-[#00B894] hover:border-[#00B894] flex items-center justify-center text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Carousel — mobile horizontal scroll, desktop grid */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {armada.map((car, index) => (
              <motion.div
                key={car.name}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none w-72 snap-start rounded-2xl overflow-hidden border border-white/8"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 xl:grid-cols-5 gap-6">
          {armada.map((car, index) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden border border-white/8 group cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.03)' }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,184,148,0.15)' }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CarCard({ car }: { car: typeof armada[0] }) {
  return (
    <>
      {/* Image */}
      <div className="relative h-44 bg-gradient-to-br from-[#1a1a1a] to-[#0d1a1a] overflow-hidden">
        <img
          src={car.img}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badge */}
        {car.badge && (
          <div className="absolute top-3 left-3 bg-[#1a1a1a]/80 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">
            {car.badge}
          </div>
        )}
        {/* Availability */}
        <div className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${car.tersedia ? 'bg-[#00B894]/20 text-[#00B894] border border-[#00B894]/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
          {car.tersedia ? '● Tersedia' : '● Tidak Tersedia'}
        </div>
        {/* Type tag */}
        <div className="absolute bottom-3 left-3 text-xs text-gray-400 bg-black/50 backdrop-blur px-2 py-0.5 rounded">
          {car.type}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-white font-bold text-base mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {car.name}
        </h3>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5 text-gray-400 text-xs">
            <Users className="w-3.5 h-3.5 text-[#00B894]" />
            <span>{car.kapasitas}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-400 text-xs">
            <Fuel className="w-3.5 h-3.5 text-[#00B894]" />
            <span>{car.bbm}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-500 text-xs">Mulai dari</span>
            <div className="text-[#00B894] font-black text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Rp {car.harga}<span className="text-gray-400 text-xs font-normal">/hari</span>
            </div>
          </div>
          <motion.a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#00B894] hover:bg-[#00916e] text-white text-xs font-bold px-3 py-2 rounded-xl transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Booking
          </motion.a>
        </div>
      </div>
    </>
  );
}
