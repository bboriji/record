import 'next'
import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { baseURL } from '../common/api'
import { mediaQuery } from '../common/media'
import { tabSize, screenSize, mainBlue } from '../common/constant'

const HeaderContainer = styled.div`
  width: 100%;
  height: 4rem;
  background: ${mainBlue};
  box-shadow: 0px 0px 10px 5px gray;
`

const HeaderContentsContainer = styled.div`
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

const HeaderLoginContainer = styled.div`
  margin: auto 0 auto auto;
`

const LoginTabButton = styled.a`
  margin: 1rem;
  text-decoration: none;
  color: white;
`

const Title = styled.a`
  margin: auto auto auto 0;
  font-weight: bold;
  font-size: 1.625rem;
  color: white;
  text-decoration: none;
`

export default function Header() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    axios
      .post(`${baseURL}/me`, {}, { withCredentials: true })
      .then((value) => {
        setUser(value.data)
      })
      .catch((e) => {
        console.log('unauthorized')
      })
  }, [])

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <HeaderContainer>
      <HeaderContentsContainer>
        <Title href={'/'}>Record</Title>
        <HeaderLoginContainer>
          {user ? (
            <LoginTabButton href={`/user/${user.id}`}>
              {user.name}
            </LoginTabButton>
          ) : (
            <>
              <LoginTabButton href={'/login'}>로그인</LoginTabButton>
              <LoginTabButton href={'/register'}>회원가입</LoginTabButton>
            </>
          )}
        </HeaderLoginContainer>
      </HeaderContentsContainer>
    </HeaderContainer>
  )
}
