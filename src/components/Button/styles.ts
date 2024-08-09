import styled, { css } from 'styled-components'

export const Wrapper = styled.button<{ isClicked: boolean }>`
  ${({ theme, isClicked }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${isClicked ? theme.colors.green : theme.colors.blue};
    color: ${theme.colors.white};
    border: 0;
    cursor: ${isClicked ? 'not-allowed' : 'pointer'};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.small};
    text-decoration: none;
    width: 100%;
    margin: ${theme.spacings.xsmall} 0;
    gap: ${theme.spacings.xsmall};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xsmall};
    opacity: ${isClicked ? 0.6 : 1};
  `}
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const Image = styled.img`
  max-width: 100%;
`
