import 'next'
import axios from 'axios'

import { Space, Card } from 'antd'
import PageTemplate from '../containers/PageLayout'

const gridStyle = {
    width: '20rem',
    height: '20rem',
    overflow: "hidden",
    textoverflow: "ellipsis",
    margin: '1%'
}

export default function Home({ data }) {
  return (
    <PageTemplate title={'Record'}>
        {
            data.posts ? data.posts.map((post) => {
                return(
                    <Card.Grid style={gridStyle}>
                        <Card title = {post.title} bordered={true} >
                            <p>{post.contents}</p>
                            <p>{post.userid}</p>
                            <p>{post.createdAt}</p>
                        </Card>
                    </Card.Grid>
                )
            }) : (<p>포스트가 없습니다.</p>)
        }
    </PageTemplate>
  )
}

export async function getServerSideProps(context) {
  const { data: posts } = await axios.get("https://fog.naora.dev/api/posts")

  return {
    props: { data: { posts }}, // will be passed to the page component as props
  }
}