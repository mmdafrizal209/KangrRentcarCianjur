import { motion } from 'framer-motion';
import { Car, MapPin, Phone, Mail } from 'lucide-react';
import { FaWhatsapp, FaTiktok, FaInstagram } from 'react-icons/fa';

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Armada', href: '#armada' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Paket', href: '#paket' },
  { label: 'Kontak', href: '#kontak' },
];

const services = [
  'Rental Harian Lepas Kunci',
  'Rental Mingguan / Bulanan',
  'Antar Jemput Bandara',
  'Corporate Rental',
  'Wedding Car',
  'Paket Wisata',
  'Layanan Darurat 24 Jam',
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="kontak" className="relative" style={{ background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#00B894] rounded-xl flex items-center justify-center shadow-lg shadow-[#00B894]/30">
                <Car className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-black text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Kang <span className="text-[#00B894]">Rentcar</span>
                </div>
                <div className="text-gray-500 text-xs font-medium tracking-widest uppercase">Cianjur</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Rental mobil terpercaya dan termurah di Cianjur. Melayani dengan sepenuh hati sejak 2019.
              Perjalanan Anda, tanggung jawab kami.
            </p>

            {/* Social Media */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: <FaInstagram className="text-lg" />, href: '#', label: 'Instagram', color: '#E1306C' },
                { icon: <FaWhatsapp className="text-lg" />, href: 'https://wa.me/6281234567890', label: 'WhatsApp', color: '#25D366' },
                { icon: <FaTiktok className="text-lg" />, href: '#', label: 'TikTok', color: '#ff0050' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.12, backgroundColor: `${social.color}20`, borderColor: `${social.color}50` }}
                  style={{ color: 'inherit' }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Menu
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-gray-400 hover:text-[#00B894] text-sm transition-colors duration-200 flex items-center gap-2 group"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-[#00B894] transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Layanan
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span
                    className="text-gray-400 text-sm flex items-center gap-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00B894]/50" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Kontak
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <MapPin className="w-4 h-4 text-[#00B894] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Jl. Raya Cianjur No. 123, Kab. Cianjur, Jawa Barat 43200</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#00B894] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Phone className="w-4 h-4 text-[#00B894] flex-shrink-0" />
                  <span className="text-sm">+62 812-3456-7890</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kangrentcar.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#00B894] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Mail className="w-4 h-4 text-[#00B894] flex-shrink-0" />
                  <span className="text-sm">info@kangrentcar.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-400">
                  <FaInstagram className="w-4 h-4 text-[#00B894] flex-shrink-0" />
                  <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>@kangrentcar.cianjur</span>
                </div>
              </li>
            </ul>

            {/* Hours */}
            <div className="mt-6 p-4 rounded-xl border border-[#00B894]/20 bg-[#00B894]/5">
              <p className="text-[#00B894] text-xs font-bold uppercase tracking-wider mb-2">Jam Operasional</p>
              <p className="text-gray-300 text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                Senin – Minggu: 24 Jam
              </p>
              <p className="text-gray-500 text-xs mt-1">Termasuk hari libur nasional</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2025 <span className="text-[#00B894] font-semibold">Kang Rentcar Cianjur</span>. Semua hak dilindungi.
          </p>
          <div className="flex gap-6">
            {['Kebijakan Privasi', 'Syarat & Ketentuan'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 hover:text-gray-400 text-xs transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
