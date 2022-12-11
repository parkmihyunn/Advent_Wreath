import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router'
import { Grid } from '@nextui-org/react';

const SocksModal_3 = ({ isVisible, onClose, user, usertoken }) => {

	if(!isVisible) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-75 
										flex justify-center items-center z-0 overflow-auto">
			<div className="socks_back">
				<div className="socks_back2">
					<div className="socks_flower">
						<Image src='/img/ornaments/6.png' width='100' height='100'></Image>
					</div>
					<button className="x-btn text-lg" onClick={()=>onClose()}>✕</button>
					<div className="socks_head">{}님의 소원양말 3</div>
					<div className="socks_center3">
						<div className="socks_img3">
							<Image src='/img/sock_3.png' width='89' height='109.5'></Image>
						</div>
						<div className="socks_none">
							<Grid className="socks_teong">텅~</Grid>
							<Grid className="socks_worry">친구가 아직 고민중인가봐요</Grid>
						</div>
					</div>
					<div className="socks_giftName">비어 있는 소원양말</div>
					<div className="socks_closeBtn">
						<button className="socks_closeWord" onClick={()=>onClose()}>닫기</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SocksModal_3