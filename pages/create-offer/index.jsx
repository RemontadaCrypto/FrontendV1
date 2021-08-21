import Head from "next/head";
import dynamic from "next/dynamic";
import { Loading } from "../../components";

const DynamicComponent = dynamic(() => import("../../routes/create-offer"), {
    loading: () => <Loading />,
});

export default function Register() {
    return (
        <>
            <Head>
                <title>Remontada | Create Offer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DynamicComponent />
        </>
    );
}
