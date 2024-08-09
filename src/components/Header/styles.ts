import styled, { css } from 'styled-components'

export const Content = styled.header`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacings.medium} 0;
  `}
`
