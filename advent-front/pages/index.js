import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>서비스 명</title>
        <meta name="description" content="콘텐트 내용" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      {/* 아래 h1 css 테스트용으로 추가한것임*/}
      <h1 className='text-2xl font-bold text-violet-500'>
        시작화면
      </h1>

    </Layout>
  )
}
