"use client";

import Link from "next/link";
import { ShoppingBag, Search } from "lucide-react";
import { useStore } from "../store/useStore";

export default function Header() {
  const { currency, setCurrency } = useStore();

  return (
    <header className="fixed top-0 w-full z-50 bg-luxury-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-widest text-white">
          VM.<span className="text-luxury-gold">FRAGANCEE</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-xs tracking-widest uppercase font-semibold text-gray-400">
          <Link href="/" className="hover:text-luxury-gold transition-colors">Inicio</Link>
          <Link href="/perfumes" className="hover:text-luxury-gold transition-colors">Perfumes</Link>
          <Link href="/iphones" className="hover:text-luxury-gold transition-colors">iPhones</Link>
        </nav>
        <div className="flex items-center gap-6">
          <div className="flex bg-white/5 rounded p-1 border border-white/10">
            <button onClick={() => setCurrency("UYU")} className={`px-3 py-1 text-xs font-bold rounded ${currency === "UYU" ? "bg-luxury-gold text-black" : "text-gray-500"}`}>UYU</button>
            <button onClick={() => setCurrency("USD")} className={`px-3 py-1 text-xs font-bold rounded ${currency === "USD" ? "bg-luxury-gold text-black" : "text-gray-500"}`}>USD</button>
          </div>
          <button className="text-white hover:text-luxury-gold"><Search size={20} /></button>
          <Link href="/checkout" className="text-white hover:text-luxury-gold relative">
            <ShoppingBag size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}