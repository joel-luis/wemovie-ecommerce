import Button from 'components/Button'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import * as S from './styles'

export default function Success() {
  const router = useRouter()
  return (
    <S.Wrapper>
      <S.Title>Compra realizada com sucesso!</S.Title>
      <S.Image
        src="/images/success.svg"
        alt="A game in a couch playing videogame"
        role="image"
      />
      <Link href="/" passHref>
        <Button onClick={() => router.refresh()} hasIcon={false}>
          VOLTAR
        </Button>
      </Link>
    </S.Wrapper>
  )
}
