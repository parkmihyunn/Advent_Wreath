import React, { useEffect, useState, useLayoutEffect } from 'react';
import Image from 'next/image';
import { Text, Button, Grid, Row } from "@nextui-org/react";
import { useRouter } from 'next/router'
import axios from 'axios';

const BASE_URL = "http://localhost:8000/"

export const WreathEditModal = ({ getData, removeQ, user, usertoken, refinedData }) => {

    const [isSelect, setIsSelect] = useState([]);
    //const [refinedData, setRefinedData] = useState([]);

    // useEffect(() => {
    //     axios.get("http://localhost:3000/api/temp")
    //     .then(res => {
    //         const imgNum = res.data[0].wreath.length;
    //         setRefinedData(res.data[0].wreath);
    //     });
    // }, []);

    // async function wreathResponse() {
    //     console.log(usertoken);
    //     let res = await axios.get(BASE_URL+"ornament/", {
    //         params: {
    //             jwt:usertoken
    //         },
    //     });
    //     console.log("오너먼트")
    //     var datajson = res.data;
    //     console.log(refinedData);
    //     // setRefinedData(datajson);
    // }

    const wreathResponse = async() => {
        console.log(usertoken);
        let res = await axios.post(BASE_URL+"ornament/", 
            {
              jwt:usertoken,
              src:isSelect.src,
            });
        var datajson = res.data;
        console.log("오너먼트 post =======");
        console.log(datajson);
    }

    const onClickHandler = (t1) => {
        setIsSelect({
            src : t1
        })
    }

    useLayoutEffect(() => {
        getData(isSelect.src);
        pickOrna();
    })

    function pickOrna() {
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i] // 각각의 키
            const value = refinedData[key] // 각각의 키에 해당하는 각각의 값
            if(value != -1) {
                picked[i] = value
            }
        }
        console.log("picked");
        console.log(picked);
    }
    var picked = [];
    const keys = Object.keys(refinedData);
    const values = Object.values(refinedData);

    return (
        <Grid.Container
            css={{ borderRadius: "13px", minWidth: "297px", minHeight: "340px" }}>
            <Grid>
                <div className="wreath_edit_orna_group overflow-scroll" 
                    onClick={()=> console.log(picked)}>
                    <div className="grid grid-cols-3 gap-2">
                        {picked.length != 0  ? picked.map((el) =>
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
                        ) : 
                        <div>
                            사용할 수 있는 오너먼트가 없어요ㅠㅠ
                        </div>}
                        <div className="mt-10 mb-10">
                            <button onClick={()=>{wreathResponse()}} className="wreath_edit_save">
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