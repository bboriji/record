import 'next'
import styles from '../styles/Home.module.css'
import Header from '../components/header'

import "antd/dist/antd.css";

import useSWR from 'swr'

export default function Home() {
  const { data, error } = useSWR('/api', fetcher)

  return (
    
    <Header>
      <p>안녕</p>
    </Header>
  )
}