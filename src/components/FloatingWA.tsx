import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { X } from 'lucide-react';

export default function FloatingWA() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="bg-[#111] border border-white/10 rounded-2xl p-4 shadow-2xl w-64"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#25D366]/20 rounded-full flex items-center justify-center">
                <FaWhatsapp className="text-[#25D366] text-xl" />
              </div>
              <div>
                <p className="text-white font-bold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Kang Rentcar
                </p>
                <p className="text-[#25D366] text-xs">● Online</p>
              </div>
            </div>
            <p className="text-gray-300 text-xs mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Halo! Ada yang bisa kami bantu? Chat sekarang untuk info dan booking kendaraan 🚗
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Kang%20Rentcar%2C%20saya%20ingin%20info%20rental%20mobil."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-2.5 rounded-xl text-sm transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Mulai Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        onClick={() => setShowTooltip(!showTooltip)}
        className="w-16 h-16 bg-[#25D366] hover:bg-[#20b858] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      >
        {/* Ping animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <FaWhatsapp className="text-white text-3xl relative z-10" />
      </motion.button>
    </div>
  );
}
