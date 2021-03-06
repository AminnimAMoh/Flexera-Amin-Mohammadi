import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";

import { useAppContext } from "../context/AppContext";
import { request } from "../context/AppFetch";

import UserList from "./UserList";
import PageSlider from "./Shared-Components/PageSlider";

import { Item } from "../Types/generalTypes";

interface Props {
  items: Item[] | string;
}

export const getServerSideProps = async () => {
  const data = await request(1);
  if (data.items === "error") {
    console.log("error");
  }
  return { props: { ...data } };
};

export default function Home({ ...props }: Props) {
  const {
    state: { pageNumber },
  } = useAppContext();

  const [currentPage, setCurrentPage] = useState<number>(pageNumber);
  const [listData, setListData] = useState<any>(props);

  useEffect(() => {
    if (currentPage === 1 && currentPage !== pageNumber) {
      setCurrentPage(pageNumber);
    }
    request(pageNumber).then((res) => {
      if (res && res.length === 10) {
        setListData(res);
      }
    });
  }, [pageNumber]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Flexera-Technical Assessment</title>
        <meta name="description" content="UI Candidate Technical Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container_main}>
        <h3>Browse Github</h3>
        <PageSlider />
        {props.items !== "error" && <UserList items={listData} />}
      </main>
    </div>
  );
}
