import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Calendar, CreditCard, Car } from 'lucide-react';

const steps = [
  {
    icon: <MessageCircle className="w-7 h-7" />,
    step: '01',
    title: 'Hubungi via WhatsApp',
    desc: 'Chat kami langsung di WhatsApp. Tim kami responsif dan siap membantu 24 jam sehari.',
    color: '#25D366',
  },
  {
    icon: <Calendar className="w-7 h-7" />,
    step: '02',
    title: 'Pilih Armada & Tanggal',
    desc: 'Diskusikan pilihan kendaraan, tanggal sewa, tujuan, dan layanan tambahan yang Anda butuhkan.',
    color: '#0984e3',
  },
  {
    icon: <CreditCard className="w-7 h-7" />,
    step: '03',
    title: 'Konfirmasi & Pembayaran',
    desc: 'Konfirmasi pemesanan dan lakukan pembayaran via transfer bank, e-wallet, atau tunai di tempat.',
    color: '#6c5ce7',
  },
  {
    icon: <Car className="w-7 h-7" />,
    step: '04',
    title: 'Kendaraan Siap!',
    desc: 'Kendaraan akan diantarkan ke lokasi Anda atau bisa diambil langsung di pool kami di Cianjur.',
    color: '#00B894',
  },
];

export default function CaraBookingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="booking" ref={ref} className="py-20 sm:py-28" style={{ background: '#1a1a1a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#00B894] text-sm font-semibold tracking-widest uppercase mb-3 bg-[#00B894]/10 px-4 py-1.5 rounded-full border border-[#00B894]/20">
            Cara Booking
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Mudah, Cepat,{' '}
            <span className="text-[#00B894]">4 Langkah</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Proses booking yang simpel dan transparan. Kendaraan impian Anda siap dalam hitungan menit.
          </p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-white/8 z-0" />
            <motion.div
              className="absolute top-10 left-[12.5%] h-0.5 bg-[#00B894] z-0"
              initial={{ width: '0%' }}
              animate={inView ? { width: '75%' } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
            />

            <div className="grid grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step circle */}
                  <motion.div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-white relative"
                    style={{ background: `${step.color}20`, border: `2px solid ${step.color}40` }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={inView ? { boxShadow: [`0 0 0px ${step.color}00`, `0 0 30px ${step.color}40`, `0 0 0px ${step.color}00`] } : {}}
                    transition={{ duration: 2, delay: index * 0.5, repeat: Infinity }}
                  >
                    <div style={{ color: step.color }}>{step.icon}</div>
                    <div
                      className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-black"
                      style={{ background: step.color, fontFamily: 'Poppins, sans-serif' }}
                    >
                      {index + 1}
                    </div>
                  </motion.div>

                  <h3 className="text-white font-bold text-base mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Steps */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
              className="flex gap-5 items-start"
            >
              {/* Left: number + line */}
              <div className="flex flex-col items-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: `${step.color}20`, border: `2px solid ${step.color}40` }}
                >
                  <div style={{ color: step.color }}>{step.icon}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-12 mt-2" style={{ background: `linear-gradient(to bottom, ${step.color}, transparent)` }} />
                )}
              </div>

              {/* Content */}
              <div className="pt-2 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${step.color}20`, color: step.color }}>
                    Langkah {index + 1}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#00B894] hover:bg-[#00916e] text-white font-bold px-10 py-4 rounded-2xl text-lg transition-all duration-300 shadow-2xl shadow-[#00B894]/30"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <MessageCircle className="w-5 h-5" />
            Mulai Booking Sekarang
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
