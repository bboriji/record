import 'next'
import styles from '../styles/Home.module.css'
import Header from '../components/header'

import "antd/dist/antd.css";

import useRequest from '../hooks/useRequest'

export default function Home() {
  const { data } = useRequest({
    method: 'GET',
    url: '/posts',
  })

  console.log(data)

  return (
    <Header>
      {data ? data.map(d => <p>{d.title}</p>) : <p></p>}
    </Header>
  )
}