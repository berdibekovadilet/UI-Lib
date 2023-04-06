import type {NextPage} from 'next'
import Head from 'next/head'
import HomeView from "../src/views/Home";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home page for UI Lib"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <HomeView/>
        </>
    )
}

export default Home
