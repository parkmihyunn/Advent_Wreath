import type { NextApiRequest, NextApiResponse } from "next";

/* 유저는 두가지의 Ornaments를 관리할 interface가 필요할 것으로 생각됨.
   보유하고 있는 ornaments를 관리하는 interface, main에 띄워야 할 ornaments를 관리할 interface*/

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
                question : '몇몇 순록은 얼음이 아닌 눈에 덮인 이끼를 찾아 남쪽으로 무려 OOOkm까지 이동한다',
                correct : '100',
                hints : 'https://www.bbc.com/korean/features-59777860',
            }, {
                quizNum : 1,
                question : '영국 감시단체는 오염으로 OOOOO 가까워진다고 경고하였다',
                correct : '회복불가능',
                hints : 'https://www.bbc.com/korean/news-61419228'
            }, {
                quizNum : 2,
                question : '환경보호 중요성 알리기는 환경보호 실천 방법 리스트 중 몇 번째 목표인가요? ex) 10',
                correct : '25',
                hints : 'https://brunch.co.kr/@hantole/13'
            }, {
                quizNum : 3,
                question : '지구의 날은 몇 월 며칠 인가요? ex) 0927',
                correct : '0422',
                hints : 'https://www.korea.kr/news/reporterView.do?newsId=148900968'
            }, {
                quizNum : 4,
                question : '32개의 글로벌 패션 기업이 체결한 패션 협약에서 0000년까지 온실가스 배출량 제로의 목표를 잡았다 ex) 2022',
                correct : '2050',
                hints : 'https://hypebeast.kr/2019/8/g-7-fashion-pact-kering-emmanuel-macron-prada-nike-hermes-burberry-chanel'
            }, {
                quizNum : 5,
                question : 'ESG에서 G의 의미를 한국어로 입력해주세요',
                correct : '지배구조',
                hints : 'https://www.clickesg.co.kr/ui/overview/descriptionEsg.html'
            }, {
                quizNum : 6,
                question : '새활용 특화시설 중 세계 최대 규모로 평가되는 이곳의 이름을 입력해주세요',
                correct : '서울새활용플라자',
                hints : 'https://n.news.naver.com/mnews/article/014/0004933889?sid=102'
            }, {
                quizNum : 7,
                question : '사람들이 기후변화를 잘 받아들이지 않는 것은 OOO효과 혹은 자기범주화이론이 작용하기 때문이다',
                correct : '방관자',
                hints : 'https://ecosophialab.com/%EC%99%9C-%EA%B8%B0%ED%9B%84%EC%9C%84%EA%B8%B0%EB%8A%94-%EC%97%AC%ED%83%9C-%ED%95%B4%EA%B2%B0%EC%9D%B4-%EC%95%88-%EB%90%98%EA%B3%A0-%EC%9E%88%EB%8A%94%EA%B0%80-ccc%EC%9D%98-%EB%B9%84%EB%B0%80-3/'
            }, {
                quizNum : 8,
                question : '환경문제 해결을 위한 그린피스만의 캠페인 방식 중 세번째는 온라인, 오프라인 시민 OOOOO 프로젝트 진행이다',
                correct : '액티비스트',
                hints : 'https://www.greenpeace.org/korea/report/23590/blog-etc-how_we_do/'
            }, {
                quizNum : 9,
                question : '지구 온난화로 먹을 것이 없어진 순록은 살기 위해 소금기가 많은 OO도 먹는 모습을 보이고 있다',
                correct : '해초',
                hints : 'https://www.sciencetimes.co.kr/news/%EB%B6%81%EA%B7%B9-%EC%88%9C%EB%A1%9D-%EC%A7%80%EA%B5%AC-%EC%98%A8%EB%82%9C%ED%99%94-%EC%98%81%ED%96%A5-%EC%8B%9D%EB%8B%A8-%EB%B0%94%EA%BF%94/'
            }
        ],
        socks : "a",
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