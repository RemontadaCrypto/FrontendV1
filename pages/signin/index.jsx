import Head from "next/head";
import dynamic from "next/dynamic";
// import { Loading } from "@/components";

const DynamicComponent = dynamic(() => import("../../routes/signin"), {
    loading: () => "loading...",
});

export default function Home() {
    return (
        <>
            <Head>
                <title>Remontada | Signin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DynamicComponent />
        </>
    );
}
