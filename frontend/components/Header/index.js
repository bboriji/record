import 'next'
import axios from 'axios'
import { useEffect, useState } from 'react'

import { baseURL } from '../../common/api'
import * as S from './style'

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

  return (
    <S.HeaderContainer>
      <S.HeaderContentsContainer>
        <S.Title href={'/'}>Record</S.Title>
        <S.HeaderLoginContainer>
          {user ? (
            <S.LoginTabButton href={`/user/${user.id}`}>
              {user.name}
            </S.LoginTabButton>
          ) : (
            <>
              <S.LoginTabButton href={'/login'}>로그인</S.LoginTabButton>
              <S.LoginTabButton href={'/register'}>회원가입</S.LoginTabButton>
            </>
          )}
        </S.HeaderLoginContainer>
      </S.HeaderContentsContainer>
    </S.HeaderContainer>
  )
}
