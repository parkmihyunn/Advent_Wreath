import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function quiz(){

    //오늘 날짜 함수
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    // 임시로 사용할 quiz data
    const quizData = [
        {
            question : '북극에 사는 OOO는 식량난에 고통받고 있다.',
            answers : {
            },
           correct : '북극곰'
        },
    ]


    const [quiz_check, setQuiz_check] = useState(false);
    // 사용자 정답 가져오기
    let answer;
    if (typeof document !== "undefined") {
        answer = document.getElementById('u_anw').value.toLowerCase().trim();;
    }

    if(answer === quizData[0].answers) {
        setQuiz_check(true);
    } else {
    }

    return (
        <div className="
            flex flex-col items-center h-screen relative
            overflow-auto bg-cover bg-local place-items-center
            bg-[url('../public/img/wood_pattern_dark.png')]
        ">
            <Head>
            <title>서비스 명</title>
            <meta name="description" content="콘텐트 내용" />
            <link rel="icon" href="/favicon.ico" />
            </Head> 

            <h1 className="text-white pt-20 pb-4 text-xl">{month}월 {day}일 n번째 퀴즈</h1>

            <div className="flex-1 w-full text-center m-auto relative">
                <div className="absolute mt-5 hint-btn">
                    <a href="https://www.greenpeace.org/korea/update/5973/blog-arctic-rescue-polar-bears-in-global-warming/" className="hint-btn text-xs text-white py-1 px-6 mb-1 bg-green-800 rounded-md">ㅤ힌트 보러가기</a>
                </div>
                <div className="hint-btn-img">
                    <Image src="/img/hint_btn.png" width='31' height='36'/>
                </div>
            </div>

            <div className="flex letter-wrapper mt-16">
                <Image className="md:object-scale-down w-full max-x-md absolute" src='/img/quiz_back.png' width='430' height='639'/>
                <div className="flex flex-col letter-text1 px-5">
                    <div className="flex text-rose-800 mb-10">~ 오늘의 퀴즈 ~</div>
                    <div className="flex text-xl">{quizData[0].question}</div>
                    <div class="quiz__answer">
                        <input type="text" class="input" id="u_anw" placeholder="정답 입력하기" />
                        <button class="confirm">제출</button>
                        <div class="result"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}