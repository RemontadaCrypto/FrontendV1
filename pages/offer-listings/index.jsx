import Head from "next/head";
import dynamic from "next/dynamic";
import { Loading } from "../../components";

const DynamicComponent = dynamic(() => import("../../routes/offer-listings"), {
  loading: () => <Loading />,
});

export default function Register() {
  return (
    <>
      <Head>
        <title>Remontada | Offer Listings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicComponent />
    </>
  );
}
