import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

import { useAppContext } from "../context/AppContext";

import UserList from "./UserList";
import PageSlider from "./Shared-Components/PageSlider"

import {Item} from "../Types/generalTypes"

const defaultEndPoint="https://api.github.com/search/repositories?sort=stars&q=javascript&per_page=10&";

interface Props {
  items: Item[];
  incomplete_results: boolean;
  total_count: number;
}

export const getServerSideProps = async () => {
  try {
    const responce = await fetch(
      defaultEndPoint+"per_page=10&page=1"
    );
    const data = await responce.json();
    return { props: { ...data } };
  } catch (err) {
    console.log(err);
  }
};

export default function Home({ ...props }: Props) {
  const {state: {pageNumber}} = useAppContext();
  const [currentPage, setCurrentPage]=useState<number>(1);
  const [listData, setListData]=useState<Props>(props)
  useEffect(() => {
    currentPage !== pageNumber && setCurrentPage(pageNumber)
  }, [pageNumber])

  console.log(currentPage);
  
  
  const items = props.items.map((item) => {
    return {
      full_name: item.full_name,
      avatar_url: item.owner?.avatar_url,
      description: item.description,
    };
  });
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Flexera-Technical Assessment</title>
        <meta name="description" content="UI Candidate Technical Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>browse github</h3>
        <PageSlider />
        <UserList items={items} />
      </main>
    </div>
  );
}
