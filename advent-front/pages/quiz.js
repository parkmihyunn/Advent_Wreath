import Head from 'next/head'
import Image from 'next/image'
import { useRef, useState } from 'react';

export default function quiz(){
    //오늘 날짜 함수
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    
    // 임시로 사용할 quiz data array
    const quizData = [
        {
            quizNum : 0,
            question : '북극에 사는 OOO은/는 식량난에 고통받고 있다.',
            correct : '북극곰',
            hints : 'https://www.greenpeace.org/korea/update/5973/blog-arctic-rescue-polar-bears-in-global-warming/'
        },
    ]

    // 문제 정보
    const answerNum = quizData[0].quizNum;
    const answerAsk = quizData[0].question;
    let answerResult = quizData[0].correct.toLowerCase().trim();

    // 사용자 입력 값
    const quizInput = useRef()
    // 정답 확인
    function quizConfirm() {
        const quizInput_t = quizInput.current.value.toLowerCase().trim();
        if (quizInput_t == answerResult && typeof window !== 'undefined') {
            // 정답 
            document.getElementById('quiz_view_f').classList.remove('block');
            document.getElementById('quiz_view_f').classList.add('hidden');
            document.getElementById('quiz').classList.add('hidden');    // 문제 가리기
            document.getElementById('quiz_view_t').classList.remove('hidden');
            document.getElementById('quiz_view_t').classList.add('block');
            document.getElementById('u_anw').readOnly = true;   // input readonly 활성화
        } else {
            // 오답 
            document.getElementById('quiz_view_t').classList.remove('block');
            document.getElementById('quiz_view_t').classList.add('hidden');
            document.getElementById('quiz_view_f').classList.remove('hidden');
            document.getElementById('quiz_view_f').classList.add('block');
        }
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

            <h1 className="text-white pt-12 pb-4 text-xl">{month}월 {day}일 {answerNum+1}번째 퀴즈</h1>

            <div className="flex-1 w-full text-center m-auto relative">
                <div className="absolute mt-5 hint-btn">
                    <a href={quizData[0].hints} className="hint-btn text-xs text-white py-1 px-6 mb-1 bg-green-800 rounded-md">ㅤ힌트 보러가기</a>
                </div>
                <div className="hint-btn-img">
                    <Image src="/img/hint_btn.png" width='31' height='36'/>
                </div>
            </div>

            <div className="flex letter-wrapper mt-12">
                <Image className=" w-full max-x-md absolute" src='/img/quiz_back.png' width='430' height='639'/>
                <div className="flex flex-col letter-text1 px-5 relative ">
                    <div className="flex text-rose-800 mb-6 max-[374px]:mb-2 max-[374px]:mt-4">~ 오늘의 퀴즈 ~</div>
                    <div id="quiz_view_t" className="quiz_view_t hidden">
                    <Image className=""src='/img/closeBtn_Santa.png' width='52' height='54' />
                        <div className="">정답입니다 !</div>
                    </div>
                    <div id="quiz_view_f" className="quiz_view_f hidden">
                        <div>땡! 다시 생각해보세요.</div>
                    </div>
                    <div id="quiz" className="flex text-xl max-[374px]:text-base">{answerAsk}</div>
                    <div className="quiz_answer">
                        <input type="text" ref={quizInput} className="quiz_input" id="u_anw" placeholder="정답 입력하기"/>
                        <button className="submit" onClick={()=>quizConfirm()}>제출</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

