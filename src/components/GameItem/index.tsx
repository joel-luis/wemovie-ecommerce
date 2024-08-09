import * as S from './styles'
import Button from 'components/Button'
import Empty from 'components/Empty'
import Loading from 'components/Loading'
import { useCart } from 'contexts/CartContext'
import { useEffect, useState } from 'react'
import { formatPrice } from 'utils/formatePrice'

export type GameInfo = {
  id: number
  image: string
  title: string
  price: string
}

export default function GameItem() {
  const [gameItems, setGameItems] = useState<GameInfo[]>([])
  const [loading, setLoading] = useState(true)
  const { clickedButtons, handleButtonClick, showCart } = useCart()

  useEffect(() => {
    const fetchGameItems = async () => {
      try {
        const res = await fetch('https://wefit-movies.vercel.app/api/movies')
        const data = await res.json()
        const formattedItems = data.products.map(
          ({ id, image, price, title }: GameInfo) => ({
            id,
            image,
            title,
            price,
          }),
        )
        setGameItems(formattedItems)
      } catch (error) {
        console.error('Failed to fetch game items:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGameItems()
  }, [])

  if (showCart) return null

  if (loading) return <Loading />

  if (gameItems.length === 0) return <Empty />

  return (
    <S.Wrapper>
      {gameItems.map((game: GameInfo) => (
        <S.GameContent key={game.id}>
          <S.ImageBox src={game.image} alt={game.title} />
          <S.Title>{game.title}</S.Title>
          <S.Price>{formatPrice(game.price)}</S.Price>
          <Button
            onClick={() => handleButtonClick(game)}
            isClicked={clickedButtons.includes(game.id)}
          >
            ADICIONAR AO CARRINHO
          </Button>
        </S.GameContent>
      ))}
    </S.Wrapper>
  )
}
