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
    let res = await axios.get(BASE_URL+"rest-auth/kakao/",
      {
        params: 
        {
          nickname:nicknameInput_t,
          jwt:user.token,
        },
      });
      var datajson = res.data;
      console.log("닉네임 설정 후, 다시 받아온 사용자 정보 =======");
      console.log(datajson);
      window.sessionStorage.user = JSON.stringify(datajson);
      console.log("setName.js sessionStorage =======");
      console.log(window.sessionStorage);
      router.push({
        pathname: '/main',
        query: { 
          //id: datajson.id,
          //name: datajson.name,
          name: datajson.nickname,
          value: datajson.token
        },
    },);
  }

  return (
    <div className="
      flex flex-col items-center h-screen
      overflow-auto bg-cover bg-local
      bg-[url('../public/img/wood_pattern.png')]
    ">
      <Head>
        <title>돌아와! 순록!</title>
        <meta name="description" content="콘텐트 내용" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <div className="flex flex-col h-full">
        <div className="top-0">
          <Image src='/img/start_top.png' width='435' height='287'/>
        </div>
        <div className="flex flex-col place-items-center">
            <Image src='/img/wreath.png' width='259' height='282'/>
          <div className="place-items-center items-center pt-10 text-center text-2xl font-bold text-[#2E2D2D] ">
            돌아와! 순록!
          </div>
        </div>
        <div className="flex flex-col text-center m-auto my-10 justify-center w-[300px]">
          <input type="text" id="nickname" ref={nicknameInput}
                 className="h-[33px] w-full border-4 border-white bg-white/[0.3] placeholder:text-white py-5 px-4 rounded-lg"
                 placeholder="사용하실 닉네임을 입력해주세요."
          />
          <div className="text-xs text-white mt-2">최대 6자까지 입력 가능하며, 추후에 변경 가능합니다.</div>
        </div>
        <div className="flex justify-center">
          <button onClick={onSubmit} className ="bg-[#BD2E2E] rounded-xl drop-shadow text-white py-2 px-8 mb-10">
            등록 및 시작하기
          </button>
        </div>
        <div className="flex flex-1 "></div>
        <Layout/>
      </div>
    </div>
  )
}
