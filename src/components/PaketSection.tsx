import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const pakets = [
  {
    name: 'Paket 4 Hari',
    duration: '4 Hari',
    price: '250.000',
    priceNote: '/hari',
    bonus: 'Free 1x Cuci Mobil',
    features: [
      'Bebas pilih armada',
      'Dengan atau tanpa sopir',
      'BBM tanggungan penyewa',
      'Asuransi perjalanan',
      'Layanan 24 jam',
    ],
    popular: false,
    color: '#00B894',
    gradient: 'from-[#00B894]/10 to-transparent',
  },
  {
    name: 'Paket 7 Hari',
    duration: '7 Hari',
    price: '230.000',
    priceNote: '/hari',
    bonus: 'Free 2x Cuci Mobil',
    features: [
      'Bebas pilih armada',
      'Dengan atau tanpa sopir',
      'BBM tanggungan penyewa',
      'Asuransi perjalanan',
      'Layanan 24 jam',
      'Diskon 8% harga normal',
    ],
    popular: true,
    color: '#00B894',
    gradient: 'from-[#00B894]/20 to-[#00B894]/5',
  },
  {
    name: 'Paket 10 Hari',
    duration: '10 Hari',
    price: '210.000',
    priceNote: '/hari',
    bonus: 'Free 4x Cuci Mobil',
    features: [
      'Bebas pilih armada',
      'Dengan atau tanpa sopir',
      'BBM tanggungan penyewa',
      'Asuransi perjalanan',
      'Layanan 24 jam',
      'Diskon 16% harga normal',
      'Priority support',
    ],
    popular: false,
    color: '#00B894',
    gradient: 'from-[#00B894]/10 to-transparent',
  },
];

export default function PaketSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="paket" ref={ref} className="py-20 sm:py-28" style={{ background: '#1a1a1a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#00B894] text-sm font-semibold tracking-widest uppercase mb-3 bg-[#00B894]/10 px-4 py-1.5 rounded-full border border-[#00B894]/20">
            Paket Spesial
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Paket Hemat{' '}
            <span className="text-[#00B894]">Spesial</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Semakin lama sewa, semakin hemat biaya! Pilih paket yang sesuai kebutuhan perjalanan Anda.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pakets.map((paket, index) => (
            <motion.div
              key={paket.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
              className={`relative rounded-3xl overflow-hidden flex flex-col ${
                paket.popular
                  ? 'ring-2 ring-[#00B894] shadow-2xl shadow-[#00B894]/20 scale-105'
                  : 'border border-white/8'
              }`}
              style={{ background: paket.popular ? '#0d1f1a' : 'rgba(255,255,255,0.02)' }}
              whileHover={{ y: paket.popular ? -4 : -8, transition: { duration: 0.3 } }}
            >
              {/* Popular badge */}
              {paket.popular && (
                <div className="absolute top-0 left-0 right-0 bg-[#00B894] text-white text-center text-xs font-bold py-2 tracking-widest uppercase flex items-center justify-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  PALING POPULER
                  <Zap className="w-3.5 h-3.5" />
                </div>
              )}

              <div className={`p-7 flex flex-col flex-1 ${paket.popular ? 'pt-12' : ''}`}>
                {/* Top section */}
                <div className="mb-8">
                  <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {paket.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-5">Minimum {paket.duration} sewa</p>

                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-gray-400 text-lg font-medium">Rp</span>
                    <span className="text-4xl font-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {paket.price}
                    </span>
                    <span className="text-gray-400 text-sm mb-1">{paket.priceNote}</span>
                  </div>

                  {/* Bonus badge */}
                  <div className="inline-flex items-center gap-2 bg-[#00B894]/15 border border-[#00B894]/30 rounded-xl px-4 py-2">
                    <span className="text-[#00B894] text-sm font-bold">🎁 {paket.bonus}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/8 mb-6" />

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {paket.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#00B894]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#00B894]" />
                      </div>
                      <span className="text-gray-300 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center font-bold py-4 rounded-2xl text-base transition-all duration-300 ${
                    paket.popular
                      ? 'bg-[#00B894] hover:bg-[#00916e] text-white shadow-lg shadow-[#00B894]/30'
                      : 'bg-white/5 hover:bg-[#00B894] text-white border border-white/10 hover:border-[#00B894]'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ fontFamily: 'Poppins, sans-serif', display: 'block' }}
                >
                  Pesan Sekarang
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-gray-500 text-sm mt-10"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          * Harga di atas merupakan harga dasar untuk Toyota Avanza / Xenia. Harga dapat berbeda untuk armada lainnya.
          <br />Hubungi kami untuk penawaran spesial dan custom package.
        </motion.p>
      </div>
    </section>
  );
}
