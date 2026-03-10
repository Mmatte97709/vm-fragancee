"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabase/client";
import { useStore } from "../../store/useStore";
import { formatPrice } from "../../utils/currency";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function Iphones() {
  const [products, setProducts] = useState<any[]>([]);
  const { currency } = useStore();

  useEffect(() => {
    const fetchIphones = async () => {
      const { data } = await supabase.from("products").select("*").eq("brand", "Apple");
      if (data) setProducts(data);
    };
    fetchIphones();
  }, []);

  return (
    <div className="min-h-screen pt-10 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">Nuestros <span className="text-luxury-gold">iPhones</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {products.map((p) => (
          <div key={p.id} className="bg-[#0f0f0f] border border-white/5 p-6 hover:border-luxury-gold/50 transition-all flex flex-col">
            <h4 className="text-lg font-bold text-white">{p.model || p.name}</h4>
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">{p.storage}</p>
            <p className="text-2xl text-luxury-gold font-light mb-4">
              {formatPrice(currency === "USD" ? p.price_usd : p.price_uyu, currency)}
            </p>
            <Link href={`/product/${p.id}`} className="mt-auto w-full py-3 bg-white/5 border border-white/10 text-white hover:bg-luxury-gold hover:text-black flex justify-center gap-2 uppercase text-xs font-bold transition-all">
              <ShoppingBag size={16} /> Ver Producto
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}