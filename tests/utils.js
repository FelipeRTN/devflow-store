// utils.js
export function filterProducts(search, products) {
  return products.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase())
  );
}