import 'next'
import { useEffect, useState, useContext } from 'react'
import * as S from './style'

import { AppState } from '../../AppStore'
import axios from 'axios'
import { baseURL } from '../../common/api'

export default function Header() {
  const user = useContext(AppState)

  const [isLogoutBtn, setLogoutBtn] = useState(false)
  const [isLogout, setLogout] = useState(false)

  useEffect(() => {
    if (isLogoutBtn) {
      axios
        .post(`${baseURL}/logout`, {}, { withCredentials: true })
        .then(() => {
          alert('로그아웃이 완료되었습니다.')
          setLogout(true)
        })
        .catch(() => alert('로그아웃 실패'))
        .finally(() => setLogoutBtn(false))
    }
  }, [isLogoutBtn])

  useEffect(() => {
    if (isLogout) {
      window.location = '/'
    }
  }, [isLogout])

  return (
    <S.HeaderContainer>
      <S.HeaderContentsContainer>
        <S.Title href={'/'}>Record</S.Title>
        <S.HeaderLoginContainer>
          {user ? (
            <>
              <S.LoginTabButton href={`/user/${user.id}`}>
                {user.name}
              </S.LoginTabButton>
              <S.LoginTabButton href={`/post/edit/new`}>
                글쓰기
              </S.LoginTabButton>
              <S.LoginTabButton onClick={() => setLogoutBtn(true)}>
                로그아웃
              </S.LoginTabButton>
            </>
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
