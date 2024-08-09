import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.small};
    align-items: center;
    justify-content: center;
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.semibold};

    span:first-child {
      display: none;
      @media (min-width: 525px) {
        display: block;
      }
    }

    span + span {
      color: ${theme.colors.lightGray};
      text-align: right;
    }
  `}
`

export const Image = styled.img`
  max-width: 100%;
  cursor: pointer;
`
