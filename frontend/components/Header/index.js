import 'next'
import { useContext } from 'react'
import * as S from './style'

import { AppState } from '../../AppStore'

export default function Header() {
  const user = useContext(AppState)

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
