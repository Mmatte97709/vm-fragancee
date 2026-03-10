export const formatPrice = (price: number, currency: "UYU" | "USD"): string => {
  const formattedNumber = new Intl.NumberFormat("es-UY", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
  return `$ ${formattedNumber} ${currency}`;
};