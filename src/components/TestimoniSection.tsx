import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimoni = [
  {
    name: 'Budi Santoso',
    role: 'Pengusaha',
    rating: 5,
    comment: 'Pelayanan Kang Rentcar luar biasa! Mobil selalu bersih dan terawat. Sudah 3 kali sewa, selalu puas. Harga terjangkau dan sopir ramah. Highly recommended buat warga Cianjur!',
    avatar: '/images/gambar 1.jpg',
    lokasi: 'Cianjur Kota',
  },
  {
    name: 'Siti Rahmawati',
    role: 'Ibu Rumah Tangga',
    rating: 5,
    comment: 'Pas mau nikahan anaknya, langsung hubungi Kang Rentcar. Mobilnya bagus, sopirnya tepat waktu banget. Harganya juga lebih murah dari tempat lain. Pokoknya recommended!',
    avatar: '/images/gambaar 2.jpg',
    lokasi: 'Pacet, Cianjur',
  },
  {
    name: 'Deden Wijaya',
    role: 'Pegawai Swasta',
    rating: 5,
    comment: 'Sewa mingguan buat perjalanan dinas ke Jakarta. Prosesnya gampang banget, cukup chat WA langsung beres. Mobilnya nyaman, AC dingin. Pasti balik lagi nih.',
    avatar: '/images/gambar 3.jpg',
    lokasi: 'Sukanagara, Cianjur',
  },
  {
    name: 'Fitri Handayani',
    role: 'Guru SMA',
    rating: 5,
    comment: 'Pakai paket wisata ke Puncak sama keluarga. Sopirnya hafal jalan dan sangat ramah sama anak-anak. Harganya reasonable banget, jauh lebih murah dari travel online. Mantap!',
    avatar: '/images/gambar 4.jpg',
    lokasi: 'Warungkondang, Cianjur',
  },
  {
    name: 'Rizal Fauzi',
    role: 'Mahasiswa',
    rating: 5,
    comment: 'Sewa untuk acara camping bareng teman. Avanzanya muat banyak barang, kondisinya masih bagus. Harganya paling murah se-Cianjur, no rekayasa! Responsnya cepet banget.',
    avatar: '/images/gambar 5.jpg',
    lokasi: 'Cibeber, Cianjur',
  },
  {
    name: 'Hj. Nenden Sari',
    role: 'Pedagang',
    rating: 5,
    comment: 'Sudah berlangganan lebih dari 2 tahun. Kang Rentcar selalu bisa diandalkan. Kalau ada keperluan mendadak pun dibantu. Semoga terus berkembang dan semakin bagus pelayanannya.',
    avatar: '/images/gambar 6.jpg',
    lokasi: 'Cugenang, Cianjur',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`}
        />
      ))}
    </div>
  );
}

export default function TestimoniSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimoni.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / testimoni.length;
      carouselRef.current.scrollTo({ left: currentIndex * cardWidth, behavior: 'smooth' });
    }
  }, [currentIndex]);

  return (
    <section ref={ref} className="py-20 sm:py-28" style={{ background: '#111111' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#00B894] text-sm font-semibold tracking-widest uppercase mb-3 bg-[#00B894]/10 px-4 py-1.5 rounded-full border border-[#00B894]/20">
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Kata Mereka tentang{' '}
            <span className="text-[#00B894]">Kang Rentcar</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Ribuan pelanggan telah mempercayakan perjalanan mereka kepada kami. Ini adalah cerita mereka.
          </p>
        </motion.div>

        {/* Desktop: Grid 3 cols */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {testimoni.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-white/8 relative group hover:border-[#00B894]/30 transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.03)' }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,184,148,0.1)' }}
            >
              <TestimoniCard t={t} />
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet: Auto-scroll carousel */}
        <div className="lg:hidden">
          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimoni.map((t) => (
              <div
                key={t.name}
                className="flex-none w-[85vw] sm:w-96 snap-start rounded-2xl border border-white/8 p-6"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <TestimoniCard t={t} />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimoni.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-6 bg-[#00B894]' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimoniCard({ t }: { t: typeof testimoni[0] }) {
  return (
    <>
      {/* Quote icon */}
      <div className="w-10 h-10 bg-[#00B894]/10 rounded-xl flex items-center justify-center mb-5">
        <Quote className="w-5 h-5 text-[#00B894]" />
      </div>

      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={t.rating} />
      </div>

      {/* Comment */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
        "{t.comment}"
      </p>

      {/* Divider */}
      <div className="h-px bg-white/8 mb-5" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-11 h-11 rounded-full object-cover border border-[#00B894]/20"
        />
        <div>
          <div className="text-white font-semibold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t.name}
          </div>
          <div className="text-gray-500 text-xs">{t.role} · {t.lokasi}</div>
        </div>
      </div>
    </>
  );
}
