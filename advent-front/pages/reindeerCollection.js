import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Link from 'next/link'

export default function ReindeerCollection(){
  /* 디자인 수정후 변경될 페이지입니다.
     모달로 변경될 수 있음 */
  return (
    <div className="
    flex flex-col items-center h-screen
    overflow-auto bg-cover bg-local
    bg-[url('../public/img/wood_pattern.png')]
    ">
      <Head>
      <title>돌아와! 순록!</title>
      <meta name="description" content="콘텐트 내용" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="collection-top" className="flex flex-1"/>
      <div id="collection-book-img" className="flex fixed bottom-0 overflow-hidden items-center justify-center text-center">
        <Image className="w-full max-x-full absolute" src='/img/collection_bg.png' width='430' height='765'/>
      </div>
    </div>
  );
}