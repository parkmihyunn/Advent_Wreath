import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Main(){
    return (
        <div className="
            flex flex-col h-screen max-w-md
            overflow-auto bg-cover bg-local
            bg-[url('../public/img/wood_pattern.png')]
        ">
            <Head>
            <title>서비스 명</title>
            <meta name="description" content="콘텐트 내용" />
            <link rel="icon" href="/favicon.ico" />
            </Head> 
        
            <div className="flex flex-col h-full">
                <h1 className="
                    flex flex-col ml-3 mt-3
                    text-2xl text-left text-white
                ">서비스 이름</h1>
                <div className="flex mt-4 mb-4">
                    <h1 className="flex basis-full
                        text-xl text-right text-white
                    ">OOO님의 소원양말</h1>
                    <Link href='/main'>
                    <h1 className="flex basis-full
                        ml-18
                        text-white
                    ">편집하기</h1>
                    </Link>
                </div>
                <div className="grid place-items-center flex-1">
                    <Image src='/img/wreath_non.png' width='275' height='280'/>
                </div>    
                <Layout/>
            </div>
        </div>
    );
}
