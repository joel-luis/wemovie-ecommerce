import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 67.5rem;
    justify-content: center;
    margin: 0 auto;
    padding: 0 ${theme.spacings.small};
  `}
`
