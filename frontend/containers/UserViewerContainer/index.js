import {} from 'react'
import CardList from '../../components/CardList'
import PageLayout from '../PageLayout'

export default function UserViewerContainer({ posts, user }) {
  return <PageLayout title={`Record - ${user.name}`}>
    <CardList posts={posts} />
  </PageLayout>
}
