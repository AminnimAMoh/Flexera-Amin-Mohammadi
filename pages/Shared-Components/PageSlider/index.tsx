import React, { ReactElement } from 'react'
import { useAppContext } from "../../../context/AppContext";

import styles from "../../../styles/PageSlider.module.scss";

interface Props {
    
}

function PageSlider({}: Props): ReactElement {
    const {state: {pageNumber}, dispatch}=useAppContext();
    return (
        <div className={styles.container}>
            <span onClick={()=> pageNumber>1 && dispatch({type: "sub_number"})}/>
            <p>{pageNumber}</p>
            <span onClick={()=> dispatch({type: "add_number"})}/>
        </div>
    )
}

export default PageSlider
