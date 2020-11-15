import 'next'

import PageLayout from '../../containers/PageLayout'

export default function User({ }) {
  return (
    <PageLayout title={'Record'}>
        유저페이지입니다.
    </PageLayout>
  )
}

// 최초에 서버에서 데이터를 불러와서 그려주는 메소드임.
export async function getServerSideProps(context) {
  return {
    props: { }, // will be passed to the page component as props
  }
}

