import 'next'
import axios from 'axios'
import UserViewerContainer from '../../containers/UserViewerContainer'

export default function User({ posts, user }) {
  return <UserViewerContainer posts={posts} user={user} />
}

// 최초에 서버에서 데이터를 불러와서 그려주는 메소드임.
export async function getServerSideProps(context) {
  const { id } = context.params
  const { data: user } = await axios.get(`https://fog.naora.dev/api/user/${id}`)
  const { data: posts } = await axios.get(`https://fog.naora.dev/api/user/${id}/posts`)

  return {
    props: { posts, user }, // will be passed to the page component as props
  }
}
