import React, { useEffect, useState } from "react";
import { Modal, Image, Link } from "@nextui-org/react";
import axios from 'axios';

const ReindeerCollectionModal = ({ isVisible, onClose }) => {
  if(!isVisible) return null;

	/* user 정보 가져오기 */
  const [user, setUser] = useState([]);
  useEffect(() => {
	if(typeof window !== 'undefined') {
	  setUser(JSON.parse(window.sessionStorage.user))
	}
  },[])

	/* reindeer data 불러오기 */
	const [refinedData, setRefinedData] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:3000/api/temp")
		.then(res => {
				setRefinedData(res.data[0].reindeers);
		});
	}, []);

	/* 순록 없는 부분 그림자 출력 */
	const rendering = () => {
    const result = [];
    for (let i = 0; i < 10-refinedData.length; i++) {
      result.push(
				<div id="one-white-box" className="bg-white p-2 rounded-md relative">
					<div id="inner-white-box" className="bg-[#D4C7AD] px-[22px] pt-3.5 relative">
						<div className="max-w-[60px] max-h-[90px] min-w-[60px] min-h-[90px]">
							<div className="reindeer1 top-[50%] absolute"><Image src="/img/collection_shadow.png" width={60} height={90}/></div>
						</div>
					</div>
				</div>
			);
    }
    return result;
  };

	return (
		<div>
		<Modal css={{background:"transparent",}} noPadding open={isVisible} onClose={onClose} width={300} height={464} animated={false}>
			<div className="flex flex-col items-center h-[464px] w-[300px] overflow-scroll bg-cover bg-scroll
											bg-[url('../public/img/collection_bg.png')]"
			>
				<div id="collection-top" className="text-base font-[600] mt-16 mb-3.5">
					{user.name}님의 순록 도감
				</div>
				<div id="reindeer-set" className="max-h-[440px] overflow-y-scroll grid grid-cols-2 gap-2 justify-items-center">
					{refinedData.map((v) =>
						<div id="one-white-box" className="bg-white p-2 rounded-md relative">
							<div id="inner-white-box" className="bg-[#D4C7AD] px-[22px] pt-3.5 relative">
								<div className="max-w-[60px] max-h-[90px] min-w-[60px] min-h-[90px]">
									<div className="reindeer1 top-[23%] absolute drop-shadow-xl"><Image src={v.horn} width={43} height={25}/></div>
									<div className="reindeer1 top-[60%] absolute drop-shadow-xl"><Image src={v.body} width={60} height={67}/></div>
									<div className="reindeer1 top-[66%] absolute"><Image src={v.bodydeco} width={22} height={12}/></div>
									<div className="reindeer1 top-[47%] absolute"><Image src={v.eye} width={23} height={5}/></div>
									<div className="reindeer1 top-[26%] absolute"><Image src={v.headdeco} width={17} height={10}/></div>
								</div>
							</div>
						</div>
					)}
					{rendering()}
				</div>
				<div id="collection-bottom" className="py-[4.6px]"/>
			</div>
			<Modal.Footer css={{ margin:"7px 0 0 0", }} justify='center'>
				<button onClick={()=>onClose()} className="rounded-xl font-base text-xl text-white bg-black py-1 px-[120px]">
					닫기
				</button>
			</Modal.Footer>
		</Modal>
		</div>
	);
}

export default ReindeerCollectionModal