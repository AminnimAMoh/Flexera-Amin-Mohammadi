import Head from "next/head";
import UserList from "./UserList";
import styles from "../styles/Home.module.css";

import {Item} from "../Types/generalTypes"

interface Props {
  items: Item[];
  incomplete_results: boolean;
  total_count: number;
}

export const getStaticProps = async () => {
  try {
    const responce = await fetch(
      "https://api.github.com/search/repositories?sort=stars&q=javascript&per_page=10&page=1"
    );
    const data = await responce.json();
    return { props: { ...data } };
  } catch (err) {
    console.log(err);
  }
};

export default function Home({ ...props }: Props) {
  const items = props.items.map((item) => {
    return {
      full_name: item.full_name,
      avatar_url: item.avatar_url,
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
        <UserList items={items} />
      </main>
    </div>
  );
}
