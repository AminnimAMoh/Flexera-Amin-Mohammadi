import React, { ReactElement } from 'react'

import styles from "../../../styles/PageSlider.module.css";

interface Props {
    
}

function PageSlider({}: Props): ReactElement {
    return (
        <div className={styles.container}>
            <span></span>
            <span></span>
        </div>
    )
}

export default PageSlider
