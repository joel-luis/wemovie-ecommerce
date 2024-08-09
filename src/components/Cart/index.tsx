import { useCart } from 'contexts/CartContext'
import * as S from './styles'

export default function Cart() {
  const { cartItems, toggleCartVisibility } = useCart()

  return (
    <>
      <S.Wrapper>
        <S.Content>
          <span>Meu Carrinho</span>
          <span>{cartItems.length} itens</span>
        </S.Content>
        <S.Image
          src="/images/shoppingCart.svg"
          alt="Icon shopping cart"
          role="image"
          onClick={toggleCartVisibility}
        />
      </S.Wrapper>
    </>
  )
}
