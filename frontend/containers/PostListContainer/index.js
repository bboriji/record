import CardList from '../../components/CardList'
import PageLayout from '../PageLayout'

export default function PostListContainer({ posts }) {
  return (
    <PageLayout title={'Record'}>
      <CardList posts={posts} />
    </PageLayout>
  )
}
