import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "VM.Fragancee | Perfumes Originales y iPhone en Uruguay",
  description: "Descubrí la mejor selección de perfumes de diseñador, árabes y Apple iPhone en Uruguay.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-UY">
      <body className="bg-luxury-black text-white antialiased">
        <Header />
        <div className="bg-luxury-gold text-black text-[10px] md:text-xs font-bold tracking-widest text-center py-2 mt-20 uppercase">
          Envíos a todo Uruguay | Garantía incluida | Productos 100% originales
        </div>
        {children}
      </body>
    </html>
  );
}