import styled from 'styled-components'
import { mediaQuery } from '../../common/media'
import { tabSize, screenSize } from '../../common/constant'

export const DefaultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ContentsContainer = styled.div`
  margin: 1rem auto auto auto;
  width: ${tabSize.large}px;

  ${mediaQuery(screenSize.large)} {
    width: ${tabSize.middle}px;
  }
  ${mediaQuery(screenSize.middle)} {
    width: ${tabSize.small - 32}px;
  }
  ${mediaQuery(tabSize.small)} {
    width: calc(100% - 2rem);
  }
`
