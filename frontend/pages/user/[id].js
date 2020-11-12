import 'next'
import axios from 'axios'

import { Card } from 'antd'
import PageTemplate from '../containers/PageLayout'
import { baseURL, getPosts } from '../../common/api'

export default function Home({ data }) {
  // 이곳을 보면 서버에서 내려온 데이터를 볼 수 있음
  console.log(data)

  return (
    <PageTemplate title={'Record'}>
        {data ? data.map(d => (
          <Card>
            <h3>{d.title}</h3>
            <div>{d.contents}</div>
          </Card>
        )) : <p>포스트가 없습니다.</p>}
    </PageTemplate>
  )
}

// 최초에 서버에서 데이터를 불러와서 그려주는 메소드임.
export async function getServerSideProps(context) {
  const { data } = await axios.get(`${baseURL}${getPosts.url}`)

  return {
    props: { data }, // will be passed to the page component as props
  }
}