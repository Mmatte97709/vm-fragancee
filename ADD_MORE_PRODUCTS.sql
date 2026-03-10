-- Agregar más productos a tu tienda
-- Copia y pega estos comandos en Supabase SQL Editor

-- Perfumes (Agrega los que quieras)
INSERT INTO products (name, brand, price_usd, description, stock) 
VALUES ('Bleu de Chanel', 'Chanel', 120.00, 'Perfume fresco y sofisticado.', 30);

INSERT INTO products (name, brand, price_usd, description, stock) 
VALUES ('Creed Aventus', 'Creed', 350.00, 'Premium, frutal y maderas.', 10);

INSERT INTO products (name, brand, price_usd, description, stock) 
VALUES ('Dior Sauvage EDP', 'Dior', 110.00, 'Clásico, fresco y duradero.', 45);

-- iPhones (Agrega más modelos)
INSERT INTO products (model, brand, storage, price_usd, description, stock) 
VALUES ('iPhone 16 Pro', 'Apple', '256GB', 999.00, 'Última generación con procesador A18 Pro.', 15);

INSERT INTO products (model, brand, storage, price_usd, description, stock) 
VALUES ('iPhone 16', 'Apple', '128GB', 799.00, 'Rápido y eficiente.', 20);

INSERT INTO products (model, brand, storage, price_usd, description, stock) 
VALUES ('iPhone 15 Pro Max', 'Apple', '512GB', 1199.00, 'Pantalla más grande y potente.', 8);