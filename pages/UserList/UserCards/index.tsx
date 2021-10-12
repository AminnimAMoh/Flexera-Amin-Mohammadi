import React, { ReactElement } from "react";
import { Item } from "../../../Types/generalTypes";
import styles from "../../../styles/Cards.module.scss";
import Image from "next/image";

function UserCards({ full_name, avatar_url, description }: Item): ReactElement {
  return (
    <ul className={styles.container}>
      <Image src={avatar_url} alt="Image_Content" width="100%" height="100%" />
      <li className={styles.container_infoCards}>
        <h3>{full_name}</h3>
        <p>{description}</p>
      </li>
      <li className={styles.container_box}>

      </li>
    </ul>
  );
}

export default UserCards;
