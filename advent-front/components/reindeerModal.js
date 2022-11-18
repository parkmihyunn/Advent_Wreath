import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ReindeerModal = ({ isVisible }) => {

    if(!isVisible) return null;

    return (
        <>
        <div className="fixed inset-0 bg-black bg-opacity-50 overflow-auto
                        flex flex-col justify-center items-center z-0">
            <div/>
            <div className="r-modal-back flex overflow-y-scroll min-h-fit">
                <Image ClassName="w-full max-x-md absolute" layout="fixed" src='/img/r_modal_bg.png' width='300' height='563'/>
            </div>
            <div/>
        </div>
        </>
    )
}

export default ReindeerModal