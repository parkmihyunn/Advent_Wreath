import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="
      flex flex-col items-center h-screen
      overflow-auto
      bg-[url('../public/img/wood_pattern.jpg')]
    ">

      <Head>
        <title>서비스 명</title>
        <meta name="description" content="콘텐트 내용" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      <div className="flex flex-col">
        <h1 className="
          flex flex-col items-center
          mt-40
          text-center text-4xl font-bold
        ">
          서비스 이름
        </h1>
        <div className="grid place-items-center">
          <Image src='/img/wreath.png' alt="" width='400%' height='400%' className=""/>
          <Link href='/main'>
            <a className ="flex flex-col items-center mt-20 text-2xl">
                시작하기
            </a>
          </Link>
        </div>
        <Layout/>
      </div>

    </div>
  )
}
