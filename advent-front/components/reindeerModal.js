import React from "react";
import { Modal, Button, Image, Text, Link } from "@nextui-org/react";

const ReindeerModal = ({ isVisible, onRClose }) => {
    if(!isVisible) return null;

    return (
        <div>
        <Modal noPadding open={isVisible} onClose={onRClose}>
            <Modal.Header
            css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
            >
            <Text color="#363449">
                Photo by{" "}
                <Link
                color
                rel="noopener noreferrer"
                target="_blank"
                href="https://unsplash.com/@anniespratt"
                >
                Annie Spratt
                </Link>{" "}
                on{" "}
                <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://unsplash.com/s/visual/ef7937f3-0d44-43eb-b992-28050748f999?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >
                Unsplash
                </Link>
            </Text>
            </Modal.Header>
            <Modal.Body>
            <Image
                showSkeleton
                src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                width={400}
                height={490}
            />
            </Modal.Body>
        </Modal>
        </div>
    );
}

export default ReindeerModal

/*
<div className="r-modal-text w-full flex flex-col justify-center items-center absolute">
            <div className="absolute">
                <Image className="overflow-y-scroll absolute" src='/img/r_modal_bg.png' width='300' height='563'/>
            </div>
            <div className="mt-40">
                    N번째 순록이 도착했어요 ♥
            </div>
            <div>OOO님만의 특별한 순록이예요.</div>              
            <div>방문 앞의 순록도감에서 확인할 수 있어요!</div>
            <Link href="/main"><button>확인</button></Link>
</div>
*/