import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { Phone, Clock, MapPin } from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a2419 0%, #1a1a1a 50%, #0a2419 100%)' }}
    >
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00B894]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00B894]/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#00B894 1px, transparent 1px), linear-gradient(90deg, #00B894 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Badge */}
          <span className="inline-block text-[#00B894] text-sm font-semibold tracking-widest uppercase bg-[#00B894]/10 px-4 py-1.5 rounded-full border border-[#00B894]/20">
            Hubungi Kami
          </span>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Siap Perjalanan?
            <br />
            <span className="text-[#00B894]">Hubungi Kami</span> Sekarang!
          </h2>

          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Tim kami siap membantu 24 jam sehari, 7 hari seminggu. Dapatkan penawaran terbaik dan kendaraan siap dalam hitungan menit.
          </p>

          {/* Info chips */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: <Clock className="w-4 h-4" />, text: 'Respons dalam 5 menit' },
              { icon: <Phone className="w-4 h-4" />, text: 'Layanan 24/7' },
              { icon: <MapPin className="w-4 h-4" />, text: 'Antar ke seluruh Cianjur' },
            ].map((chip) => (
              <div
                key={chip.text}
                className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 border border-white/10 rounded-full px-4 py-2"
              >
                <span className="text-[#00B894]">{chip.icon}</span>
                {chip.text}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="https://wa.me/6281234567890?text=Halo%20Kang%20Rentcar%2C%20saya%20ingin%20info%20rental%20mobil."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#20b858] text-white font-black px-10 py-5 rounded-2xl text-xl transition-all duration-300 shadow-2xl shadow-[#25D366]/30 group"
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.97 }}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <FaWhatsapp className="text-2xl" />
            Chat WhatsApp Sekarang
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </motion.a>

          {/* Phone number display */}
          <p className="text-gray-500 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            Atau telepon langsung:{' '}
            <a href="tel:+6281234567890" className="text-[#00B894] font-semibold hover:underline">
              +62 812-3456-7890
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
