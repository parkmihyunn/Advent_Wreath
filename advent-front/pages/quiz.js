import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, withRouter } from 'next/router'
import { useRef, useState, useEffect } from 'react';
import ConfettiGenerator from "confetti-js";
import ReinModal from "../components/reindeerModal";
import axios from 'axios';

export default function quiz(){
  /* quiz data */
  const quizzes = [
    {
      question : '몇몇 순록은 얼음이 아닌 눈에 덮인 이끼를 찾아 남쪽으로 무려 OOOkm까지 이동한다',
      correct : '100',
      hints : 'https://www.bbc.com/korean/features-59777860',
    },{
        question : '영국 감시단체는 오염으로 OOOOO 가까워진다고 경고하였다',
        correct : '회복불가능',
        hints : 'https://www.bbc.com/korean/news-61419228'
    }, {
        question : '환경보호 중요성 알리기는 환경보호 실천 방법 리스트 중 몇 번째 목표인가요? ex) 10',
        correct : '25',
        hints : 'https://brunch.co.kr/@hantole/13'
    }, {
        question : '지구의 날은 몇 월 며칠 인가요? ex) 0927',
        correct : '0422',
        hints : 'https://www.korea.kr/news/reporterView.do?newsId=148900968'
    }, {
        question : '32개의 글로벌 패션 기업이 체결한 패션 협약에서 0000년까지 온실가스 배출량 제로의 목표를 잡았다 ex) 2022',
        correct : '2050',
        hints : 'https://hypebeast.kr/2019/8/g-7-fashion-pact-kering-emmanuel-macron-prada-nike-hermes-burberry-chanel'
    }, {
        question : 'ESG에서 G의 의미를 한국어로 입력해주세요',
        correct : '지배구조',
        hints : 'https://www.clickesg.co.kr/ui/overview/descriptionEsg.html'
    }, {
        question : '새활용 특화시설 중 세계 최대 규모로 평가되는 이곳의 이름을 입력해주세요',
        correct : '서울새활용플라자',
        hints : 'https://n.news.naver.com/mnews/article/014/0004933889?sid=102'
    }, {
        question : '사람들이 기후변화를 잘 받아들이지 않는 것은 OOO효과 혹은 자기범주화이론이 작용하기 때문이다',
        correct : '방관자',
        hints : 'https://ecosophialab.com/%EC%99%9C-%EA%B8%B0%ED%9B%84%EC%9C%84%EA%B8%B0%EB%8A%94-%EC%97%AC%ED%83%9C-%ED%95%B4%EA%B2%B0%EC%9D%B4-%EC%95%88-%EB%90%98%EA%B3%A0-%EC%9E%88%EB%8A%94%EA%B0%80-ccc%EC%9D%98-%EB%B9%84%EB%B0%80-3/'
    }, {
        question : '환경문제 해결을 위한 그린피스만의 캠페인 방식 중 세번째는 온라인, 오프라인 시민 OOOOO 프로젝트 진행이다',
        correct : '액티비스트',
        hints : 'https://www.greenpeace.org/korea/report/23590/blog-etc-how_we_do/'
    }, {
        question : '지구 온난화로 먹을 것이 없어진 순록은 살기 위해 소금기가 많은 OO도 먹는 모습을 보이고 있다',
        correct : '해초',
        hints : 'https://www.sciencetimes.co.kr/news/%EB%B6%81%EA%B7%B9-%EC%88%9C%EB%A1%9D-%EC%A7%80%EA%B5%AC-%EC%98%A8%EB%82%9C%ED%99%94-%EC%98%81%ED%96%A5-%EC%8B%9D%EB%8B%A8-%EB%B0%94%EA%BF%94/'
    }
  ]

  /* user 정보 가져오기 */
  const [user, setUser] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if(typeof window !== 'undefined') {
      if(window.sessionStorage.getItem('user') === null){
        router.push('/');
        alert("로그인 후 이용해주세요.");
      } else {
        setUser(JSON.parse(window.sessionStorage.user))
      }
    }
  },[])
  
  /* 유저 퀴즈 갯수 가져오기, quizzes에서 해당하는 퀴즈 꺼내기 */
  const [sNum, setSNum] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    axios.get('http://localhost:3000/api/temp').then(
      res => {
        console.log(res.data);
        setSNum(res.data.solvedNum);
    });
    const tmp = {
      question : quizzes[sNum].question,
      correct : quizzes[sNum].correct,
      hints : quizzes[sNum].hints
    }
    setData(tmp);
  },[])

  /* 오늘 날짜 */
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  /* 정답 컨페티 */
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(()=>{
    if(showConfetti){
      const confettiSettings = { target: 'my-canvas', clock: 40, props:['square'], size:1.3, rotate:true };
      const confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
      console.log("컨페티")
    }
  },[showConfetti])

  /* 사용자 입력 값 */
  const quizInput = useRef();

  /* 정답 확인 */
  function quizConfirm() {
    const quizInput_t = quizInput.current.value.toLowerCase().trim();
    let answerResult = data.correct.toLowerCase().trim();
    if (quizInput_t == answerResult && typeof window !== 'undefined') {
      // 정답 
      /* 백엔드 서버로 solvedQuiz 갯수 증가시킬 post나 get 필요 */
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

  /* 순록 모달 */
  const [showR_Modal, setShowR_Modal] = useState(false);

  return (
    <div className="
        flex flex-col h-screen relative
        overflow-auto bg-cover bg-local
        bg-[url('../public/img/wood_pattern_dark.png')]
    ">
        <Head>
          <title>돌아와! 순록!</title>
          <meta name="description" content="콘텐트 내용" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <canvas id="my-canvas" className="absolute"></canvas>
        <div className="back-btn pl-16 pt-16">
            <Link href="/main">
                <Image src="/img/back_white.png" width='40' height='40'/>
            </Link>
        </div>
        
        <div className="day-text text-white pt-8 pb-4 text-xl">{month}월 {day}일 {sNum+1}번째 퀴즈</div>
        <div className="flex-1 w-full text-center m-auto relative">
          <div className="absolute mt-5 hint-btn">
            <a href={data.hints} className="hint-btn text-xs text-white py-1 px-6 mb-1 bg-green-800 rounded-md">ㅤ힌트 보러가기</a>
          </div>
          <div className="hint-btn-img">
            <Image src="/img/hint_btn.png" width='31' height='36'/>
          </div>
        </div>
        <div className="flex letter-wrapper mt-10">
          <Image className=" w-full max-x-md absolute" src='/img/quiz_back.png' width='430' height='639'/>
          <div className="flex flex-col letter-text1 px-5 relative ">
            <div className="flex text-rose-800 mb-3 max-[374px]:text-xs max-[374px]:mb-0.5 max-[374px]:mt-8">~ 오늘의 퀴즈 ~</div>
            <div id="quiz" className="flex text-base max-[374px]:text-sm">{data.question}</div>
            <div id="quiz_view_t" className="absolute mb-56 quiz_view_t hidden">
              <Image className=""src='/img/closeBtn_Santa.png' width='52' height='54' />
              <div className="">정답입니다 !</div>
            </div>
            <div id="quiz_view_f" className="absolute mb-32 bg-rose-800 text-white hidden max-[374px]:mb-32">
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