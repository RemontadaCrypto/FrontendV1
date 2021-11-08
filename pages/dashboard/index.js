import Head from "next/head";
import dynamic from "next/dynamic";
import { Loading } from "../../components";

const DynamicComponent = dynamic(() => import("../../routes/dashboard"), {
    loading: () => <Loading />,
});

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>Remontada | Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DynamicComponent />
        </>
    );
}
