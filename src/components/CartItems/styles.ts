import styled, { css } from 'styled-components'

export const Cart = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};

    @media (min-width: 525px) {
      padding: ${theme.spacings.medium};
    }
  `}
`

export const CartItem = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 64px 1fr auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      'image details remove'
      'image info info';
    align-items: center;
    border-radius: ${theme.border.radius};
    gap: ${theme.spacings.small};
    padding: 0 0 ${theme.spacings.medium};

    @media (min-width: 525px) {
      grid-template-columns: 91px 1fr auto;
      grid-template-areas: 'image details remove info';
      grid-template-rows: 1fr;
    }
  `}
`

export const Image = styled.img`
  grid-area: image;
  width: 64px;
  height: 82px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;

  @media (min-width: 525px) {
    width: 91px;
    height: 114px;
  }
`

export const Title = styled.div`
  grid-area: details;
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.darkViolet};
    margin: 0 0 ${theme.spacings.xsmall};

    @media (min-width: 525px) {
      flex-direction: column;
      align-items: flex-start;
    }
  `}
`

export const Price = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.darkViolet};
    font-weight: ${theme.font.bold};
  `}
`

export const ProductInfo = styled.div`
  ${({ theme }) => css`
    grid-area: info;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    @media (min-width: 525px) {
      justify-content: flex-start;
      gap: ${theme.spacings.medium};
    }
  `}
`

export const Details = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (min-width: 525px) {
    max-width: 200px;
    flex-direction: column;
  }
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;

  button {
    border: none;
    color: ${({ theme }) => theme.colors.blue};
    background-color: transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child {
      margin-right: 8px;
    }

    &:last-child {
      margin-left: 8px;
    }
  }

  input {
    width: 62px;
    height: 26px;
    text-align: center;
    border: 1px solid #d9d9d9;
    border-radius: ${({ theme }) => theme.border.radius};
  }
`

export const Subtotal = styled.span`
  ${({ theme }) => css`
    font-size: 14px;
    font-weight: bold;
    color: ${theme.colors.gray};
    margin-right: 16px;
  `}
`

export const RemoveButton = styled.button`
  grid-area: remove;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 16px;

  @media (min-width: 525px) {
    align-self: start;
  }
`

export const Total = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.lightGray};
    gap: ${theme.spacings.small};

    span:first-child {
      font-size: ${theme.font.sizes.small};
    }

    span + span {
      color: ${theme.colors.darkViolet};
    }
  `}
`
export const FooterCart = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    border-top: 1px solid #ddd;
    padding: ${theme.spacings.medium} 0 0;
    gap: ${theme.spacings.xsmall};

    button {
      height: 2.125rem;
      @media (min-width: 425px) {
        width: 10.8rem;
      }
    }

    @media (min-width: 425px) {
      flex-direction: row;
    }
  `}
`
