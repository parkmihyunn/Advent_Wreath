import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Main(){

    // 디데이 계산
    var today = new Date();
    var dDay = new Date(2022,11,25);
    var gap = dDay.getTime() - today.getTime();
    var result = Math.ceil(gap / (1000 * 60 * 60 * 24));

    return (
        <div className="
            flex flex-col items-center h-screen max-w-md
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

                <div className="relative">
                    <div className="text-center m-auto relative">
                        <Image src='/img/door-border_1.png' width='307' height='537'/>
                    </div>
                    <div className="door-top">
                        <div className="flex justify-between mt-4 mb-1">
                            <h1 className="
                                ml-14 
                                text-white align-bottom
                            ">OOO님의 소원양말</h1>
                            <Link href='/wish-socks'>
                                <h1 className="mr-14 mt-1 text-gray-500 text-xs align-bottom">
                                    편집하기
                                </h1>
                            </Link>
                        </div>
                        <div className="px-10 relative">
                            <div className="w-60 text-center m-auto relative">
                                <Image src='/img/socks_line.png' width='350' height='50'/>
                            </div>
                            <div className="sock-1">
                                <Image src='/img/sock_1.png' width='83.95' height='102.5'/>
                            </div>
                            <div className="sock-2">
                                <Image src='/img/sock_2.png' width='79.07' height='109.33p'/>
                            </div>
                            <div className="sock-3">
                                <Image src='/img/sock_3.png' width='82.98' height='107.38'/>
                            </div>
                        </div>
                        <div className="pt-16 mt-6 place-items-center flex-1">
                            <Image src='/img/wreath_non_2.png' width='280' height='280'/>
                            <div className="wreath-text">
                                <Image src='/img/christmas_text.png' width='97' height='25'/>
                                <h1 className="text-center text-xl">
                                D-{result}
                                </h1>
                            </div>
                        </div>    
                        <Link href='/ornaments'>
                            <h1 className="text-center text-xs text-gray-500">
                                편집하기
                            </h1>
                        </Link>
                        <div className="flex justify-between px-10" >
                            <div className="door-handle">
                                <Image src='/img/handle.png' width='76' height='103'/>
                            </div>
                            <div className="collection">
                                <Image src='/img/collection.png' width='95' height='131'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid place-items-center relative top-5">
                    <Image src='/img/quiz_line.png' width='307' height='165'/>
                    <div className="absolute top-11">
                        <Image src='/img/quiz_black.png' width='191' height='10'/>
                    </div>
                    <div className="absolute top-5">
                        <Link href='/quiz'>
                        <Image src='/img/quiz_white.png' width='149' height='40'/>
                        </Link>
                    </div>
                    <div className="absolute top-3 right-20">
                        <Image src='/img/quiz_red.png' width='22' height='22'/>
                    </div>
                    <div className="absolute top-8">
                        <Image src='/img/quiz_text.png' width='80' height='16'/>
                    </div>
                    <div className="absolute bottom-5">
                        <Image src='/img/quiz_deco.png' width='272' height='89'/>
                    </div>
                </div>
                <Layout/>
            </div>
        </div>
    );
}