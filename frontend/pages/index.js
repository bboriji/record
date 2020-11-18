import 'next'
import { Card } from 'antd'
import axios from 'axios'

import { Space, Card } from 'antd'
import PageTemplate from '../containers/PageLayout'

export default function Home({ data }) {
  const { posts } = data

  return (
    <PageTemplate title={'Record'}>
      <Space direction="horizontal">
        {data ? data.map(d => (
          <Card title = {d.title} style={{ width: 300, height: 300, overflow: "hidden", textOverflow: "ellipsis"}}>
            <div>{d.contents}</div>
            <div>{d.userid}</div>
            <div>{d.createdAt}</div>
          </Card>
        )) : <p>포스트가 없습니다.</p>}
      </Space> 
    </PageTemplate>
  )
}

export async function getServerSideProps(context) {
  const { data: posts } = await axios.get("https://fog.naora.dev/api/posts")

  return {
    props: { data: { posts } }, // will be passed to the page component as props
  }
}