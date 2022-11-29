import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import axios from 'axios';

export default function Home() {
  // const [user_id, setUserId] = useState();
  // const [nickName, setNickName] = useState();
  const router = useRouter();

  const loginFormWithKakao = () => {
    window.Kakao.Auth.login({
      success(authObj) {
        console.log("login성공")
        console.log(authObj);
        //window.localStorage.setItem('token', authObj.access_token);
        let res = axios.get("http://localhost:8000/rest-auth/kakao/",
          {
            params: {
              code:authObj.access_token
            },
          }
        );
        console.log(res);
        /* 백엔드 서버에서 사용자 정보 받아와서 main으로 넘기기 */
        router.push('/main');
      },
      fail(err) {
        console.log(err);
      }
    })
  }
  
  return (
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
        <div className="top-0">
          <Image src='/img/start_top.png' width='435' height='287'/>
        </div>
        <div className="flex flex-col place-items-center flex-1">
            <Image src='/img/wreath.png' width='259' height='282'/>

          <div className="place-items-center items-center pt-10 text-center text-3xl text-white ">
            서비스 이름
          </div>
        </div>
        <div className="w-full relative mt-10">
          <div className="w-full text-center m-auto relative">
            <Image src='/img/start_btn.png' width='245' height='62'/>
          </div>
          <button onClick={loginFormWithKakao} className ="start-text flex flex-col py-5 items-center text-white text-lg">
              시작하기
          </button>
        </div>
        <Layout/>
      </div>
    </div>
  )
}
