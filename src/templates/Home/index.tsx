import Header from 'components/Header'
import GameItem from 'components/GameItem'
import CartItems from 'components/CartItems'
import { useCart } from 'contexts/CartContext'
import * as S from './styles'

export default function Home() {
  const { showCart } = useCart()
  return (
    <S.Wrapper>
      <Header />
      {showCart ? <CartItems /> : <GameItem />}
    </S.Wrapper>
  )
}
