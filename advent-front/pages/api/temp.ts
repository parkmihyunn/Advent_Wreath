import type { NextApiRequest, NextApiResponse } from "next";

interface Quiz {
    quizNum : number;
    question : string;
    correct : string;
    hints : string;
}

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

type Data = {
  name: string;
  quizzes: Quiz[];
  socks: string;
  reindeers: ReinDeer[];
  wreath: Wreath[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data[]>){
  res.status(200).json([
    {
        name: "박미현",
        quizzes:[
            {
                quizNum : 0,
                question : '몇몇 순록들은 얼음이 아닌 눈에 덮인 이끼를 찾아 남쪽으로 무려 ___km까지 이동한다',
                correct : '100',
                hints : 'https://www.bbc.com/korean/features-59777860',
            }, {
                quizNum : 1,
                question : '영국 감시단체, 오염으로 OOOOO 가까워져 경고',
                correct : '회복불가능',
                hints : 'https://www.bbc.com/korean/news-61419228'
            }, {
                quizNum : 2,
                question : '힌트글에서 환경보호 중요성 알리기는 환경보호 실천 방법 리스트 중 몇번째 목표인가요?',
                correct : '25',
                hints : 'https://brunch.co.kr/@hantole/13'
            }
        ],
        socks : "어떻게 필요한지 몰라서 텍스트로 대충 채워놓겠습니다 ~,~ 윤성씨 수정해주세요",
        reindeers: [
            {
                body: 'body_0',
                bodydeco : 'bodydeco_0',
                eye : 'eye_0',
                headdeco : 'headdeco_0',
                horn : 'horn_0'
            },{
                body: 'body_1',
                bodydeco : 'bodydeco_1',
                eye : 'eye_1',
                headdeco : 'headdeco_1',
                horn : 'horn_1'
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
            },
            {
                src : '/img/ornaments/ball.png',
                width : '43'
            }
        ]
    }
  ]);
}