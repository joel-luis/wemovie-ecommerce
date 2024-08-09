import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: ${theme.colors.white};
    gap: ${theme.spacings.small};
    padding: ${theme.spacings.medium};
    width: 100%;
    height: 516px;
    border-radius: ${theme.border.radius};
    margin-bottom: ${theme.spacings.medium};
    justify-content: center;
    margin: 0 auto;

    @media (min-width: 1024px) {
      height: 100vh;
      max-height: 596px;
    }

    button {
      width: 300px;
    }
  `}
`

export const Image = styled.img`
  max-width: 100%;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.darkViolet};
    font-size: ${theme.font.sizes.large};
  `}
`
