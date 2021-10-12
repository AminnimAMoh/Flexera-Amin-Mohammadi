import React, { ReactElement } from 'react'
import { Item } from "../../../Types/generalTypes";
import styles from "../../../styles/Cards.module.css";
import Image from "next/image"

function UserCards({full_name, avatar_url, description}: Item): ReactElement {
    return (
        <div className={styles.container}>
            <Image 
            src={avatar_url} 
            alt="Image_Content"
            width="100%"
            height="100%"
            />
            <h3>{full_name}</h3>
            <h3>{description}</h3>
        </div>
    )
}

export default UserCards
