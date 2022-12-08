import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { Fragment, useState, useRef, useEffect } from 'react'
import { Popover, Modal, useModal, Switch, Spacer } from '@nextui-org/react';
import {Howl, Howler} from 'howler';
import axios from 'axios';
import Layout from '../components/layout'
import QuizModal from '../components/quizModals'
import NoQuizModal from '../components/noQuizModal'
import ReindeerCollectionModal from '../components/reindeerCollectionModal'
import SocksModal_1 from '../components/socksModal_1'
import SocksModal_2 from '../components/socksModal_2'
import SocksModal_3 from '../components/socksModal_3'
import SocksEditModal from '../components/socksEditModal'
import { WreathEditModal } from '../components/wreathEditModal'

const BASE_URL = "http://localhost:8000/"
const DEFAULT_IMG = "/img/ornaments/orna_q.png"

export default function Main(){

  /* 로그인 확인후 유저토큰 sessionStorage에서 가져오기 */
  const [user, setUser] = useState([]);
  const router = useRouter();
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

  /* 로그아웃 */
  const logoutHandler = () => {
    window.Kakao.Auth.logout(function() {
      console.log('로그아웃');
      window.sessionStorage.removeItem('user');
      router.push('/');
    });
  }

  /* 디데이 계산, 사용자가 푼 퀴즈 갯수 불러오기 */
  const [quizzesNum, setQuizzesNum] = useState();
  const [d_Day, setD_Day] = useState();
  useEffect(() => {
    var today = new Date();
    /* 테스트 원하는 경우 목표 날짜 수정후 확인 */
    var dDay = new Date(2022,11,13);
    var gap = dDay.getTime() - today.getTime();
    var result = Math.ceil(gap / (1000 * 60 * 60 * 24));
    setD_Day(result);
    /* (수정필)params로 token주고 res 받아오기로 수정해야함 */
    axios.get("http://localhost:3000/api/temp")
    .then(res => {
      console.log('성공');
      console.log(res.data);
      console.log(res.data[0].ornaments);
      setUserData(res.data[0].ornaments);
      /* (수정필)사용자가 완료한 문제 갯수 가져오기 */
      const solvedNum = res.data[0].solvedNum;
      if(solvedNum+result>=10){
        setQuizzesNum(0)
      } else {
        setQuizzesNum(10-solvedNum-result)
      }
    })
    .catch(res => {
      console.log('실패');
      console.log(res);
    })
  }, []);

  /* Audio */
  const [play, setPlay] = useState(false);
  let snd = new Howl({
    src: ['/audio/Christmas_Is_Coming.mp3'],
    loop: true,
    volume: 0.3,
  });
  useEffect(() => {
    if(play) {  
      snd.play();
      console.log("play실행")
    }
    if(!play){
      Howler.stop();
      console.log("stop실행")
    }
  }, [play]);

  // 예시 코드
  const [값1, set값1] = useState([]);

  //리스에 있는 데이터
  const [userData, setUserData] = useState({});
  //양말편집창 모달
  const { setVisible, bindings } = useModal();
  //이미지 이름 가져오기
  const [giftName, setGiftName] = useState('');
  //이미지 사진 가져오기
  const [imageSrc, setImageSrc] = useState('');
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
          setImageSrc(reader.result);
          resolve();
      };
    });
  };
  
  // useRef를 이용해 input태그에 접근하기
  const imageInput = useRef();
  // 버튼클릭시 input태그에 클릭이벤트를 걸어주기 
  const onCickImageUpload = () => {
      imageInput.current.click();
  };

  const [showQ_Modal, setShowQ_Modal] = useState(false);
  const [showNq_Modal, setShowNq_Modal] = useState(false);
  const [showCollectionModal, setCollectionModal] = useState(false);
  const [showS1_Modal, setShowS1_Modal] = useState(false);
  const [showS2_Modal, setShowS2_Modal] = useState(false);
  const [showS3_Modal, setShowS3_Modal] = useState(false);
  const [showSE_Modal, setShowSE_Modal] = useState(false);

  //리스 오너먼트
  const [wreathSrc, setWreathSrc] = useState([]);
  const getData = (wreathSrc) => {
    setWreathSrc(wreathSrc);
  }
  const [wreathSrc2, setWreathSrc2] = useState([]);
  const getData2 = (wreathSrc2) => {
    setWreathSrc2(wreathSrc2);
  }
  const [wreathSrc3, setWreathSrc3] = useState([]);
  const getData3 = (wreathSrc3) => {
    setWreathSrc3(wreathSrc3);
  }
  const [wreathSrc4, setWreathSrc4] = useState([]);
  const getData4 = (wreathSrc4) => {
    setWreathSrc4(wreathSrc4);
  }
  const [wreathSrc5, setWreathSrc5] = useState([]);
  const getData5 = (wreathSrc5) => {
    setWreathSrc5(wreathSrc5);
  }
  const [wreathSrc6, setWreathSrc6] = useState([]);
  const getData6 = (wreathSrc6) => {
    setWreathSrc6(wreathSrc6);
  }
  const [wreathSrc7, setWreathSrc7] = useState([]);
  const getData7 = (wreathSrc7) => {
    setWreathSrc7(wreathSrc7);
  }
  function removeQ() {
    document.getElementById('qimg').classList.add('invisible');
  }
  function removeQ2() {
    document.getElementById('qimg2').classList.add('invisible');
  }
  function removeQ3() {
    document.getElementById('qimg3').classList.add('invisible');
  }
  function removeQ4() {
    document.getElementById('qimg4').classList.add('invisible');
  }
  function removeQ5() {
    document.getElementById('qimg5').classList.add('invisible');
  }
  function removeQ6() {
    document.getElementById('qimg6').classList.add('invisible');
  }
  function removeQ7() {
    document.getElementById('qimg7').classList.add('invisible');
  }
  
  return (
    <Fragment>
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
        <div className="flex flex-row justify-between items-end">
          <h1 className="flex ml-2 mb-0 relative text-xl font-normal text-left text-white pt-4">돌아와! 순록!</h1>
          <div id="bgm-toggle" className="bg-stone-600/50 flex pl-2.5 pr-1 pb-[3px] rounded-xl mb-1">
            <div className="max-h-[10px]">
              { !play ? 
              <Image src='/img/sound_mute.png' width='13' height='10'/> :
              <Image src='/img/sound_play.png' width='13' height='10'/>
              }
            </div>
            <div className="text-white text-sm px-1.5 pt-[1.5px]">Music</div>
            <Switch checked={false} size="xs" color="success" onChange={(e) => setPlay(!play)}/>
          </div>
        </div>            
        <div className="relative">
          <div className="text-center m-auto relative"> 
            <Image src='/img/door-border_1.png' width='307' height='537'/>
          </div>
          <div className="door-top">
            <div className="flex justify-between">  
              <h1 className="ml-8 text-white text-base font-normal align-bottom">{user.name}님의 소원양말</h1>
              {/* 양말편집창 모달 */}
              <button onClick={()=> setShowSE_Modal(true)}>
                <h1 className="mr-8 mt-1 text-gray-500 text-xs font-normal align-bottom">
                  편집하기
                </h1>
              </button>
              <Modal
                scroll
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
              >
                <div className="fixed inset-0 bg-black bg-opacity-75 
                        flex justify-center items-center z-0
                        overflow-auto">
                  <div className="socks_edit_back">
                    <Modal.Header>
                      <button className="x-btn text-xl" onClick={() => setVisible(false)}>X</button>
                      <div className="socks_edit">{user.name}님의 소원양말 수정</div>
                    </Modal.Header>
                    <div className="socks_edit_socks">
                      <div className="socks_edit_line">
                        <Image src='/img/socks_line.png' width='350' height='50'/>
                      </div>
                      <div className="socks_edit1">
                        <Image src='/img/sock_1.png' width='76.44' height='93.33'/>
                        <Image src='/img/sock_2.png' width='72' height='99.56'/>
                        <Image src='/img/sock_3.png' width='75.56' height='97.78'/>
                      </div>
                      <div className="socks_edit_box1">
                        <div className="socks_edit_smSocks">
                          <div className="socks_edit_img1">
                            <Image src='/img/sock_1.png' width='30' height='40'/>
                          </div>
                          <div className="socks_edit_text">
                            <h1 className="font-normal text-base">첫 번째 소원 양말</h1>
                          </div>
                        </div>
                        <div id="pic_box" className="socks_edit_picBox ">
                          <div className="socks_edit_giftImg">
                            {imageSrc && <img src={imageSrc} alt="preview-img"/>}
                          </div>
                          <div className="socks_edit_ImgChg">
                            <h1 className="text-xs text-center text-white font-normal pt-1">사진변경</h1>
                          </div>
                        </div>
                        <div id="none_box" className="socks_edit_noneBox"
                              onPress={ ()=>
                              {onCickImageUpload()}}
                        >
                          <input type="file" onChange={(e) => {
                            encodeFileToBase64(e.target.files[0]);
                            }} style={{ display: "none" }} ref={imageInput}
                          />
                          <div className="socks_edit_plus">
                            <h1 className="font-light text-4xl">+</h1>
                          </div>
                          <div className="socks_edit_reg"
                                onClick = { () => {onCickImageUpload}}
                          >
                            <input type="file" onChange={(e) => {
                              encodeFileToBase64(e.target.files[0]);
                              }} style={{ display: "none" }} ref={imageInput}
                            />
                            <h1 className="font-bold text-xs">사진등록</h1>
                          </div>
                          {imageSrc && <img src={imageSrc} alt="preview-img"/>}
                        </div>
                        <div className="socks_edit_giftName">
                          <h1 className="font-normal text-xs">품목명:</h1>
                        </div>
                        <input type="text" className="socks_edit_textBox" placeholder="입력해주세요."
                                required 
                                value={giftName}
                                onChange={(e) => setGiftName(e.target.value)}>
                        </input>
                        {/* <p>{ giftName } </p>으로 인풋값 가져올 수 있음 */}
                      </div>
                      <div className="socks_edit_box2">
                        <div className="socks_edit_smSocks">
                          <div className="socks_edit_img2">
                            <Image src='/img/sock_2.png' width='30' height='40'/>
                          </div>
                          <div className="socks_edit_text">
                            <h1 className="font-normal text-base">두 번째 소원 양말</h1>
                          </div>
                        </div>
                        {/* <div className="socks_edit_picBox">
                            <div className="socks_edit_giftImg">
                                <Image src='/img/nintendo.png' width='62.5' height='36.46'></Image>
                            </div>
                        </div> */}
                        <div className="socks_edit_noneBox">
                          <div className="socks_edit_plus">
                            <h1 className="font-light text-4xl">+</h1>
                          </div>
                          <div className="socks_edit_reg">
                            <h1 className="font-bold text-xs">사진등록</h1>
                          </div>
                        </div>
                        <div className="socks_edit_giftName">
                          <h1 className="font-normal text-xs">품목명:</h1>
                        </div>
                        <input type="text" className="socks_edit_textBox" placeholder="입력해주세요."></input>
                        {/* <div className="socks_edit_textBox">
                            <div className="socks_edit_giftNameText">
                                <h1>입력해주세요.</h1>
                            </div>
                        </div> */}
                        {/* <div className="socks_edit_ImgChg">
                            <div className="socks_edit_ImgChgText">
                                <h1>사진변경</h1>
                            </div>
                        </div> */}
                      </div>
                      <div className="socks_edit_box3">
                        <div className="socks_edit_smSocks">
                          <div className="socks_edit_img3">
                            <Image src='/img/sock_3.png' width='30' height='40'/>
                          </div>
                          <div className="socks_edit_text">
                            <h1 className="font-normal text-base">세 번째 소원 양말</h1>
                          </div>
                        </div>
                        {/* <div className="socks_edit_picBox">
                            <div className="socks_edit_giftImg">
                                <Image src='/img/nintendo.png' width='62.5' height='36.46'></Image>
                            </div>
                        </div> */}
                        <div className="socks_edit_noneBox">
                          <div className="socks_edit_plus">
                            <h1 className="font-light text-4xl">+</h1>
                          </div>
                          <div className="socks_edit_reg">
                            <h1 className="font-bold text-xs">사진등록</h1>
                          </div>
                        </div>
                        <div className="socks_edit_giftName">
                          <h1 className="font-normal text-xs">품목명:</h1>
                        </div>
                        <input type="text" className="socks_edit_textBox" placeholder="입력해주세요."></input>
                        {/* <div className="socks_edit_textBox">
                            <div className="socks_edit_giftNameText">
                                <h1>입력해주세요.</h1>
                            </div>
                        </div> */}
                        {/* <div className="socks_edit_ImgChg">
                            <div className="socks_edit_ImgChgText">
                                <h1>사진변경</h1>
                            </div>
                        </div> */}
                        <div className="socks_edit_closeBtn">
                          <button className="socks_closeWord" onClick={()=>onClose()}>저장하기</button>
                        </div>
                        <div className="socks_edit_closeSanta">
                          <Image src='/img/closeBtn_Santa.png' width='56' height='58'></Image>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            <div className="px-10 relative">
              <div className="w-60 text-center m-auto relative">
                <Image src='/img/socks_line.png' width='350' height='50'/>
              </div>
              <div className="sock-1">
                <button onClick={()=> setShowS1_Modal(true)}>
                  <Image src='/img/sock_1.png' width='83.95' height='102.5'/>
                </button>
              </div>
              <div className="sock-2">
                <button onClick={()=> setShowS2_Modal(true)}>
                  <Image src='/img/sock_2.png' width='79.07' height='109.33p'/>
                </button>
              </div>
              <div className="sock-3">
                <button onClick={()=> setShowS3_Modal(true)}>
                  <Image src='/img/sock_3.png' width='82.98' height='107.38'/>
                </button>
              </div>
            </div>
            <div className="pt-16 mt-6 place-items-center flex-1">
              <Image src='/img/wreath_non_2.png' quality='90' width='280' height='280'/>
              <div className="wreath-text">
                  <Image src='/img/christmas_text.png' width='97' height='25'/>
                  {d_Day > 0
                  ?
                    <h1 className="text-center text-xl font-bold">
                      D - {d_Day}
                    </h1>
                  :
                    <h1 className="text-center text-xl font-bold">
                      D - Day
                    </h1>
                  }
              </div>
              <div className="wreath_edit_center">
                  {/* 1번 */}
                  <Popover>
                      <Popover.Trigger>
                          <button id = "qimg" onClick={removeQ} className="wreath_orna_q1">
                              <Image src={userData[0]?.src ? userData[0].src : DEFAULT_IMG} width={userData[0]?.width ? userData[0]?.width : 29} height={userData[0]?.height ? userData[0]?.height : 30}/>
                          </button>
                      </Popover.Trigger> 
                      <Popover.Content>
                          <WreathEditModal getData={getData}/>
                      </Popover.Content>
                  </Popover>
                  <Popover>
                      <Popover.Trigger>
                          <button id = "qimg" onClick={removeQ} className="wreath_orna_q1">
                              <Image src={wreathSrc} width='54' height='54'></Image>
                          </button>
                      </Popover.Trigger> 
                      <Popover.Content>
                          <WreathEditModal getData={getData}/>
                      </Popover.Content>
                  </Popover>
                  {/* 2번 */}
                  <Popover>
                      <Popover.Trigger>
                          <button id = "qimg2" onClick={removeQ2} className="wreath_orna_q2">
                              <Image src={userData[1]?.src ? userData[1].src : DEFAULT_IMG} width={userData[1]?.width ? userData[1]?.width : 29} height={userData[1]?.height ? userData[1]?.height : 30}/>
                          </button>
                      </Popover.Trigger>
                      <Popover.Content>
                          <WreathEditModal getData={getData2}/>
                      </Popover.Content>
                  </Popover>
                  <Popover>
                      <Popover.Trigger>
                          <button id = "qimg2" onClick={removeQ2} className="wreath_orna_q2">
                              <Image src={wreathSrc2} width='54' height='54'></Image>
                          </button>
                      </Popover.Trigger> 
                      <Popover.Content>
                          <WreathEditModal getData={getData2}/>
                      </Popover.Content>
                  </Popover>
                  {/* 3번 */}
                  <Popover>
                      <Popover.Trigger>
                          <button id = "qimg3" onClick={removeQ3} className="wreath_orna_q3">
                              <Image src={userData[1]?.src ? userData[1].src : DEFAULT_IMG} width={userData[1]?.width ? userData[1]?.width : 29} height={userData[1]?.height ? userData[1]?.height : 30}/>
                          </button>
                      </Popover.Trigger>
                      <Popover.Content>
                          <WreathEditModal getData={getData3}/>
                      </Popover.Content>
                  </Popover>
                  <Popover>
                      <Popover.Trigger>
                          <button id = "qimg3" onClick={removeQ3} className="wreath_orna_q3">
                              <Image src={wreathSrc3} width='54' height='54'></Image>
                          </button>
                      </Popover.Trigger> 
                      <Popover.Content>
                          <WreathEditModal getData={getData3}/>
                      </Popover.Content>
                  </Popover>
                  {/* 4번 */}
                  <Popover>
                      <Popover.Trigger>
                          <button id = "qimg4" onClick={removeQ4} className="wreath_orna_q4">
                              <Image src={userData[1]?.src ? userData[1].src : DEFAULT_IMG} width={userData[1]?.width ? userData[1]?.width : 29} height={userData[1]?.height ? userData[1]?.height : 30}/>
                          </button>
                      </Popover.Trigger>
                      <Popover.Content>
                          <WreathEditModal getData={getData4}/>
                      </Popover.Content>
                  </Popover>
                  <Popover>
                      <Popover.Trigger>
                          <button id = "qimg4" onClick={removeQ4} className="wreath_orna_q4">
                              <Image src={wreathSrc4} width='54' height='54'></Image>
                          </button>
                      </Popover.Trigger> 
                      <Popover.Content>
                          <WreathEditModal getData={getData4}/>
                      </Popover.Content>
                  </Popover>
                  {/* 5번 */}
                  <Popover>
                      <Popover.Trigger>
                          <button id = "qimg5" onClick={removeQ5} className="wreath_orna_q5">
                              <Image src={userData[1]?.src ? userData[1].src : DEFAULT_IMG} width={userData[1]?.width ? userData[1]?.width : 29} height={userData[1]?.height ? userData[1]?.height : 30}/>
                          </button>
                      </Popover.Trigger>
                      <Popover.Content>
                          <WreathEditModal getData={getData}/>
                      </Popover.Content>
                  </Popover>
                  <Popover>
                      <Popover.Trigger>
                          <button id = "qimg5" onClick={removeQ5} className="wreath_orna_q5">
                              <Image src={wreathSrc5} width='54' height='54'></Image>
                          </button>
                      </Popover.Trigger> 
                      <Popover.Content>
                          <WreathEditModal getData={getData5}/>
                      </Popover.Content>
                  </Popover>
                  {/* 6번 */}
                  <Popover>
                      <Popover.Trigger>
                          <button id = "qimg6" onClick={removeQ6} className="wreath_orna_q6">
                              <Image src={userData[1]?.src ? userData[1].src : DEFAULT_IMG} width={userData[1]?.width ? userData[1]?.width : 29} height={userData[1]?.height ? userData[1]?.height : 30}/>
                          </button>
                      </Popover.Trigger>
                      <Popover.Content>
                          <WreathEditModal getData={getData}/>
                      </Popover.Content>
                  </Popover>
                  <Popover>
                      <Popover.Trigger>
                          <button id = "qimg6" onClick={removeQ6} className="wreath_orna_q6">
                              <Image src={wreathSrc6} width='54' height='54'></Image>
                          </button>
                      </Popover.Trigger> 
                      <Popover.Content>
                          <WreathEditModal getData={getData6}/>
                      </Popover.Content>
                  </Popover>
                  {/* 7번 */}
                  <Popover>
                      <Popover.Trigger>
                          <button id = "qimg7" onClick={removeQ7} className="wreath_orna_q7">
                              <Image src={userData[1]?.src ? userData[1].src : DEFAULT_IMG} width={userData[1]?.width ? userData[1]?.width : 29} height={userData[1]?.height ? userData[1]?.height : 30}/>
                          </button>
                      </Popover.Trigger>
                      <Popover.Content>
                          <WreathEditModal getData={getData}/>
                      </Popover.Content>
                  </Popover>
                  <Popover>
                      <Popover.Trigger>
                          <button id = "qimg7" onClick={removeQ7} className="wreath_orna_q7">
                              <Image src={wreathSrc7} width='54' height='54'></Image>
                          </button>
                      </Popover.Trigger> 
                      <Popover.Content>
                          <WreathEditModal getData={getData7}/>
                      </Popover.Content>
                  </Popover>
              </div>
            </div>
            <div className="door-handle"><Image src='/img/handle.png' width='76' height='103'/></div>
            <div className="collection">
              <button onClick={()=> setCollectionModal(true)} >
                <Image src='/img/collection.png' quality='100' width='95' height='131'/>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full relative top-5">
          <div className="w-full text-center m-auto relative">
            <Image src='/img/door-dorder_2.png' width='307' height='165'/>
          </div>
          <div className="quiz-black">
            <Image src='/img/quiz_black.png' width='191' height='10'/>
          </div>
          <div className="quiz-white">
            <Image src='/img/quiz_white.png' width='149' height='40'/>
          </div>
          <div className="quiz-text">
            <button onClick={quizzesNum!==0 ? ()=> setShowQ_Modal(true) : ()=> setShowNq_Modal(true)}>
              <h1 className="pt-2 text-center font-normal text-xl">오늘의 퀴즈</h1>
            </button>
          </div>
          {quizzesNum !== 0 ? 
            <div className="quiz-notification bg-red-600 rounded-full">
              <div className="text-white text-sm font-normal">{quizzesNum}</div>
            </div> :
            null
          }
          <div className="quiz-deco"><Image src='/img/quiz_deco.png' width='272' height='89'/></div>
        </div>
        <button onClick={logoutHandler} className="flex flex-1 justify-center items-end mt-6 text-white"><p className="text-sm">로그아웃</p></button>
        <Layout/>
        <QuizModal isVisible={showQ_Modal} onClose={()=>setShowQ_Modal(false)}/>
        <NoQuizModal  isVisible={showNq_Modal} onClose={()=>setShowNq_Modal(false)}/>
        <ReindeerCollectionModal isVisible={showCollectionModal} onClose={()=>setCollectionModal(false)}/>
        <SocksModal_1 isVisible={showS1_Modal} onClose={()=>setShowS1_Modal(false)}/>
        <SocksModal_2 isVisible={showS2_Modal} onClose={()=>setShowS2_Modal(false)}/>
        <SocksModal_3 isVisible={showS3_Modal} onClose={()=>setShowS3_Modal(false)}/>
        <SocksEditModal isVisible={showSE_Modal} onClose={()=>setShowSE_Modal(false)} set값1={set값1}/>
      </div>
    </div>
    </Fragment>
  );
}