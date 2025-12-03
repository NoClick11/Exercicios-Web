const faturas = [
  { cliente: "Empresa A", valor: 1500.00 },
  { cliente: "Empresa B", valor: 3200.50 },
  { cliente: "Empresa C", valor: 500.00 },
  { cliente: "Empresa D", valor: 5000.00 },
  { cliente: "Empresa E", valor: 2100.00 }
];

const faturasFiltradas = faturas.filter((faturas) => {
    return faturas.valor > 2000
})

console.log(faturasFiltradas)