import React, { useState, useRef } from 'react'
import Image from 'next/image';
import SocksModal_1 from './socksModal_1';
import { withRouter } from 'next/router';

const SocksEditModal = ({ isVisible, onClose }) => {
    
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

    function imgRegist() {
        if (imageSrc == null) {
            document.getElementById('pic_box').classList.add('invisible');
        }
        else {
            document.getElementById('none_box').classList.add('hidden');
        }
    }

    if(!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 
                flex justify-center items-center z-0
                overflow-auto">
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
                            onClick={ ()=>
                            {onCickImageUpload()
                            imgRegist()}}>
                            <input type="file" onChange={(e) => {
                                encodeFileToBase64(e.target.files[0]);
                                }} style={{ display: "none" }} ref={imageInput}/>
                            <div className="socks_edit_plus">
                                <h1 className="font-light text-4xl">+</h1>
                            </div>
                            <div className="socks_edit_reg"
                                onClick = { () => {onCickImageUpload}}>
                                <input type="file" onChange={(e) => {
                                encodeFileToBase64(e.target.files[0]);
                                }} style={{ display: "none" }} ref={imageInput}/>
                                <h1 className="font-bold text-xs" >사진등록</h1>
                            </div>
                            {imageSrc && <img src={imageSrc} alt="preview-img"/>}
                        </div>
                        <div className="socks_edit_giftName">
                            <h1 className="font-normal text-xs">품목명:</h1>
                        </div>
                        <input type="text" className="socks_edit_textBox" placeholder="입력해주세요."
                                required 
                                value={giftName}
                                onChange={(e) => setGiftName(e.target.value)} >
                        </input>
                        <SocksModal_1 giftName={giftName}/>
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
    );
}
//
//export default withRouter(SocksEditModal)
export default SocksEditModal