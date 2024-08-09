import Button from 'components/Button'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import * as S from './styles'

export default function Empty() {
  const router = useRouter()
  return (
    <S.Wrapper>
      <S.Title>Parece que não há nada por aqui :(</S.Title>
      <S.Image
        src="/images/empty.svg"
        alt="A game in a couch playing videogame"
        role="image"
      />
      <Link href="/" passHref>
        <Button onClick={() => router.refresh()} hasIcon={false}>
          Recarregar página
        </Button>
      </Link>
    </S.Wrapper>
  )
}
