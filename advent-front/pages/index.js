import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="
      flex flex-col items-center h-screen
      overflow-auto bg-cover bg-local
      bg-[url('../public/img/wood_pattern.png')]
    ">

      <Head>
        <title>서비스 명</title>
        <meta name="description" content="콘텐트 내용" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      <div className="flex flex-col h-full">
        <div className="top-0">
          <Image src='/img/start_top.png' width='435' height='287'/>
        </div>
        <div className="flex flex-col place-items-center flex-1">
            <Image src='/img/wreath.png' width='259' height='282'/>

          <div className="place-items-center items-center pt-10 text-center text-3xl text-white ">
            서비스 이름
          </div>
        </div>
        <div className="w-full relative mt-10">
          <div className="w-full text-center m-auto relative">
            <Image src='/img/start_btn.png' width='245' height='62'/>
          </div>
          <Link href='/login'>
            <a className ="start-text flex flex-col items-center text-white">
                시작하기
            </a>
          </Link>
        </div>
        <Layout/>
      </div>
    </div>
  )
}
