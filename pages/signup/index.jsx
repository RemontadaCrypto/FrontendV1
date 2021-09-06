import React from "react";
import { useSelector } from "react-redux";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Loading } from "../../components";

const DynamicComponent = dynamic(() => import("../../routes/signup"), {
  loading: () => <Loading />,
});

export default function Home() {
  const router = useRouter();
  const user = useSelector((state) => state.user);

  React.useEffect(() => {
    if (user.isAuth) {
      router.push("/offer-listings");
    }
  }, [user.isAuth]);

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
