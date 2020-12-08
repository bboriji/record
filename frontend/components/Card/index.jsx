import React from 'react'
import * as S from './style'

export default function Card({ post }) {
  const date = new Date(post.createdAt)
  const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi
  return (
    <S.Card href={`/post/${post.id}`}>
      <S.Title>{post.title}</S.Title>
      <S.Contents>{post.contents.replace(regExp, '')}</S.Contents>
      <S.Date>{`${date.getFullYear()}년 ${
        date.getMonth() + 1
      }월 ${date.getDate()}일`}</S.Date>
    </S.Card>
  )
}
