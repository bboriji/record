import 'next'
import styles from '../styles/Home.module.css'

import { Row, Col } from 'antd'
import "antd/dist/antd.css";

export default function Post() {
  const data = [1, 2, 3, 4]

  return (
    <>
      <Row gutter={[16, 16]}>
        {data.map((d) => 
          (<Col span={6} ><div>{d}</div></Col>)
        )}
      </Row>
    </>
  )
}
