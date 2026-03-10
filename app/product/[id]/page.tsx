"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase/client";
import { formatPrice } from "../../../utils/currency";
import { useStore } from "../../../store/useStore";
import { ShoppingCart } from "lucide-react";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null);
  const { currency } = useStore();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await supabase.from("products").select("*").eq("id", params.id).single();
      setProduct(data);
    };
    fetchProduct();
  }, [params.id]);

  if (!product) return <div className="text-white text-center mt-32">Cargando...</div>;

  return (
    <div className="min-h-screen pt-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
      <div className="bg-[#0f0f0f] border border-white/5 h-[500px] flex items-center justify-center p-12">
         {/* Acá iría la imagen */}
         <span className="text-luxury-gold font-bold tracking-widest">VM.FRAGANCEE</span>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-luxury-gold text-xs tracking-[0.3em] uppercase mb-4">{product.brand}</p>
        <h1 className="text-4xl font-bold text-white mb-6">{product.name || product.model}</h1>
        <p className="text-gray-400 font-light leading-relaxed mb-8">{product.description}</p>
        <p className="text-2xl text-luxury-gold font-light mb-4">
          {formatPrice(currency === "USD" ? product.price_usd : product.price_uyu, currency)}
        </p>
        <p className="text-green-500 text-sm tracking-widest uppercase mb-4">
           {product.stock > 0 ? 'En Stock' : 'Sin Stock'}
        </p>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}

function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useStore();

  return (
    <button
      onClick={() => addToCart(product)}
      className="w-full bg-luxury-gold text-black py-5 font-bold tracking-[0.2em] uppercase shadow-gold-glow flex justify-center gap-2"
    >
      <ShoppingCart size={20} /> Agregar al carrito
    </button>
  );
}