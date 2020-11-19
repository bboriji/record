import 'next'
import axios from 'axios'

import PostEditContainer from '../../../containers/PostEditContainer'

export default function PostEdit({ data }) {
  return (
    <>
      <PostEditContainer initPost={data} />
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params
  let result = null

  if (!isNaN(id)) {
    const { data } = await axios.get(`https://fog.naora.dev/api/post/${id}`)
    result = data
  }

  return {
    props: { data: result }, // will be passed to the page component as props
  }
}
