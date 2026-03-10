CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT
);

CREATE TABLE store_settings (
  id INT PRIMARY KEY DEFAULT 1,
  exchange_rate_usd_uyu DECIMAL(10, 2) DEFAULT 40.00
);

INSERT INTO store_settings (id, exchange_rate_usd_uyu) VALUES (1, 40.00);

CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255),
  model VARCHAR(100),
  category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  brand VARCHAR(100),
  gender VARCHAR(50) DEFAULT 'unisex',
  storage VARCHAR(50),
  price_usd DECIMAL(12, 2) NOT NULL,
  price_uyu DECIMAL(12, 2),
  description TEXT,
  image_url TEXT,
  stock INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT FALSE
);

CREATE OR REPLACE FUNCTION calculate_price_uyu()
RETURNS TRIGGER AS $$
DECLARE
  current_rate DECIMAL(10, 2);
BEGIN
  SELECT exchange_rate_usd_uyu INTO current_rate FROM store_settings WHERE id = 1;
  NEW.price_uyu := NEW.price_usd * current_rate;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_calculate_price_uyu
BEFORE INSERT OR UPDATE OF price_usd ON products
FOR EACH ROW
EXECUTE FUNCTION calculate_price_uyu();

-- Insertar Categorías Base
INSERT INTO categories (name) VALUES ('Perfumes'), ('iPhones');

-- EJEMPLOS DE PRODUCTOS (Agrega más guiándote de acá)
INSERT INTO products (name, brand, price_usd, description, stock) 
VALUES ('Sauvage', 'Dior', 145.00, 'Perfume fresco y maderoso.', 50);

INSERT INTO products (name, brand, price_usd, description, stock) 
VALUES ('Club de Nuit Intense', 'Armaf', 55.00, 'El mejor perfume árabe.', 80);

INSERT INTO products (model, brand, storage, price_usd, description, stock) 
VALUES ('iPhone 17 Pro Max', 'Apple', '256GB', 1450.00, 'El mejor iPhone del 2026.', 20);