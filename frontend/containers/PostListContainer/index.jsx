import Card from '../../components/Card'
import PageLayout from '../PageLayout'

export default function PostListContainer({ posts }) {
  return (
    <PageLayout title={'Record'}>
      {posts ? (
        posts.map((post) => (
          <Card post={post} key={post.id} />
        ))
      ) : (
        <p>포스트가 없습니다.</p>
      )}
    </PageLayout>
  )
}
