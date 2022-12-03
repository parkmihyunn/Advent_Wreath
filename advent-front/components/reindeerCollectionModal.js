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

	return (
		<div>
		<Modal css={{background:"transparent"}} noPadding open={isVisible} onClose={onClose} width={300} height={460} animated={false}>
			<div className="flex flex-col items-center h-[460px] w-[300px] overflow-scroll bg-cover bg-scroll
											bg-[url('../public/img/collection_bg.png')]"
			>
				<div id="collection-top" className="bg-neutral-300 rounded-3xl py-1.5 px-4 text-base font-normal mt-16 mb-4">
					{user.name}님의 순록 도감
				</div>
				<div id="reindeer-set" className="max-h-[400px] overflow-y-scroll grid grid-cols-2 gap-2 justify-items-center">
					{refinedData.map((v) =>
						<div className="bg-neutral-100 p-2 relative">
							<div className="bg-neutral-300 px-5 pt-10 relative">
								<div className="max-w-[74px] max-h-[111px] min-w-[74px] min-h-[111px]">
									<div className="reindeer1 top-[20%] absolute drop-shadow-xl"><Image src={v.horn} width={67} height={39}/></div>
									<div className="reindeer1 top-[60%] absolute drop-shadow-xl"><Image src={v.body} width={93} height={103}/></div>
									<div className="reindeer1 top-[68%] absolute"><Image src={v.bodydeco} width={45} height={25}/></div>
									<div className="reindeer1 top-[44%] absolute"><Image src={v.eye} width={37} height={8}/></div>
									<div className="reindeer1 top-[24%] absolute"><Image src={v.headdeco} width={23} height={14}/></div>
								</div>
							</div>
						</div>
					)}
				</div>
				<div id="collection-bottom" className="py-2"/>
			</div>
		</Modal>
		</div>
	);
}

export default ReindeerCollectionModal