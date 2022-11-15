import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function quiz(){

    //오늘 날짜 함수
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    // const [quiz_check, setQuiz_check] = useState(false);
    // // 사용자 정답 가져오기
    // let answer;
    // if (typeof document !== "undefined" && answer !== null) {
    //     answer = document.getElementById('u_anw').value.toLowerCase().trim();;
    // }

    // if(answer === quizData[0].answers) {
    //     setQuiz_check(true);
    // } else {
    // }
    
    // 임시로 사용할 quiz data
    const quizData = [
        {
            quizNum : 0,
            question : '북극에 사는 OOO는 식량난에 고통받고 있다.',
            answers : {},
            correct : '북극곰',
            hints : 'https://www.greenpeace.org/korea/update/5973/blog-arctic-rescue-polar-bears-in-global-warming/'
        },
    ]

    /* const quizAsk = document.querySelector(".quiz__question .ask");             // 퀴즈 질문
    const quizconfirm = document.querySelector(".quiz__answer .confirm");       // 정답 확인 버튼
    const quizResult = document.querySelector(".quiz__answer .result");         // 정답 결과
    const quizInput = document.querySelector(".quiz__answer .input");           // 사용자 정답
    const quizView = document.querySelector(".quiz__view");                 // 결과창

    // 문제 정보
    const answerNum = quizData[0].quizNum;
    const answerAsk = quizData[0].question;
    let answerResult = quizData[0].correct;

    // 문제 출력
    quizAsk.innerText = answerAsk;
    quizResult.innerText = "정답은 [ " + answerResult + " ] 입니다.";

    // 정답 숨기기
    quizResult.style.display = "none";
    
    // 정답 확인
    quizconfirm.addEventListener("click", () => {
        quizInput.style.display = "none";
        quizResult.style.display = "block";
        quizconfirm.style.display = "none";

        // 사용자 정답 가져옴   // tolowercase() -> 소문자 변환 // trim->여백제거
        const userWord = quizInput.value.toLowerCase().trim();
        answerResult = answerResult.toLowerCase().trim();

        // 사용자 정답 vs 문제 정답 
        if (userWord == answerResult) {
            // 정답 
            // alert("정답입니다");
            quizView.classList.add("like");
        } else {
            // 오답 
            // alert("오답입니다");
            quizView.classList.add("dislike");
        }
    }); */

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
                    <a href={quizData[0].hints} className="hint-btn text-xs text-white py-1 px-6 mb-1 bg-green-800 rounded-md">ㅤ힌트 보러가기</a>
                </div>
                <div className="hint-btn-img">
                    <Image src="/img/hint_btn.png" width='31' height='36'/>
                </div>
            </div>

            <div className="flex letter-wrapper mt-16">
                <Image className=" w-full max-x-md absolute" src='/img/quiz_back.png' width='430' height='639'/>
                <div className="flex flex-col letter-text1 px-5 relative ">
                    <div className="flex text-rose-800 mb-6 max-[374px]:mb-2.5">~ 오늘의 퀴즈 ~</div>
                    <div className="flex text-xl max-[374px]:text-base">{quizData[0].question}</div>
                    <div class="quiz_answer">
                        <input type="text" className="quiz_input" id="u_anw" placeholder="정답 입력하기" />
                        <button className="submit">제출</button>
                        <div className="result"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}