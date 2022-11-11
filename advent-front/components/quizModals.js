import React from 'react'
import Link from 'next/link'

const QuizModal = ({ isVisible }) => {

    if(!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
            <div></div>
            <div className="wrapper">
                <div className="lid one"></div>
                <div className="lid two"></div>
                <div className="envelope"></div>
                <Link href="/quiz"><div className="letter">Tap Here!</div></Link>
            </div>
        </div>
    )
}

export default QuizModal