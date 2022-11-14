import React from 'react'
import Image from 'next/image';

const SocksModal_2 = ({ isVisible, onClose }) => {

    if(!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 
                        flex justify-center items-center z-0">
            <div className="socks_back">
            <button className="x-btn text-xl" onClick={()=>onClose()}>X</button>
            </div>
            <div className="socks_head">조승현님의 소원양말 2</div>
            <div className="socks_center2">
                <div className="socks_img2">
                    <Image src='/img/sock_2.png' width='89' height='109.5'></Image>
                </div>
                <div className="socks_giftImg">
                    <Image src='/img/nintendo.png' width='192' height='112'></Image>
                </div>
            </div>
            <div className="socks_eyeNview">
                <div className="socks_eye">
                    <Image src='/img/eye.png' width='24' height='24'></Image>
                </div>
                <div className="socks_view">617</div>
            </div>
            <div className="socks_giftName">닌텐도 스위치 라이트</div>
            <div className="socks_closeBtn">
                <button className="socks_closeWord" onClick={()=>onClose()}>닫기</button>
            </div>
        </div>
    )
}
//
export default SocksModal_2