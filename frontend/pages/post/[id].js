import 'next'
import axios from 'axios'
import PageLayout from '../../containers/PageLayout'

export default function Home({ data }) {
  console.log(data)

  return (
    <PageLayout title={'Record'}>
      포스트가 없습니다.
    </PageLayout>
  )
}

export async function getServerSideProps(context) {
  const { data } = await axios.get("https://fog.naora.dev/api/posts")

  return {
    props: { data }, // will be passed to the page component as props
  }
}