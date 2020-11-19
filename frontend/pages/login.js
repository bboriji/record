import 'next'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { Input, Button } from 'antd'
import styled from 'styled-components'

import { baseURL } from '../common/api'

const LoginLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`

const InputContainer = styled.div`
  width: 100%;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
`

const InputHeaderText = styled.div`
  margin: 1rem auto 1rem auto;
  display: flex;
`

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isFetch, setFetch] = useState(false)
  const [isLogin, setLogin] = useState(null)

  useEffect(() => {
    if (isFetch)
      axios
        .post(
          `${baseURL}/login`,
          { email, password },
          { withCredentials: true },
        )
        .then((value) => {
          setLogin(value)
        })
        .catch((e) => {
          alert('로그인 실패')
        })
        .finally(() => {
          setFetch(false)
        })
  }, [isFetch])

  useEffect(() => {
    if (isLogin) window.location = '/'
  }, [isLogin])

  return (
    <LoginLayout>
      <InputContainer>
        <form>
          <InputHeaderText>이메일</InputHeaderText>
          <Input
            placeholder={'이메일'}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <InputHeaderText>비밀번호</InputHeaderText>
          <Input
            placeholder={'비밀번호'}
            value={password}
            type={'password'}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <Button onClick={() => setFetch(true)}>로그인</Button>
          <Button href={'/register'}>회원가입</Button>
        </form>
      </InputContainer>
    </LoginLayout>
  )
}
