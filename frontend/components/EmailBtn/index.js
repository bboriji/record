import 'react'
import styled from 'styled-components'

const A = styled.a`
  color: gray;
  :hover {
    color: black;
  }
`

export default function EmailBtn({ href }) {
  return (
    <A href={href}>
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <path
          fill="currentColor"
          d="M16 16.871L1.019 5H30.98L16 16.871zm0 3.146L1 8.131V27h30V8.131L16 20.017z"
        ></path>
      </svg>
    </A>
  )
}
