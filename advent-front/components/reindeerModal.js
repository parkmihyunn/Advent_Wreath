import Link from 'next/link'
import React, { useEffect, useState } from "react";
import { Modal, Image } from "@nextui-org/react";
import axios from 'axios';

/* 만약에 image src가 없어서 빈 이미지가 아니라 뭔가 에러 이미지가뜨면 Image 태그 img로 변경 */
const fallBackSrc = "/img/reindeer/null_callback.png"   

const ReindeerModal = ({ isVisible, onRClose, usertoken, nickname, solvedNum, deerData }) => {
  if(!isVisible) return null;

  return (
    <div>
    <Modal css={{background:"transparent"}} noPadding open={isVisible} preventClose onClose={onRClose} width={300} height={563} animated={false}>
      <Modal.Header className="flex flex-col items-center text-center w-full mt-36" css={{ position: "absolute", zIndex: "$1"}}>
        <div className="flex flex-col items-center text-center w-full">
          <div className="relative w-full mt-10">
            <div className="relative"><Image src={ deerData.m_body_color} width={93} height={103} onError={(e) => (e.currentTarget.src = fallBackSrc)}/></div>
            <div className="reindeer1 top-[63%] absolute"><Image src={ deerData.m_body_deco} width={45} height={25} onError={(e) => (e.currentTarget.src = fallBackSrc)}/></div>
            <div className="reindeer1 top-[28%] absolute"><Image src={ deerData.m_eye} width={37} height={8} onError={(e) => (e.currentTarget.src = fallBackSrc)}/></div>
            <div className="reindeer1 top-[-13%] absolute"><Image src={ deerData.m_horn} width={67} height={39} onError={(e) => (e.currentTarget.src = fallBackSrc)}/></div>
            <div className="reindeer1 top-[-2%] absolute"><Image src={ deerData.m_hair} width={23} height={14} onError={(e) => (e.currentTarget.src = fallBackSrc)}/></div>
          </div>
          <div className="relative">
            <div className="pt-10 font-bold text-xl">{solvedNum}번째 순록이 도착했어요 ♥</div>
            <div className="pt-8 text-sm">{nickname}님만의 특별한 순록이예요.</div>
            <div className="pt-1 text-sm">방문 앞의 순록도감에서 확인할 수 있어요!</div>
          </div>
            <Link href={{
              pathname: '/main',
              query: { value:usertoken }, }} as={`/main?value=${usertoken}`}
            >
              <button className="mt-16 px-4 py-2 text-white text-base rounded-2xl bg-red-800">맘에 들어요!</button>
            </Link>
        </div>
      </Modal.Header>
      <Image src="/img/r_modal_bg.png" width={300} height={563}/>
    </Modal>
    </div>
  );
}

export default ReindeerModal