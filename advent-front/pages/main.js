import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import QuizModal from '../components/quizModals'
import SocksModal_1 from '../components/socksModal_1'
import SocksModal_2 from '../components/socksModal_2'
import SocksModal_3 from '../components/socksModal_3'

export default function Main(){
    const [showQ_Modal, setShowQ_Modal] = useState(false);
    const [showS1_Modal, setShowS1_Modal] = useState(false);
    const [showS2_Modal, setShowS2_Modal] = useState(false);
    const [showS3_Modal, setShowS3_Modal] = useState(false);

    // 디데이 계산
    var today = new Date();
    var dDay = new Date(2022,11,25);
    var gap = dDay.getTime() - today.getTime();
    var result = Math.ceil(gap / (1000 * 60 * 60 * 24));

    return (
        <Fragment>
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
                <h1 className="
                    flex flex-col ml-2 relative
                    text-2xl text-left text-white pt-8
                ">서비스 이름</h1>

                <div className="relative">
                    <div className="text-center m-auto relative">
                        <Image src='/img/door-border_1.png' width='307' height='537'/>
                    </div>
                    <div className="door-top">
                        <div className="flex justify-between mt-4 mb-1">  
                            <h1 className="
                                ml-8
                                text-white align-bottom
                            ">OOO님의 소원양말</h1>
                            <Link href='/wish-socks'>
                                <h1 className="mr-8 mt-1 text-gray-500 text-xs align-bottom">
                                    편집하기
                                </h1>
                            </Link>
                        </div>
                        <div className="px-10 relative">
                            <div className="w-60 text-center m-auto relative">
                                <Image src='/img/socks_line.png' width='350' height='50'/>
                            </div>
                            <div className="sock-1">
                                <button onClick={()=> setShowS1_Modal(true)}>
                                    <Image src='/img/sock_1.png' width='83.95' height='102.5'/>
                                </button>
                            </div>
                            <div className="sock-2">
                                <button onClick={()=> setShowS2_Modal(true)}>
                                    <Image src='/img/sock_2.png' width='79.07' height='109.33p'/>
                                </button>
                            </div>
                            <div className="sock-3">
                                <button onClick={()=> setShowS3_Modal(true)}>
                                    <Image src='/img/sock_3.png' width='82.98' height='107.38'/>
                                </button>
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
                        <div className="door-handle"><Image src='/img/handle.png' width='76' height='103'/></div>
                        <div className="collection"><Image src='/img/collection.png' width='95' height='131'/></div>
                    </div>
                </div>

                <div className="w-full relative top-5">
                    <div className="w-full text-center m-auto relative">
                        <Image src='/img/door-dorder_2.png' width='307' height='165'/>
                    </div>
                    <div className="quiz-black">
                        <Image src='/img/quiz_black.png' width='191' height='10'/>
                    </div>
                    <div className="quiz-white">
                        <Image src='/img/quiz_white.png' width='149' height='40'/>
                    </div>
                    <div className="quiz-text">
                        <button onClick={()=> setShowQ_Modal(true)}>
                            <h1 className="text-center text-xl">오늘의 퀴즈</h1>
                        </button>
                    </div>
                    <div className="quiz-notification">
                        <Image src='/img/quiz_red.png' width='22' height='22'/>
                    </div>
                    <div className="quiz-deco"><Image src='/img/quiz_deco.png' width='272' height='89'/></div>
                </div>
                <div className="flex-1"></div>
                <Layout/>
                <QuizModal isVisible={showQ_Modal} onClose={()=>setShowQ_Modal(false)}/>
                <SocksModal_1 isVisible={showS1_Modal} onClose={()=>setShowS1_Modal(false)}/>
                <SocksModal_2 isVisible={showS2_Modal} onClose={()=>setShowS2_Modal(false)}/>
                <SocksModal_3 isVisible={showS3_Modal} onClose={()=>setShowS3_Modal(false)}/>
            </div>
        </div>
        </Fragment>
    );
}