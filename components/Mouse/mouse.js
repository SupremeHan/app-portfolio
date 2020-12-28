import React from 'react';
import styles from './mouse.module.css';

const Mouse = () => {
    return(
        <div className={styles.scrolldown_wrapper}>
            <div className={styles.scrolldown}>
                <svg height="30" width="10">
                    <circle className={styles.scrolldown_p1} cx="5" cy="15" r="2"/>
                    <circle className={styles.scrolldown_p2} cx="5" cy="15" r="2"/>
                </svg>
            </div>
        </div>
    )
};

export default Mouse;