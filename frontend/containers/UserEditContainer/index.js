import 'next'
import { useContext, useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'

import { Input } from 'antd'
import { baseURL } from '../../common/api'
import * as S from './style'
import { AppState } from '../../AppStore'

export default function UserEditContainer() {
  const user = useContext(AppState)
  const { handleSubmit, control, errors } = useForm()
  const [isRegister, setRegister] = useState(null)

  const onUserEditSubmit = (data) => {
    axios
      .post(`${baseURL}/user/edit`, data, { withCredentials: true })
      .then((value) => {
        setRegister(value)
      })
      .catch((e) => {
        alert('프로필 수정 실패')
      })
  }

  useEffect(() => {
    if (isRegister) {
      alert('프로필이 수정되었습니다.')
      window.location = `/user/${user.id}`
    }
  }, [isRegister])

  return (
    <S.UserEditLayout>
      {user && <S.InputContainer onSubmit={handleSubmit(onUserEditSubmit)}>
        <S.Title href={'/'}>Record</S.Title>
        <S.SubTitle>프로필수정</S.SubTitle>
        <S.InputHeaderText>유저 이름</S.InputHeaderText>
        <Controller
          as={Input}
          control={control}
          name="name"
          placeholder="유저 이름"
          defaultValue={user.name}
          rules={{ required: true }}
        />
        {errors.name && <S.InputErrorText>이름을 입력하세요</S.InputErrorText>}
        <S.InputHeaderText>Github 닉네임</S.InputHeaderText>
        <Controller
          as={Input}
          control={control}
          name="githubLink"
          placeholder="Github nickname"
          defaultValue={user.githubLink}
        />
        <S.InputHeaderText>자기소개</S.InputHeaderText>
        <Controller
          resize="none"
          control={control}
          name="profile"
          render={({ onChange, value }) => (
            <Input.TextArea
              style={{ resize: 'none', height: '5rem' }}
              value={value}
              onChange={value => onChange(value)}
              defaultValue={user.profile}
              placeholder="자기소개"
            />
          )}
        />
        <Input
          style={{ width: `100%`, margin: `1rem 0` }}
          type="submit"
          defaultValue="수정하기"
        />
      </S.InputContainer>}
    </S.UserEditLayout>
  )
}
