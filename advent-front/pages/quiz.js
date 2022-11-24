import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react';
import ConfettiGenerator from "confetti-js";
import ReinModal from "../components/reindeerModal";

export default function quiz(){
    /* 오늘 날짜 */
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    /* 임시로 사용할 quiz data*/
    const quizData = [
        {
            quizNum : 0,
            question : '북극에 사는 OOO은/는 식량난에 고통받고 있다.',
            correct : '북극곰',
            hints : 'https://www.greenpeace.org/korea/update/5973/blog-arctic-rescue-polar-bears-in-global-warming/'
        },
    ]
    

    /* 정답 컨페티 관리 */
    const [showConfetti, setShowConfetti] = useState(false);
    useEffect(() => {
        if(showConfetti){
            const confettiSettings = { target: 'my-canvas', clock: 40, props:['square'], size:1.3, rotate:true };
            const confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
        }
      }, [showConfetti])
    
    /* 문제 가져오기 */
    const answerNum = quizData[0].quizNum;
    const answerAsk = quizData[0].question;
    let answerResult = quizData[0].correct.toLowerCase().trim();
    /* 사용자 입력 값 */
    const quizInput = useRef();

    /* 정답 확인 후 css 수정 */
    function quizConfirm() {
        const quizInput_t = quizInput.current.value.toLowerCase().trim();
        if (quizInput_t == answerResult && typeof window !== 'undefined') {
            // 정답 
            document.getElementById('quiz_view_f').classList.remove('block');
            document.getElementById('quiz_view_f').classList.add('hidden');
            document.getElementById('quiz').classList.add('invisible');    // 문제 가리기
            document.getElementById('quiz_view_t').classList.remove('hidden');
            document.getElementById('quiz_view_t').classList.add('block');
            document.getElementById('u_anw').readOnly = true;   // input readonly 활성화
            document.getElementById('rd_arrive').classList.remove('hidden');
            document.getElementById('rd_arrive').classList.add('block');
            setShowConfetti(true);  // confetti 활성화
        } else {
            // 오답 
            document.getElementById('quiz_view_t').classList.remove('block');
            document.getElementById('quiz_view_t').classList.add('hidden');
            document.getElementById('quiz_view_f').classList.remove('hidden');
            document.getElementById('quiz_view_f').classList.add('block');
        }
    }

    /* 순록 모달 상태 */
    const [showR_Modal, setShowR_Modal] = useState(false);

    return (
        <div className="
            flex flex-col h-screen relative
            overflow-auto bg-cover bg-local
            bg-[url('../public/img/wood_pattern_dark.png')]
        ">
            <Head>
            <title>서비스 명</title>
            <meta name="description" content="콘텐트 내용" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <canvas id="my-canvas" className="absolute"></canvas>
            <div className="back-btn pl-16 pt-16">
                <Link href="/main">
                    <Image src="/img/back_white.png" width='40' height='40'/>
                </Link>
            </div>
            
            <div className="day-text text-white pt-8 pb-4 text-xl">{month}월 {day}일 {answerNum+1}번째 퀴즈</div>
            <div className="flex-1 w-full text-center m-auto relative">
                <div className="absolute mt-5 hint-btn">
                    <a href={quizData[0].hints} className="hint-btn text-xs text-white py-1 px-6 mb-1 bg-green-800 rounded-md">ㅤ힌트 보러가기</a>
                </div>
                <div className="hint-btn-img">
                    <Image src="/img/hint_btn.png" width='31' height='36'/>
                </div>
            </div>
            <div className="flex letter-wrapper mt-10">
                <Image className=" w-full max-x-md absolute" src='/img/quiz_back.png' width='430' height='639'/>
                <div className="flex flex-col letter-text1 px-5 relative ">
                    <div className="flex text-rose-800 mb-6 max-[374px]:mb-2 max-[374px]:mt-4">~ 오늘의 퀴즈 ~</div>
                    <div id="quiz" className="flex text-xl max-[374px]:text-base">{answerAsk}</div>
                    <div id="quiz_view_t" className="absolute mb-56 quiz_view_t hidden">
                        <Image className=""src='/img/closeBtn_Santa.png' width='52' height='54' />
                        <div className="">정답입니다 !</div>
                    </div>
                    <div id="quiz_view_f" className="absolute mb-36 bg-rose-800 text-white hidden">
                        <div className="text-xs pt-0.5 px-2 ">땡! 다시 생각해보세요.</div>
                    </div>
                    <div className="quiz_answer">
                        <input type="text" ref={quizInput} className="quiz_input" id="u_anw" placeholder="정답 입력하기"/>
                        <button className="submit" onClick={()=>quizConfirm()}>제출</button>
                    </div>
                </div>
                <div id="rd_arrive" className="absolute rd-arrive hidden">
                    <div className="absolute">
                        <button onClick={()=> setShowR_Modal(true)} className="rd-arrive-btn py-1 px-4 mb-1 rounded-md">ㅤ순록이 돌아왔어요o&#40;≧∇≦o&#41;</button>
                    </div>
                    <div className="arrive-btn-img">
                        <Image src="/img/rd_arrive.png" width='48' height='71'/>
                    </div>
                </div>
            </div>
            <ReinModal isVisible={showR_Modal} onRClose={()=>setShowR_Modal(false)}/>
        </div>
    );
}