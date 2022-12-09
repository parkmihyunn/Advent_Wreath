import type { NextApiRequest, NextApiResponse } from "next";

/* 유저는 두가지의 Ornaments를 관리할 interface가 필요할 것으로 생각됨.
   보유하고 있는 ornaments를 관리하는 interface, main에 띄워야 할 ornaments를 관리할 interface*/

interface ReinDeer { 
  body: string;
  bodydeco : string;
  eye : string;
  headdeco : string;
  horn : string;
}

interface Wreath { 
  src: string;
}

interface Ornaments {
    src: string;
}

type Data = {
  solvedNum: number;
  socks: string;
  reindeers: ReinDeer[];
  wreath: Wreath[];
  ornaments: Ornaments[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data[]>){
  res.status(200).json([
    { 
      solvedNum : 0,
      socks : "a",
      reindeers: [
          {
            body: '/img/reindeer/body_1.png',
            bodydeco : '/img/reindeer/bodydeco_1.png',
            eye : '/img/reindeer/eye_1.png',
            headdeco : '/img/reindeer/headdeco_1.png',
            horn : '/img/reindeer/horn_1.png'
        },{
            body: '/img/reindeer/body_1.png',
            bodydeco : '/img/reindeer/bodydeco_1.png',
            eye : '/img/reindeer/eye_1.png',
            headdeco : '/img/reindeer/headdeco_1.png',
            horn : '/img/reindeer/horn_1.png'
        },{
            body: '/img/reindeer/body_1.png',
            bodydeco : '/img/reindeer/bodydeco_1.png',
            eye : '/img/reindeer/eye_1.png',
            headdeco : '/img/reindeer/headdeco_1.png',
            horn : '/img/reindeer/horn_1.png'
        },{
            body: '/img/reindeer/body_1.png',
            bodydeco : '/img/reindeer/bodydeco_1.png',
            eye : '/img/reindeer/eye_1.png',
            headdeco : '/img/reindeer/headdeco_1.png',
            horn : '/img/reindeer/horn_1.png'
        },{
            body: '/img/reindeer/body_1.png',
            bodydeco : '/img/reindeer/bodydeco_1.png',
            eye : '/img/reindeer/eye_1.png',
            headdeco : '/img/reindeer/headdeco_1.png',
            horn : '/img/reindeer/horn_1.png'
        },{
            body: '/img/reindeer/body_1.png',
            bodydeco : '/img/reindeer/bodydeco_1.png',
            eye : '/img/reindeer/eye_1.png',
            headdeco : '/img/reindeer/headdeco_1.png',
            horn : '/img/reindeer/horn_1.png'
        },{
            body: '/img/reindeer/body_1.png',
            bodydeco : '/img/reindeer/bodydeco_1.png',
            eye : '/img/reindeer/eye_1.png',
            headdeco : '/img/reindeer/headdeco_1.png',
            horn : '/img/reindeer/horn_1.png'
        },{
            body: '/img/reindeer/body_1.png',
            bodydeco : '/img/reindeer/bodydeco_1.png',
            eye : '/img/reindeer/eye_1.png',
            headdeco : '/img/reindeer/headdeco_1.png',
            horn : '/img/reindeer/horn_1.png'
        },
      ],
      wreath : [
          {
              src : '/img/ornaments/1.png'
          },
          {
              src : '/img/ornaments/2.png'
          },
          {
              src : '/img/ornaments/3.png'
          },
          {
              src : '/img/ornaments/4.png'
          },
          {
              src : '/img/ornaments/5.png'
          },
          {
              src : '/img/ornaments/6.png'
          },
          {
              src : '/img/ornaments/7.png'
          },{
              src : '/img/ornaments/8.png'
          },
          {
              src : '/img/ornaments/9.png'
          }
      ],
      ornaments : [
          {
              src:""
          },{
              src:""
          },{
              src:""
          },{
              src:""
          },{
              src:""
          },{
              src:""
          },{
              src:""
          }
      ]
    }
  ]);
}