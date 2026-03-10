# VM Fragancee

Tienda en línea de perfumes y iPhones.

## Configuración

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Configura Supabase:
   - Crea un proyecto en [Supabase](https://supabase.com)
   - Ejecuta el schema.sql en el SQL Editor de Supabase
   - Copia la URL y la clave anónima en .env.local

3. Ejecuta en desarrollo:
   ```bash
   npm run dev
   ```

## Despliegue Gratuito

- **Base de datos**: Supabase (gratuito hasta ciertos límites)
- **Hosting**: Vercel (gratuito)
  - Conecta tu repo de GitHub a Vercel
  - Agrega las variables de entorno en Vercel
  - Despliega

## Funcionalidades

- Catálogo de perfumes e iPhones
- Cambio de moneda (UYU/USD)
- Carrito básico
- Páginas de producto y checkout