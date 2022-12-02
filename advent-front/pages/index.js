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
  //const [isLogin, setIsLogin] = useState(false);

  const loginFormWithKakao = () => {
    window.Kakao.Auth.login({
      success(authObj) {
        console.log("login성공")
        console.log("로그인 토큰 정보 =======");
        console.log(authObj);
        kakaoResponse(authObj);
      },
      fail(err) {
        console.log(err);
      }
    })
  }

  const kakaoResponse = async(authObj)=>{
    let res = await axios.get("http://localhost:8000/rest-auth/kakao/",
      {
        params: 
        {
          code:authObj.access_token
        },
      });
      var datajson = res.data;
      console.log("백서버에서 받아온 사용자 정보 =======");
      console.log(datajson);
      //setIsLogin(true);
      window.sessionStorage.setItem('login', datajson.token);
      console.log("index.js sessionStorage =======");
      console.log(window.sessionStorage);
      router.push({
        pathname: '/main',
        query: { id: datajson.id,
                 name: datajson.name,
                 token: datajson.token},
      },'/main');
      router.push('/main')
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
        <div className="flex flex-col place-items-center flex-1">
            <Image src='/img/wreath.png' width='259' height='282'/>

          <div className="place-items-center items-center pt-10 text-center text-3xl text-white ">
            돌아와! 순록!
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

// export async function getServerSideProps(){
//   // api 이용해서 데이터 불러오기 (async, await으로 기다려주기)
//   const res = await fetch("https://example_site.com/user_data")
  
//   // page에 props로 전달하기위해, json 형식으로 변경해주기
//   const data = res.json()
  
//   // 페이지 props로 전달하기 (json 형식만 가능)
//   return {
//     props: {
//       user_data: data
//     },
//   }
// }
