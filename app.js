// Dados "mock"
const PRODUCTS = [
  { id: 1, name: "Teclado Mecânico", price: 249.9 },
  { id: 2, name: "Mouse Óptico", price: 89.5 },
  { id: 3, name: "Monitor 24\"", price: 899.0 },
  { id: 4, name: "Headset Gamer", price: 199.0 },
  { id: 5, name: "Hub USB-C", price: 119.9 }
];

// Funções puras (fáceis de testar)
export function formatPrice(num) {
  // duas casas, separador de vírgula pt-BR
  return num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function filterProducts(query, list) {
  const q = query.trim().toLowerCase();
  if (!q) return list;
  return list.filter(p => p.name.toLowerCase().includes(q));
}

// UI
function render(list) {
  const ul = document.getElementById("products");
  ul.innerHTML = "";
  list.forEach(p => {
    const li = document.createElement("li");
    li.className = "card";
    li.innerHTML = `
      <h3>${p.name}</h3>
      <div class="price">${formatPrice(p.price)}</div>
    `;
    ul.appendChild(li);
  });
}
// app.js

// ... seu código ...

function init() {
  const input = document.getElementById('search');
  if (input) {
    input.addEventListener('input', () => {
      render(filterProducts(input.value, PRODUCTS));
    });
  }
}

// Só roda no navegador
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', init);
}
