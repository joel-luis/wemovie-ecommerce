import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children: React.ReactNode
  hasIcon?: boolean
  isClicked?: boolean
} & ButtonTypes

export default function Button({
  children,
  hasIcon = true,
  isClicked = false,
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper {...props} isClicked={isClicked}>
      {hasIcon && (
        <S.Content>
          <S.Image src="/images/iconCart.svg" alt="Icon cart" role="image" />
          <span>{isClicked ? '1' : '0'}</span>
        </S.Content>
      )}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}
