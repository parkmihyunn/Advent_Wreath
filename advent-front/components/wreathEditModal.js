import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Text, Button, Grid, Row } from "@nextui-org/react";
import axios from 'axios';

export const WreathEditModal = () => {

    const [refinedData, setRefinedData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/temp")
        .then(res => {
            const imgNum = res.data[0].wreath.length;
            // const srcImg = {
            //     src : "/img/ornaments/" +  res.data[0].wreath[imgNum-1].src + ".png",
            //     width : res.data[0].wreath[imgNum-1].width
            // }
            setRefinedData(res.data[0].wreath);
        });
    }, []);

    return (
        <Grid.Container
            css={{ borderRadius: "13px", minWidth: "297px", minHeight: "312px" }}>
            <Grid>
                <div className="wreath_edit_orna_group overflow-auto">
                    <div className="grid grid-cols-3 gap-2">
                        {refinedData.map((el) =>
                        <div className="wreath_edit_orna_box">
                            <div className="py-4">
                                    <Image src={el.src} width={el.width} height='54'/>
                            </div>
                        </div>
                        )}

                        {/* <div className="wreath_orna_box mt-4">
                            <div className="py-4"><Image src='/img/ornaments/candy.png' width='27' height='54'></Image></div>
                        </div>
                        <div className="wreath_orna_box mt-4">
                            <div className="py-4"><Image src='/img/ornaments/santa.png' width='48' height='54'></Image></div>
                        </div>
                        <div className="wreath_orna_box mt-4">
                            <div className="py-4"><Image src='/img/ornaments/dia.png' width='50' height='54'></Image></div>
                        </div>
                        <div className="wreath_orna_box">
                            <div className="py-4"><Image src='/img/ornaments/socks.png' width='33' height='54'></Image></div>
                        </div>
                        <div className="wreath_orna_box">
                            <div className="py-4"><Image src='/img/ornaments/snowman.png' width='45' height='54'></Image></div>
                        </div>
                        <div className="wreath_orna_box">
                            <div className="py-4"><Image src='/img/ornaments/bird.png' width='54' height='54'></Image></div>
                        </div>
                        <div className="wreath_orna_box">
                            <div className="py-4"><Image src='/img/ornaments/star.png' width='54' height='54'></Image></div>
                        </div>
                        <div className="wreath_orna_box">
                            <div className="py-4"><Image src='/img/ornaments/bear.png' width='54' height='54'></Image></div>
                        </div>
                        <div className="wreath_orna_box mb-4">
                            <div className="py-4"><Image src='/img/ornaments/ball.png' width='43' height='54'></Image></div>
                        </div> */}
                    </div>
                </div>
            </Grid>
        </Grid.Container>
    );
};
//
export default WreathEditModal