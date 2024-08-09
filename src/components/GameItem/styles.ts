import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacings.small};
    margin: 0 auto ${theme.spacings.medium};
    width: 100%;
    justify-items: center;

    @media (min-width: 525px) {
      grid-template-columns: repeat(2, 1fr);
      justify-items: stretch;
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  `}
`

export const GameContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.small};
    gap: ${theme.spacings.xxsmall};
    align-items: center;
    max-width: 338px;
    width: 100%;

    @media (max-width: 524px) {
      max-width: 328px;
    }
  `}
`

export const ImageBox = styled.img`
  flex-shrink: 0;
  width: 147px;
  height: 188px;
  object-fit: cover;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
    margin: ${theme.spacings.xsmall} 0;
  `}
`

export const Price = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.darkViolet};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
  `}
`
