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
                    text-2xl text-left text-white pt-10 px-5
                ">서비스 이름</h1>
                <div className="flex mt-4 mb-4 px-10">
                    <h1 className="flex basis-full
                        text-xl text-right text-white
                    ">OOO님의 소원양말</h1>
                    <Link href='/wish-socks'>
                    <h1 className="basis-full text-right ml-18 text-gray-500">
                        편집하기
                    </h1>
                    </Link>
                </div>
                <div className="px-10">
                    <div className = "bg-none px-10">
                         <Image src='/img/socks_line.png' width='350' height='50'/>
                         <div className="grid grid-rows-1 grid-flow-col gap-5">
                            <Image src='/img/sock_1.png' width='70' height='120'/>
                            <Image src='/img/sock_2.png' width='70' height='120'/>
                            <Image src='/img/sock_3.png' width='70' height='120'/>
                        </div>
                    </div>
                </div>
                <div className="grid place-items-center flex-1 bg-none relative">
                    <Image src='/img/wreath_non.png' width='300' height='280'/>
                    <div className="absolute">
                        <Image src='/img/christmas_text.png' width='120' height='40'/>
                        <h1 className="text-center text-2xl">
                          D-15
                        </h1>
                    </div>
                </div>    
                <div>
                <Link href='/ornaments'>
                    <h1 className="text-center text-base text-gray-500">
                        편집하기
                    </h1>
                </Link>
                </div>
                <div className="grid grid-rows-1 grid-flow-col gap-20 px-10" >
                    <Image src='/img/handle.png' width='40' height='140'/>
                    <Image src='/img/collection.png' width='80' height='140'/>
                </div> 
                {/* <div className="px-10 place-items-center grid">
                    <Image src='/img/quiz_deco.png' width='300' height='100'/>
                </div> */}
                <div className="w-full text-center m-auto relative">
                    <div className="px-10 place-items-center grid">
                         <Image src='/img/quiz_deco.png' width='300' height='100'/>
                    </div>
                </div>
                <Layout/>
            </div>
        </div>
    );
}
