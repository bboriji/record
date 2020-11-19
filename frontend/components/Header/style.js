import styled from 'styled-components'
import { mediaQuery } from '../../common/media'
import { tabSize, screenSize, mainBlue } from '../../common/constant'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 4rem;
  background: ${mainBlue};
  box-shadow: 0px 0px 10px 5px gray;
`

export const HeaderContentsContainer = styled.div`
  display: flex;
  height: 100%;
  margin: auto;
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

export const HeaderLoginContainer = styled.div`
  margin: auto 0 auto auto;
`

export const LoginTabButton = styled.a`
  margin: 1rem;
  text-decoration: none;
  color: white;
`

export const Title = styled.a`
  margin: auto auto auto 0;
  font-weight: bold;
  font-size: 1.625rem;
  color: white;
  text-decoration: none;
`
