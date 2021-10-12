import React, { ReactElement } from 'react'
import { useAppContext } from "../../../context/AppContext";

import styles from "../../../styles/PageSlider.module.css";

interface Props {
    
}

function PageSlider({}: Props): ReactElement {
    const {dispatch}=useAppContext();
    return (
        <div className={styles.container}>
            <span onClick={()=> dispatch({type: "add_number"})}></span>
            <span onClick={()=> dispatch({type: "sub_number"})}></span>
        </div>
    )
}

export default PageSlider
