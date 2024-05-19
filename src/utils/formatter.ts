export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const priceFromatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency', // colocando R$ e centavos ,00
  currency: 'BRL',
})
