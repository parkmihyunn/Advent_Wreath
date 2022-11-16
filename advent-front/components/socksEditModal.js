import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

const SocksEditModal = ({ isVisible, onClose }) => {

    if(!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 
                        flex justify-center items-center z-0">
            <div className="socks_edit_back">
                <button className="x-btn text-xl" onClick={()=>onClose()}>X</button>
                <div className="socks_edit">조승현님의 소원양말 수정</div>
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
                                <Image src='/img/sock_1.png' width='35' height='35'/>
                            </div>
                            <div className="socks_edit_text">
                                <h1>첫 번째 소원 양말</h1>
                            </div>
                        </div>
                        <div className="socks_edit_picBox">
                            <div className="socks_edit_giftImg">
                                <Image src='/img/nintendo.png' width='62.5' height='36.46'></Image>
                            </div>
                        </div>
                        <div className="socks_edit_giftName">
                            <h1>품목명:</h1>
                        </div>
                        <div className="socks_edit_textBox">
                            <div className="socks_edit_giftNameText">
                                <h1>닌텐도 스위치 라이트</h1>
                            </div>
                        </div>
                        <div className="socks_edit_ImgChg">
                            <div className="socks_edit_ImgChgText">
                                <h1>사진변경</h1>
                            </div>
                        </div>
                    </div>
                    <div className="socks_edit_box2">
                        <div className="socks_edit_smSocks">
                            <div className="socks_edit_img2">
                                <Image src='/img/sock_2.png' width='35' height='35'/>
                            </div>
                            <div className="socks_edit_text">
                                <h1>두 번째 소원 양말</h1>
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
                                <h1 className="font-bold">사진등록</h1>
                            </div>
                        </div>
                        <div className="socks_edit_giftName">
                            <h1>품목명:</h1>
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
                                <Image src='/img/sock_3.png' width='35' height='35'/>
                            </div>
                            <div className="socks_edit_text">
                                <h1>세 번째 소원 양말</h1>
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
                                    <h1 className="font-bold">사진등록</h1>
                                </div>
                            </div>
                            <div className="socks_edit_giftName">
                                <h1>품목명:</h1>
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
                </div>
                <div className="socks_edit_closeBtn">
                    <button className="socks_closeWord" onClick={()=>onClose()}>저장하기</button>
                </div>
                <div className="socks_edit_closeSanta">
                    <Image src='/img/closeBtn_Santa.png' width='56' height='58'></Image>
                </div>
            </div>
        </div>
    )
}
//
export default SocksEditModal