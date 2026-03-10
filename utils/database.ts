import { supabase } from './supabase/client';

export interface Product {
  id: string;
  name?: string;
  model?: string;
  brand: string;
  price_usd: number;
  price_uyu?: number;
  description?: string;
  stock: number;
  image_url?: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
}

// Obtener todos los productos
export async function getProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw new Error(error.message);
  return data as Product[];
}

// Obtener productos por categoría
export async function getProductsByCategory(categoryName: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .ilike('category_id', `%${categoryName}%`)
    .order('created_at', { ascending: false });
  
  if (error) throw new Error(error.message);
  return data as Product[];
}

// Obtener perfumes (no Apple)
export async function getPerfumes() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .neq('brand', 'Apple')
    .order('created_at', { ascending: false });
  
  if (error) throw new Error(error.message);
  return data as Product[];
}

// Obtener iPhones (Apple)
export async function getIphones() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('brand', 'Apple')
    .order('created_at', { ascending: false });
  
  if (error) throw new Error(error.message);
  return data as Product[];
}

// Obtener producto por ID
export async function getProductById(id: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) throw new Error(error.message);
  return data as Product;
}

// Obtener todas las categorías
export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name', { ascending: true });
  
  if (error) throw new Error(error.message);
  return data as Category[];
}

// Obtener tasa de cambio
export async function getExchangeRate() {
  const { data, error } = await supabase
    .from('store_settings')
    .select('exchange_rate_usd_uyu')
    .eq('id', 1)
    .single();
  
  if (error) throw new Error(error.message);
  return data?.exchange_rate_usd_uyu || 40;
}