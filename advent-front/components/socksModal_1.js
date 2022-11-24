import React from 'react'
import Image from 'next/image'
import SocksEditModal from './socksEditModal';
import { withRouter } from 'next/router';

const SocksModal_1 = ({ isVisible, onClose }, props) => {

    const { giftName } = props;

    if(!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 
                        flex justify-center items-center z-0
                        overflow-auto">
            <div className="socks_back">
                <button className="x-btn text-xl" onClick={()=>onClose()}>X</button>
                <div className="socks_head">조승현님의 소원양말 1</div>
                <div className="socks_center">
                    <div className="socks_img">
                        <Image src='/img/sock_1.png' width='89' height='109.5'></Image>
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
                <div className="socks_giftName">
                    {JSON.stringify(giftName)}
                    {giftName}
                </div>
                <div className="socks_closeBtn">
                    <button className="socks_closeWord" onClick={()=>onClose()}>닫기</button>
                </div>
            </div>
        </div>
    )
}
//
export default withRouter(SocksModal_1)
//export default SocksModal_1