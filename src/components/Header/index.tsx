import Cart from 'components/Cart'
import * as S from './styles'

export default function Header() {
  return (
    <S.Content>
      <span>WeMovies</span>
      <Cart />
    </S.Content>
  )
}
