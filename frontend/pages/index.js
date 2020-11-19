import 'next'
import axios from 'axios'
import { Card } from 'antd'
import PageLayout from '../containers/PageLayout'

export default function Home({ data }) {
  return (
    <PageLayout title={'Record'}>
      {data.posts ? (
        data.posts.map((post) => (
          <Card title={post.title} bordered={true}>
            <p>{post.contents}</p>
            <p>{post.userid}</p>
            <p>{post.createdAt}</p>
          </Card>
        ))
      ) : (
        <p>포스트가 없습니다.</p>
      )}
    </PageLayout>
  )
}

export async function getServerSideProps(context) {
  const { data: posts } = await axios.get('https://fog.naora.dev/api/posts')

  return {
    props: { data: { posts } }, // will be passed to the page component as props
  }
}
