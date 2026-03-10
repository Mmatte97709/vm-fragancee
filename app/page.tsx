"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-luxury-black z-0" />
      <motion.div 
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        <h2 className="text-luxury-gold tracking-[0.3em] uppercase text-sm mb-4 font-semibold">
          Bienvenidos a VM.Fragancee
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          Tecnología Premium & <br/>
          <span className="text-transparent bg-clip-text bg-gold-gradient">Fragancias de Lujo</span>
        </h1>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-light">
          Descubrí los mejores perfumes del mundo y los últimos modelos de iPhone en Uruguay.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/perfumes" className="px-8 py-4 bg-luxury-gold text-black font-bold tracking-widest uppercase hover:bg-luxury-goldLight transition-all shadow-gold-glow">
            Ver Perfumes
          </Link>
          <Link href="/iphones" className="px-8 py-4 border border-luxury-gold text-luxury-gold font-bold tracking-widest uppercase hover:bg-luxury-gold hover:text-black transition-all">
            Ver iPhones
          </Link>
        </div>
      </motion.div>
    </main>
  );
}