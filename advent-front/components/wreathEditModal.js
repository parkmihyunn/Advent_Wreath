import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Text, Button, Grid, Row } from "@nextui-org/react";
import { useRouter } from 'next/router'
import axios from 'axios';

const BASE_URL = "http://localhost:8000/"

export const WreathEditModal = ({ wreathSrc, getData }) => {

    const [refinedData, setRefinedData] = useState([]);
    const [isSelect, setIsSelect] = useState([]);

    // useEffect(() => {
    //     axios.get("http://localhost:3000/api/temp")
    //     .then(res => {
    //         const imgNum = res.data[0].wreath.length;
    //         setRefinedData(res.data[0].wreath);
    //     });
    // }, []);

    /* 로그인 확인 */
    const [paramValue, setParamValue] = useState();  // url의 query :string
    const [windowGet, setWindowGet] = useState();  // session에 user라는 이름의 key 있는지 확인용 ( 없으면 null )
    const [user, setUser] = useState([]);  // 토큰, 닉네임, solve_count :object
    const [usertoken, setUsertoken] = useState(); // 유저 토큰 :string
    const [solvedNum, setSolvedNum] = useState(); // 유저가 푼 문제 갯수
    const router = useRouter();

    useEffect(() => {
        if(typeof window !== 'undefined') {
        const params = new URLSearchParams(location.search);
        const t_paramvalue = params.get("value");
        setParamValue(t_paramvalue)
        const t_windowGet = window.sessionStorage.getItem('user');
        setWindowGet( window.sessionStorage.getItem('user') );
        // user key가 session에 존재하고, url value와 token이 동일한 경우에만 허용
        if(t_windowGet !== null && t_paramvalue == JSON.parse(window.sessionStorage.token)){
            setUser(JSON.parse(window.sessionStorage.user));
            setUsertoken(JSON.parse(window.sessionStorage.token));
            setSolvedNum(JSON.parse(window.sessionStorage.solvecount));
        } else {
            window.sessionStorage.clear();
            router.push('/');
            alert("잘못된 접근입니다.");
        }
        }
    },[])
    async function wreathResponse() {
        console.log(usertoken);
        let res = await axios.get(BASE_URL+"ornament/", {
            params: {
                jwt:usertoken
            },
        });
        console.log("백서버에서 가져온 오너먼트")
        var datajson = res.data;
        console.log(datajson);
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