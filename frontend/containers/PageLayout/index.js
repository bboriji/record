import 'next'
import Head from 'next/head'
import Header from '../../components/Header'
import * as S from './style'

export default function PageLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{`
            #__next { height: 100% }
        `}</style>
      </Head>
      <S.DefaultContainer>
        <Header />
        <S.ContentsContainer>{children}</S.ContentsContainer>
      </S.DefaultContainer>
    </>
  )
}
