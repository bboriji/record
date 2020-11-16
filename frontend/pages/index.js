import 'next'
import { Card } from 'antd'
import axios from 'axios'

import PageLayout from '../containers/PageLayout'

export default function Home({ data }) {
  const { posts } = data

  return (
    <PageLayout title={'Record'}>
      {
        posts ? posts.map((post) => {
          return (
            <Card title={post.title} bordered={true}>
              <p>{post.contents}</p>
              <p>{post.id}</p>
              <p>{post.userid}</p>
            </Card>
          )
        }) : (<p>포스트가 없습니다.</p>)
      }
    </PageLayout>
  )
}

export async function getServerSideProps(context) {
  const { data: posts } = await axios.get("https://fog.naora.dev/api/posts")

  return {
    props: { data: { posts } }, // will be passed to the page component as props
  }
}