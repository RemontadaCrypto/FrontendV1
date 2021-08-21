import Head from "next/head";
import dynamic from "next/dynamic";
import { Loading } from "../../components";

const DynamicComponent = dynamic(() => import("../../routes/signup"), {
    loading: () => <Loading />,
});

export default function Home() {
    return (
        <>
            <Head>
                <title>Remontada | Signup</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DynamicComponent />
        </>
    );
}
