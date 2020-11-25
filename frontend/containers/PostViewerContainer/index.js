import { useContext } from 'react'
import PostContentsViewer from '../../components/PostContentsViewer'
import PageLayout from '../PageLayout'
import * as S from './style'

import { AppState } from '../../AppStore'

export default function PostViewerContainer({ post }) {
  const user = useContext(AppState)
  const date = new Date(post.createdAt)

  return (
    <PageLayout title={`Record - ${post.title}`}>
      <S.Title>{post.title}</S.Title>
      <S.UserContentsContainer>
        <S.UserName href={`/user/${post.User.name}`}>{post.User.name}</S.UserName>
        <S.Date>{`${date.getFullYear()}년 ${
          date.getMonth() + 1
        }월 ${date.getDate()}일`}</S.Date>
        {user?.id === post.User.id ? (
          <S.EditBtn href={`/post/edit/${post.id}`}>수정하기</S.EditBtn>
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
