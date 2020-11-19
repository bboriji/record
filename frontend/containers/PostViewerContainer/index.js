import PostContentsViewer from '../../components/PostContentsViewer'
import PageLayout from '../PageLayout'
import * as S from './style'

export default function PostViewerContainer({ post }) {
  return (
    <PageLayout title={'Record'}>
      <S.Title>{post.title}</S.Title>
      <S.CreatedAt>{post.createdAt}</S.CreatedAt>
      <S.PostViewerContainer>
        <PostContentsViewer contents={post.contents} />
      </S.PostViewerContainer>
    </PageLayout>
  )
}
