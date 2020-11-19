import PostContentsViewer from '../../components/PostContentsViewer'
import PageLayout from '../PageLayout'
import styled from 'styled-components'

const Title = styled.div`
  margin-top: 10px;
  font-size: 30px;
  text-align: center;
  font-weight: 1000;
`

const CreatedAt = styled.div`
  text-align: right;
`

export default function PostViewerContainer({ post }) {
  return (
    <PageLayout title={'Record'}>
      {post ? (
        <div>
          <Title>{post.title}</Title>
          <CreatedAt>{post.createdAt}</CreatedAt>
          <PostContentsViewer contents={post.contents} />
        </div>
      ) : (
        <p>포스트가 없습니다.</p>
      )}
    </PageLayout>
  )
}
