import Head from "next/head";
import dynamic from "next/dynamic";
import { Loading } from "../../components";

const DynamicComponent = dynamic(() => import("../../routes/seller-escrow"), {
    loading: () => <Loading />,
});

export default function Register() {
    return (
        <>
            <Head>
                <title>Remontada | Seller Escrow</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DynamicComponent />
        </>
    );
}
