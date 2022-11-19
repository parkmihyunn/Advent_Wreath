import React from "react";
import { Modal, Button, Image, Text, Link } from "@nextui-org/react";

const ReindeerModal = ({ isVisible, onRClose }) => {
    if(!isVisible) return null;

    return (
        <div>
        <Modal css={{background:"transparent"}} noPadding open={isVisible} onClose={onRClose} width={300} height={563} animated={false}>
            <Modal.Header className="flex flex-col items-center text-center w-full mt-36" css={{ position: "absolute", zIndex: "$1"}}>
                <div className="flex flex-col items-center text-center w-full">
                    <Image src="/img/rd_temp.png" width={91} height={136} css={{ position: "absolute" }}/> 
                    <div className="pt-10 font-bold text-xl">N번째 순록이 도착했어요 ♥</div>
                    <div className="pt-8 text-sm">OOO님만의 특별한 순록이예요.</div>
                    <div className="pt-1 text-sm">방문 앞의 순록도감에서 확인할 수 있어요!</div>
                    <Link href="/main"><button className="mt-16 px-4 py-2 text-white text-base rounded-2xl bg-red-800">맘에 들어요!</button></Link>
                </div>
            </Modal.Header>
            <Image src="/img/r_modal_bg.png" width={300} height={563}/>
        </Modal>
        </div>
    );
}

export default ReindeerModal