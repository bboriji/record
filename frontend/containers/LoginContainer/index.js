import 'next'
import { useEffect, useState, useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'

import { Input, Button } from 'antd'
import { baseURL } from '../../common/api'
import * as S from './style'

import { AppAction } from '../../AppStore'

export default function LoginContainer() {
  const { handleSubmit, control, errors } = useForm()
  const [isLogin, setLogin] = useState(null)
  const setFetch = useContext(AppAction)

  const onLoginSubmit = (data) => {
    axios
      .post(`${baseURL}/login`, data, { withCredentials: true })
      .then((value) => {
        setLogin(value)
      })
      .catch((e) => {
        alert('로그인 실패')
      })
  }

  useEffect(() => {
    if (isLogin) {
      setFetch(true)
      window.location = '/'
    }
  }, [isLogin])

  return (
    <S.LoginLayout>
      <S.InputContainer onSubmit={handleSubmit(onLoginSubmit)}>
        <S.Title>Record</S.Title>
        <S.SubTitle>로그인</S.SubTitle>
        <S.InputHeaderText>이메일</S.InputHeaderText>
        <Controller
          as={Input}
          control={control}
          name="email"
          placeholder="이메일"
          defaultValue=""
          rules={{ required: true }}
        />
        {errors.email && (
          <S.InputErrorText>이메일을 입력하세요</S.InputErrorText>
        )}
        <S.InputHeaderText>비밀번호</S.InputHeaderText>
        <Controller
          as={Input}
          control={control}
          name="password"
          placeholder="비밀번호"
          defaultValue=""
          type="password"
          rules={{ required: true }}
        />
        {errors.password && (
          <S.InputErrorText>비밀번호를 입력하세요</S.InputErrorText>
        )}
        <Input
          style={{ width: `100%`, margin: `1rem 0` }}
          type="submit"
          defaultValue="로그인"
        />
        <Button href={'/register'} style={{ width: `100%` }}>
          회원가입
        </Button>
      </S.InputContainer>
    </S.LoginLayout>
  )
}
