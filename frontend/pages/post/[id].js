import 'next'
import axios from 'axios'
import PageLayout from '../../containers/PageLayout'
import { Card } from 'antd'
import styled from 'styled-components'

const Title = styled.div`
  margin-top: 10px;
  font-size: 30px;
  text-align: center;
  font-weight: 1000;
`

const CreatedAt = styled.div`
  text-align: right;
`

const Contents = styled.div`
  margin-top: 20px;
  font-size: 20px;
`

export default function Home({ data }) {
  return (
    <PageLayout title={'Record'}>
      {data ? (
        <div>
          <Title>{data.title}</Title>
          <CreatedAt>{data.createdAt}</CreatedAt>
          <Contents>{data.contents}</Contents>
        </div>
      ) : (
        <p>포스트가 없습니다.</p>
      )}
    </PageLayout>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params
  const { data } = await axios.get(`https://fog.naora.dev/api/post/${id}`)

  return {
    props: { data }, // will be passed to the page component as props
  }
}
