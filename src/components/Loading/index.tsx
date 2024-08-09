import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

export default function Loading() {
  return <Loader />
}
