import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Login(){
    return (
        <Layout>
        <div>
            <Head>
            <title>서비스 명</title>
            <meta name="description" content="콘텐트 내용" />
            <link rel="icon" href="/favicon.ico" />
            </Head> 
            <h1> 로그인 페이지 </h1>
        </div>
        </Layout>
    );
}