export const formatPrice = (price: string | number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(typeof price === 'string' ? parseFloat(price) : price)
}
