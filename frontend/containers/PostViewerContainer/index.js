import { useEffect, useState, useContext } from 'react'
import PostContentsViewer from '../../components/PostContentsViewer'
import PageLayout from '../PageLayout'
import * as S from './style'

import { AppState } from '../../AppStore'
import axios from 'axios'
import { baseURL } from '../../common/api'

export default function PostViewerContainer({ post }) {
  const user = useContext(AppState)
  const date = new Date(post.createdAt)

  const [isDeleteBtn, setDeleteBtn] = useState(false)
  const [isDelete, setDelete] = useState(false)

  useEffect(() => {
    if (isDeleteBtn) {
      axios
        .delete(`${baseURL}/post/${post.id}`, {}, { withCredentials: true })
        .then(() => {
          alert('포스트 삭제가 완료되었습니다.')
          setDelete(true)
        })
        .catch(() => alert('포스트 삭제 실패'))
        .finally(() => setDeleteBtn(false))
    }
  }, [isDeleteBtn])

  useEffect(() => {
    if (isDelete) {
      window.location = '/'
    }
  }, [isDelete])

  return (
    <PageLayout title={`Record - ${post.title}`}>
      <S.Title>{post.title}</S.Title>
      <S.UserContentsContainer>
        <S.UserName href={`/user/${post.User.id}`}>{post.User.name}</S.UserName>
        <S.Date>{`${date.getFullYear()}년 ${
          date.getMonth() + 1
        }월 ${date.getDate()}일`}</S.Date>
        {user?.id === post.User.id ? (
          <>
            <S.EditBtn href={`/post/edit/${post.id}`}>수정하기</S.EditBtn>
            <S.EditBtn onClick={() => setDeleteBtn(true)}>삭제하기</S.EditBtn>
          </>
        ) : (
          <></>
        )}
      </S.UserContentsContainer>
      <S.PostViewerContainer>
        <PostContentsViewer contents={post.contents} />
      </S.PostViewerContainer>
    </PageLayout>
  )
}
