import 'next'
import axios from 'axios'
import PostListContainer from '../containers/PostListContainer'

export default function Home({ data }) {
  const { posts } = data
  return <PostListContainer posts={posts} />
}

export async function getServerSideProps() {
  const { data: posts } = await axios.get('https://fog.naora.dev/api/posts')

  return {
    props: { data: { posts } }, // will be passed to the page component as props
  }
}
