import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

const SocksModal_3 = ({ isVisible, onClose }) => {

    if(!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 
                        flex justify-center items-center z-0">
            <div className="socks_back">
            <button className="x-btn text-xl" onClick={()=>onClose()}>X</button>
            </div>
            <div className="socks_head">조승현님의 소원양말 3</div>
            <div className="socks_center3">
                <div className="socks_img3">
                    <Image src='/img/sock_3.png' width='89' height='109.5'></Image>
                </div>
                <div className="socks_teong">텅~</div>
                <div className="socks_worry">친구가 아직 고민중인가봐요</div>
                {/* <div className="socks_giftImg">
                    <Image src='/img/nintendo.png' width='192' height='112'></Image>
                </div> */}
            </div>
            <div className="socks_eyeNview">
                <div className="socks_eye">
                    <Image src='/img/eye.png' width='24' height='24'></Image>
                </div>
                <div className="socks_view">5</div>
            </div>
            <div className="socks_giftName">비어 있는 소원양말</div>
            <div className="socks_closeBtn">
                <button className="socks_closeWord" onClick={()=>onClose()}>닫기</button>
            </div>
        </div>
    )
}
//
export default SocksModal_3