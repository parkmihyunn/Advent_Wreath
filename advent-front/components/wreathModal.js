import React, { useState } from 'react'
import Image from 'next/image';
import Orna1 from './orna1';

const LeaseModal = ({ isVisible, onClose }) => {

    const [file, setFile] = useState();

    function orna() {
        document.getElementById('q1').classList.remove('Image');
    }

    if(!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 
                        flex justify-center items-center z-0
                        overflow-auto">
            <div className="wreath_back">
                <button className="wreath_x_btn text-xl" onClick={()=>onClose()}>X</button>
                <div className="wreath_save_btn">
                    <h1 className="text-xs text-center text-white font-normal pt-1">변경저장</h1>
                </div>
                <div className="wreath_head">조승현님의 리스 편집하기</div>
                <div className="wreath_center">
                    <Image id = "q1" src='/img/wreath_non.png' width='267' height='253'></Image>
                    <div className="wreath_christmas_text">
                        <Image src='/img/christmas_text_w.png' width='97' height='25'></Image>
                    </div>
                    <div className="wreath_orna_q1">
                        <Image src='/img/ornaments/orna_q.png' width='29' height='30'></Image>
                    </div>
                    <div className="wreath_orna_q2">
                        <Image src='/img/ornaments/orna_q.png' width='29' height='30'></Image>
                    </div>
                    <div className="wreath_orna_q3">
                        <Image src='/img/ornaments/orna_q.png' width='29' height='30'></Image>
                    </div>
                    <div className="wreath_orna_q4">
                        <Image src='/img/ornaments/orna_q.png' width='29' height='30'></Image>
                    </div>
                    <div className="wreath_orna_q5">
                        <Image src='/img/ornaments/orna_q.png' width='29' height='30'></Image>
                    </div>
                    <div className="wreath_orna_q6">
                        <Image src='/img/ornaments/orna_q.png' width='29' height='30'></Image>
                    </div>
                    <div className="wreath_orna_q7">
                        <Image src='/img/ornaments/orna_q.png' width='29' height='30'></Image>
                    </div>
                </div>

                <div className="wreath_orna_group overflow-auto">
                    <div className="grid grid-cols-3 gap-2">
                        <div className="wreath_orna_box mt-4">
                        <button onClick={orna}>
                            <div className="py-4"><Image src='/img/ornaments/candy.png' width='27' height='54'></Image></div>
                        </button>
                        </div>
                        <div className="wreath_orna_box mt-4">
                            <div className="py-4"><Image src='/img/ornaments/santa.png' width='48' height='54'></Image></div>
                        </div>
                        <div className="wreath_orna_box mt-4">
                            <div className="py-4"><Image src='/img/ornaments/dia.png' width='50' height='54'></Image></div>
                        </div>
                        <div className="wreath_orna_box">
                            <div className="py-4"><Image src='/img/ornaments/socks.png' width='33' height='54'></Image></div>
                        </div>
                        <div className="wreath_orna_box">
                            <div className="py-4"><Image src='/img/ornaments/snowman.png' width='45' height='54'></Image></div>
                        </div>
                        <div className="wreath_orna_box">
                            <div className="py-4"><Image src='/img/ornaments/bird.png' width='54' height='54'></Image></div>
                        </div>
                        <div className="wreath_orna_box">
                            <div className="py-4"><Image src='/img/ornaments/star.png' width='54' height='54'></Image></div>
                        </div>
                        <div className="wreath_orna_box">
                            <div className="py-4"><Image src='/img/ornaments/bear.png' width='54' height='54'></Image></div>
                        </div>
                        <div className="wreath_orna_box">
                            <div className="py-4"><Image src='/img/ornaments/ball.png' width='43' height='54'></Image></div>
                        </div>
                    </div>
                </div>
    
                {/* <div className="socks_giftName">닌텐도 스위치 라이트</div>
                <div className="socks_closeBtn">
                    <button className="socks_closeWord" onClick={()=>onClose()}>닫기</button>
                </div> */}
            </div>
        </div>
    )
}
//
export default LeaseModal