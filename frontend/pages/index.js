import 'next'
import axios from 'axios'

import { Card } from 'antd'
import styled from 'styled-components';
import PageTemplate from '../containers/PageLayout'

const gridStyle = {
    width: '20rem',
    height: '20rem',
    overflow: "hidden",
    textoverflow: "ellipsis",
    margin: '1%'
}

const PostLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`

export default function Home({ data }) {
  return (
    <PageTemplate title={'Record'}>
        {
            data.posts ? data.posts.map((post) => {
                return(
                    <Card.Grid style={gridStyle}>
                      <div>
                        {/* <img src={require('../image/1.png')} /> */}
                        <h3 className="post_title" >
                        {post.title}
                          <div>
                            <h5 className="post_contents">{post.contents.slice(0, 100)}</h5>
                            <h5 className="post_name">{post.username}</h5>
                            <h5 className="post_createdAt">{post.createdAt}</h5>
                          </div>
                        </h3>
                      </div>
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