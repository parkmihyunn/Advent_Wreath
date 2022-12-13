import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Text, Button, Grid, Row } from "@nextui-org/react";
import { useRouter } from 'next/router'
import axios from 'axios';

const BASE_URL = "http://localhost:8000/"

export const WreathEditModal = ({ wreathSrc, getData, usertoken, removeQ }) => {

    const [refinedData, setRefinedData] = useState([]);
    const [isSelect, setIsSelect] = useState([]);

    // useEffect(() => {
    //     axios.get("http://localhost:3000/api/temp")
    //     .then(res => {
    //         const imgNum = res.data[0].wreath.length;
    //         setRefinedData(res.data[0].wreath);
    //     });
    // }, []);

    async function wreathResponse() {
        console.log(usertoken);
        let res = await axios.get(BASE_URL+"ornament/", {
            params: {
                jwt:usertoken
            },
        });
        console.log("백서버에서 가져온 오너먼트")
        var datajson = res.data;
        console.log(datajson.datadict);
        setRefinedData(datajson.datadict);
    }

    const onClickHandler = (t1) => {
        setIsSelect({
            src : t1
        })
    }

    useEffect(() => {
        wreathSrc = isSelect.src
        // wreathWidth = isSelect.width
        getData(wreathSrc)
    })

    return (
        <Grid.Container
            css={{ borderRadius: "13px", minWidth: "297px", minHeight: "340px" }}>
            <Grid>
                <div className="wreath_edit_orna_group overflow-scroll">
                    <div className="grid grid-cols-3 gap-2">
                        {refinedData.map((el) =>
                        <div className="wreath_edit_orna_box">
                            <button onClick={() => {
                                onClickHandler(el.src);
                                console.log("click");
                                removeQ()
                            }} 
                            className="py-4">
                                <Image src={el.src} width='54' height='54'/>
                            </button>
                        </div>
                        )}
                        <div className="mt-10 mb-10">
                            <button onClick={()=>wreathResponse()} className="wreath_edit_save">
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