import Head from 'next/head'
import Image from 'next/image'

export default function quiz(){

    //오늘 날짜 함수
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    return (
        <div className="
            flex flex-col items-center h-screen relative
            overflow-auto bg-cover bg-local
            bg-[url('../public/img/wood_pattern_dark.png')]
        ">
            <Head>
            <title>서비스 명</title>
            <meta name="description" content="콘텐트 내용" />
            <link rel="icon" href="/favicon.ico" />
            </Head> 

            <h1 className="text-white py-20 text-xl flex-1">{month}월 {day}일 n번째 퀴즈</h1>
            <div className="flex">
                <Image className="md:object-scale-down w-full max-x-md absolute" src='/img/quiz_back.png' width='430' height='639'/>
            </div>
            <div className="flex flex-col letter-text1 w-full max-x-md">
                    <div className="flex">오늘의 퀴즈</div>
                    <div className="flex text-xl">북극에 사는 ooo</div>
                </div>
        </div>
    );
}