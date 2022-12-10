import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import { useRouter } from 'next/router'
import { useState, useRef, useEffect } from 'react'
import axios from 'axios';

const BASE_URL = "http://localhost:8000/"

export default function setName() {
  const router = useRouter();
  const [user, setUser] = useState([]);
  const nicknameInput = useRef();
  
  /* 로그인 확인 */
  useEffect(() => {
    if(typeof window !== 'undefined') {
      if(window.sessionStorage.getItem('user') !== null){
        setUser(JSON.parse(window.sessionStorage.user))
        } else {
        router.push('/');
        alert("로그인 후 이용해주세요.");
      }
    } 
  },[])

  /* 등록 및 시작하기 버튼 클릭 함수 */
  const onSubmit = async()=>{
    const nicknameInput_t = nicknameInput.current.value;
    const token = user.token
    let res = await axios.post(BASE_URL+"changenickname/",
      {
        nickname:nicknameInput_t,
        jwt:user.token,
      });
      var datajson = res.data;
      console.log("닉네임 설정 후, 다시 받아온 사용자 정보 =======");
      console.log(datajson);
      window.sessionStorage.user = JSON.stringify(datajson);
      window.sessionStorage.token = token;
      console.log("setName.js sessionStorage =======");
      console.log(window.sessionStorage);
      router.push({
        pathname: '/main',
        query: { 
          //id: datajson.id,
          //name: datajson.name,
          //name: datajson.nickname,
          value: token
        },
    },);
  }

  return (
    <div className="
      flex flex-col items-center h-screen
      overflow-auto bg-auto bg-center bg-local pt-[54px]
      bg-[url('../public/img/start_bg.png')]
    ">
      <Head>
        <title>돌아와 순록!</title>
        <meta name="description" content="콘텐트 내용" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      <div className="flex flex-col justify-between h-screen">

        <div id="top-title" className="flex flex-col w-full justify-center h-[155px] relative">
          <div className="absolute left-[-2%] top-[0%]">
            <Image src='/img/start_deco.png' width='320' height='121.72'/>
          </div>
          <div className="font-['yg-jalnan'] place-items-center items-center pt-[75px] text-center text-[41px] text-white">
            돌아와 순록!
          </div>
          <div className="font-['GmarketSansMedium'] place-items-center items-center pt-2 text-center text-[13px] text-white font-light">
            크리스마스를 기다리며 매일매일 퀴즈를 맞춰보세요!
          </div>
        </div>

        <div id="middle-artwork" className="mt-[47px] mb-[20px]">
          <Image src='/img/start_artwork.png' width='320' height='339.51'/>
          <div className="place-items-center items-center pt-3 text-center text-[17px] text-[#13277A] font-bold">
            " 사라진 순록을 찾아주세요! " 
          </div>
        </div>

        <div id="set-name-box" className="w-full flex flex-col justify-center relative">
          <input type="text" id="nickname" ref={nicknameInput}
                 className="h-[33px] w-full border-4 bg-[#D9DFF8]/[0.3] placeholder:text-[#7789D3] py-5 px-4 rounded-lg"
                 placeholder="사용하실 닉네임을 입력해주세요."
          />
          <div className="text-[12px] text[#747474] mt-2 mb-[20px] ml-4">최대 6자 까지 입력 가능하며, 추후에 변경 가능합니다.</div>
          <button onClick={onSubmit} className ="flex h-[55px] mb-[40px] rounded-xl items-center bg-[#BD2E2E] text-white font-bold text-[18px] justify-center margin-auto">
            등록 및 시작하기
          </button>
          <Layout/>
        </div>

      </div>
    </div>
  )
}
