import 'next'
import axios from 'axios'
import PostViewerContainer from '../../containers/PostViewerContainer'

export default function Post({ data }) {
  return <PostViewerContainer post={data} />
}

export async function getServerSideProps(context) {
  const { id } = context.params
  const { data } = await axios.get(`https://fog.naora.dev/api/post/${id}`)

  return {
    props: { data }, // will be passed to the page component as props
  }
}
