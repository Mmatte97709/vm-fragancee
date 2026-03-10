"use client";
import { ShieldCheck } from "lucide-react";

export default function Checkout() {
  return (
    <div className="min-h-screen pt-10 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Finalizar compra</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Nombre y apellido" className="w-full bg-[#0f0f0f] border border-white/10 p-4 text-white focus:border-luxury-gold outline-none" />
        <input type="email" placeholder="Correo electrónico" className="w-full bg-[#0f0f0f] border border-white/10 p-4 text-white focus:border-luxury-gold outline-none" />
        <input type="text" placeholder="Dirección (Calle y número)" className="w-full bg-[#0f0f0f] border border-white/10 p-4 text-white focus:border-luxury-gold outline-none" />
        <select className="w-full bg-[#0f0f0f] border border-white/10 p-4 text-gray-400 focus:border-luxury-gold outline-none">
          <option value="">Seleccionar Departamento</option>
          <option value="Montevideo">Montevideo</option>
          <option value="Canelones">Canelones</option>
          <option value="Maldonado">Maldonado</option>
        </select>
        <button className="w-full bg-luxury-gold text-black py-5 font-bold tracking-[0.2em] uppercase mt-8 flex justify-center gap-2">
          <ShieldCheck /> Pagar con Mercado Pago
        </button>
      </form>
    </div>
  );
}