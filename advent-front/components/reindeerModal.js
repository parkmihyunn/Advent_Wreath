import React from "react";
import { Modal, Image, Link } from "@nextui-org/react";

const ReindeerModal = ({ isVisible, onRClose }) => {
    if(!isVisible) return null;
    
    // 임시 순록 정보
    const reinDeer = [
        {
            body: 'body_0',
            bodydeco : 'bodydeco_0',
            eye : 'eye_0',
            headdeco : 'headdeco_0',
            horn : 'horn_0'
        },{
            body: 'body_1',
            bodydeco : 'bodydeco_1',
            eye : 'eye_1',
            headdeco : 'headdeco_1',
            horn : 'horn_1'
        },
    ]

    const deerNum = reinDeer.length;
    const body = "/img/reindeer/" + reinDeer[deerNum-1].body + ".png";
    const bodydeco = "/img/reindeer/" + reinDeer[deerNum-1].bodydeco + ".png";
    const eye = "/img/reindeer/" + reinDeer[deerNum-1].eye + ".png";
    const headdeco = "/img/reindeer/" + reinDeer[deerNum-1].headdeco + ".png";
    const horn = "/img/reindeer/" + reinDeer[deerNum-1].horn + ".png";

    return (
        <div>
        <Modal css={{background:"transparent"}} noPadding open={isVisible} onClose={onRClose} width={300} height={563} animated={false}>
            <Modal.Header className="flex flex-col items-center text-center w-full mt-36" css={{ position: "absolute", zIndex: "$1"}}>
                <div className="flex flex-col items-center text-center w-full">
                    <div className="relative w-full mt-10">
                        <div className="relative"><Image src={body} width={93} height={103}/></div>
                        <div className="reindeer1 top-[63%] absolute"><Image src={bodydeco} width={45} height={25}/></div>
                        <div className="reindeer1 top-[28%] absolute"><Image src={eye} width={37} height={8}/></div>
                        <div className="reindeer1 top-[-13%] absolute"><Image src={horn} width={67} height={39}/></div>
                        <div className="reindeer1 top-[-2%] absolute"><Image src={headdeco} width={23} height={14}/></div>
                    </div>
                    <div className="relative">
                        <div className="pt-10 font-bold text-xl">N번째 순록이 도착했어요 ♥</div>
                        <div className="pt-8 text-sm">OOO님만의 특별한 순록이예요.</div>
                        <div className="pt-1 text-sm">방문 앞의 순록도감에서 확인할 수 있어요!</div>
                    </div>
                    <Link href="/main/1"><button className="mt-16 px-4 py-2 text-white text-base rounded-2xl bg-red-800">맘에 들어요!</button></Link>
                </div>
            </Modal.Header>
            <Image src="/img/r_modal_bg.png" width={300} height={563}/>
        </Modal>
        </div>
    );
}

export default ReindeerModal