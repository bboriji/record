import 'next'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { Input, Button } from 'antd'
import styled from 'styled-components'

import { baseURL } from '../common/api'

const RegisterLayout = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
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

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRePassword] = useState('')

  const [isFetch, setFetch] = useState(false)
  const [isLogin, setLogin] = useState(null)

  useEffect(() => {
    if (isFetch)
      axios
        .post(
          `${baseURL}/register`,
          { email, password, name },
          { withCredentials: true },
        )
        .then((value) => {
          setLogin(value)
        })
        .catch((e) => {
          alert('회원가입 실패')
        })
        .finally(() => {
          setFetch(false)
        })
  }, [isFetch])

  useEffect(() => {
    if (isLogin) {
      alert('로그인해주세요')
      window.location = '/login'
    }
  }, [isLogin])

  return (
    <RegisterLayout>
      <InputContainer>
        <InputHeaderText>이름</InputHeaderText>
        <Input
          placeholder={'이름'}
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
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
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <InputHeaderText>비밀번호 확인</InputHeaderText>
        <Input
          placeholder={'비밀번호 확인'}
          value={repassword}
          onChange={(e) => {
            setRePassword(e.target.value)
          }}
        />
        <Button onClick={() => setFetch(true)}>회원가입</Button>
      </InputContainer>
    </RegisterLayout>
  )
}
