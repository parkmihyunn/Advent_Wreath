import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Text, Button, Grid, Row } from "@nextui-org/react";
import axios from 'axios';

const BASE_URL = "http://localhost:8000/"

export const WreathEditModal = ({ getData, removeQ, usertoken, refinedData, index }) => {

    const [isSelect, setIsSelect] = useState([]);

    const wreathPost = async() => {
        console.log(usertoken);
        console.log("+++++++++++++++++++++++++");
        console.log(index)
        console.log(isSelect.src)
        if (isSelect.src == undefined) {
            setIsSelect([])
            alert("변경사항이 없습니다.")
        }
        else {
            let res2 = await axios.post(BASE_URL+"realwreath/", 
            {
              jwt:usertoken,
              index:index,
              src:isSelect.src,
            });
            var datajson2 = res2.data;
            console.log("리얼리스 오너먼트 post =======");
            console.log(datajson2);
            console.log(usertoken);
            console.log("~~~~~~~~~~~~~~~~")
            
            let res = await axios.post(BASE_URL+"ornament/", 
                {
                    jwt:usertoken,
                    src:isSelect.src,
                });
            var datajson = res.data;
            console.log("오너먼트 post =======");
            console.log(datajson);
            alert("저장되었습니다.")
        }
    }

    const onClickHandler = (t1) => {
        setIsSelect({
            src : t1
        })
    }

    useEffect(() => {
        getData(isSelect.src);
    })

    return (
        <Grid.Container
            css={{ borderRadius: "13px", minWidth: "297px", minHeight: "340px" }}>
            <Grid>
                <div className="wreath_edit_orna_group overflow-scroll">
                    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2">
                        {refinedData.map((el) =>
                        <div id="ornaBox" className="wreath_edit_orna_box">
                            <button onClick={() => {
                                onClickHandler(el);
                                console.log("click");
                                removeQ()
                            }} 
                            className="py-4">
                                <Image src={el} width='54' height='54'/>
                            </button>
                        </div>
                        )}
                        <div className="mt-10 mb-10">
                            <button onClick={()=>{wreathPost()}} className="wreath_edit_save col-span-3">
                                <div className="wreath_edit_saveText">변경저장</div>
                            </button>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid.Container>
    );
};

export default WreathEditModal