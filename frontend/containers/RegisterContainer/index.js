import 'next'
import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'

import { Input, Button } from 'antd'
import { baseURL } from '../../common/api'
import * as S from './style'

export default function RegisterContainer() {
  const { handleSubmit, control, errors } = useForm()
  const [isRegister, setRegister] = useState(null)

  const onLoginSubmit = (data) => {
    axios
      .post(`${baseURL}/register`, data, { withCredentials: true })
      .then((value) => {
        setRegister(value)
      })
      .catch((e) => {
        alert('회원가입 실패')
      })
  }

  useEffect(() => {
    if (isRegister) {
      alert('회원가입이 완료되었습니다.\n로그인 해주세요.')
      window.location = '/login'
    }
  }, [isRegister])

  return (
    <S.RegisterLayout>
      <S.InputContainer onSubmit={handleSubmit(onLoginSubmit)}>
        <S.Title href={'/'}>Record</S.Title>
        <S.SubTitle>회원가입</S.SubTitle>
        <S.InputHeaderText>이름</S.InputHeaderText>
        <Controller
          as={Input}
          control={control}
          name="name"
          placeholder="이름"
          defaultValue=""
          rules={{ required: true }}
        />
        {errors.name && <S.InputErrorText>이름을 입력하세요</S.InputErrorText>}
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
          defaultValue="회원가입"
        />
      </S.InputContainer>
    </S.RegisterLayout>
  )
}
