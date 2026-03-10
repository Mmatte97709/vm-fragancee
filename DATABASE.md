# Documentación de Base de Datos - VM Fragancee

## Estructura de la Base de Datos

Tu base de datos Supabase tiene las siguientes tablas:

### 1. **products** (Productos)
- `id`: UUID (identificador único)
- `name`: Nombre del producto (ej: "Sauvage")
- `model`: Modelo (ej: "iPhone 17 Pro Max")
- `brand`: Marca (ej: "Dior", "Apple")
- `category_id`: ID de categoría
- `price_usd`: Precio en USD
- `price_uyu`: Precio en UYU (se calcula automáticamente)
- `description`: Descripción del producto
- `stock`: Cantidad disponible
- `image_url`: URL de imagen
- `featured`: Si está destacado

### 2. **categories** (Categorías)
- `id`: UUID
- `name`: Nombre (ej: "Perfumes", "iPhones")
- `description`: Descripción

### 3. **store_settings** (Configuración)
- `id`: Identificador (1)
- `exchange_rate_usd_uyu`: Tasa de cambio USD a UYU

## Cómo Usar

### Agregar Productos Manuales

1. Ve a tu proyecto en [Supabase](https://supabase.com)
2. En el menú lateral, ve a **SQL Editor**
3. Copia y pega el contenido del archivo `ADD_MORE_PRODUCTS.sql`
4. Haz clic en **Run** para ejecutar

O usa el **Table Editor** directamente:
1. Ve a **Table Editor** > **products**
2. Haz clic en **Insert row**
3. Completa los campos

### Usar las Funciones de Base de Datos

En tu código, puedes usar las funciones definidas en `utils/database.ts`:

```javascript
import { getPerfumes, getIphones, getProductById } from '../utils/database';

// Obtener todos los perfumes
const perfumes = await getPerfumes();

// Obtener todos los iPhones
const iphones = await getIphones();

// Obtener un producto específico
const product = await getProductById('id-del-producto');
```

## Actualizar Tasa de Cambio

Para cambiar la tasa de cambio USD a UYU:

1. Ve a **Supabase** > **SQL Editor**
2. Ejecuta:
```sql
UPDATE store_settings SET exchange_rate_usd_uyu = 42.50 WHERE id = 1;
```

El precio en UYU se calcula automáticamente gracias al trigger.

## Archivos Relacionados

- `utils/database.ts`: Funciones para consultar la base de datos
- `utils/supabase/client.ts`: Cliente de Supabase
- `schema.sql`: Estructura inicial de la base de datos
- `ADD_MORE_PRODUCTS.sql`: Ejemplos para agregar más productos

## Notas Importantes

- Los precios en UYU se calculan automáticamente multiplicando USD por la tasa de cambio
- El stock se gestiona manualmente en Supabase
- Las imágenes se pueden agregar usando URLs externas
- Los cambios en Supabase aparecen en el sitio en tiempo real