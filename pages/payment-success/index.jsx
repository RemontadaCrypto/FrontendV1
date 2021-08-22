import Head from "next/head";
import dynamic from "next/dynamic";
import { Loading } from "../../components";

const DynamicComponent = dynamic(() => import("../../routes/payment-success"), {
    loading: () => <Loading />,
});

export default function PaymentSuccess() {
    return (
        <>
            <Head>
                <title>Remontada | Payment Success</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DynamicComponent />
        </>
    );
}
