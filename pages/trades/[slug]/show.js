import Head from "next/head";
import dynamic from "next/dynamic";
import { Loading } from "../../../components";

const DynamicComponent = dynamic(() => import("../../../routes/trades/buyer"), {
    loading: () => <Loading />,
});

export default function PaymentSuccess() {
    return (
        <>
            <Head>
                <title>Remontada | Pending Approval</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DynamicComponent />
        </>
    );
}
