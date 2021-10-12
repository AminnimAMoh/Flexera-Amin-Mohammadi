import React, { ReactElement } from "react";
import { Item } from "../../../Types/generalTypes";
import styles from "../../../styles/Cards.module.scss";
import Image from "next/image";

function UserCards({
  full_name,
  avatar_url,
  description,
}: Item): ReactElement {
  const handleBoxClick=(e: React.MouseEvent<HTMLLIElement, MouseEvent>)=>{
    
  }
  return (
    <ul className={styles.container}>
        <Image
          src={avatar_url}
          alt="Image_Content"
          width="100%"
          height="100%"
        />
      <li className={styles.container_infoCards}>
        <h4 className={styles.container_Typography__header}>{full_name}</h4>
        <p className={styles.container_Typography__discription}>
          {description}
        </p>
      </li>
      <li className={styles.container_box} onClick={(e)=>handleBoxClick(e)}></li>
    </ul>
  );
}

export default UserCards;
