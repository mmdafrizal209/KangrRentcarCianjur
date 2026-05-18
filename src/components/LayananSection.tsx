import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    emoji: '🚗',
    title: 'Rental Harian Lepas Kunci',
    desc: 'Nikmati kebebasan berkendara dengan paket harian. Sewa kendaraan dengan atau tanpa sopir sesuai kebutuhan Anda.',
    color: '#00B894',
  },
  {
    emoji: '📅',
    title: 'Rental Mingguan / Bulanan',
    desc: 'Hemat lebih banyak dengan paket jangka panjang. Ideal untuk kebutuhan bisnis atau perjalanan extended trip.',
    color: '#0984e3',
  },
  {
    emoji: '✈️',
    title: 'Antar Jemput Bandara / Stasiun',
    desc: 'Layanan jemput & antar ke Bandara Soekarno-Hatta, Halim, Stasiun Cianjur, dan Bogor tepat waktu.',
    color: '#6c5ce7',
  },
  {
    emoji: '🏢',
    title: 'Corporate Rental',
    desc: 'Solusi transportasi profesional untuk perusahaan Anda. Fleet management dengan layanan premium dan kontrak fleksibel.',
    color: '#e17055',
  },
  {
    emoji: '💒',
    title: 'Wedding Car',
    desc: 'Jadikan momen pernikahan Anda semakin berkesan dengan armada mewah dan dekorasi eksklusif pilihan kami.',
    color: '#fd79a8',
  },
  {
    emoji: '🌴',
    title: 'Paket Wisata',
    desc: 'Eksplorasi keindahan alam Cianjur dan sekitarnya dengan guide berpengalaman dan kendaraan nyaman.',
    color: '#00cec9',
  },
  {
    emoji: '🚨',
    title: 'Layanan Darurat',
    desc: 'Kendaraan mogok? Butuh mobil pengganti segera? Tim kami siap 24 jam untuk situasi darurat Anda.',
    color: '#fdcb6e',
  },
];

export default function LayananSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="layanan" ref={ref} className="py-20 sm:py-28" style={{ background: '#111111' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#00B894] text-sm font-semibold tracking-widest uppercase mb-3 bg-[#00B894]/10 px-4 py-1.5 rounded-full border border-[#00B894]/20">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Solusi Transportasi{' '}
            <span className="text-[#00B894]">Lengkap</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Dari harian hingga bulanan, dari wisata hingga corporate — kami punya solusi terbaik untuk setiap kebutuhan mobilitas Anda.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              className={`group relative p-6 rounded-2xl border border-white/5 cursor-pointer overflow-hidden card-hover ${
                index === 6 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ background: 'rgba(255,255,255,0.03)' }}
              whileHover={{ y: -8 }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at top left, ${service.color}15, transparent 70%)` }}
              />
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
              />

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${service.color}20`, border: `1px solid ${service.color}30` }}
              >
                {service.emoji}
              </div>

              <h3
                className="text-white font-bold text-lg mb-3 group-hover:text-[#00B894] transition-colors duration-300"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                {service.desc}
              </p>

              <div className="mt-5 flex items-center gap-2 text-[#00B894] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Pelajari lebih lanjut</span>
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
