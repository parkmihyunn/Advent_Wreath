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
  width : string;
}

interface Ornaments {
    src: string;
    width : string;
    height : string;
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
              src : '/img/ornaments/candy.png',
              width : '27'
          },
          {
              src : '/img/ornaments/santa.png',
              width : '48'
          },
          {
              src : '/img/ornaments/dia.png',
              width : '50'
          },
          {
              src : '/img/ornaments/socks.png',
              width : '33'
          },
          {
              src : '/img/ornaments/snowman.png',
              width : '45'
          },
          {
              src : '/img/ornaments/bird.png',
              width : '54'
          },
          {
              src : '/img/ornaments/star.png',
              width : '54'
          },{
              src : '/img/ornaments/bear.png',
              width : '54'
          }
          // {
          //     src : '/img/ornaments/ball.png',
          //     width : '43'
          // }
      ],
      ornaments : [
          {
              src:null,
              width:null,
              height:null
          },{
              src: '/img/ornaments/bear.png',
              width: '54',
              height : '54'
          },{
              src:"",
              width:"",
              height : ''
          },{
              src:"",
              width:"",
              height : ''
          },{
              src:"",
              width:"",
              height : ''
          },{
              src:"",
              width:"",
              height : ''
          },{
              src:"",
              width:"",
              height : ''
          }
      ]
    }
  ]);
}