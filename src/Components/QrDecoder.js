import React from 'react';
import styles from './QrDecoder.module.css'
import QrDecoderCamera from './QrDecoderCamera';
import QrDecoderFile from './QrDecoderFile';


function QrDecoder() {
    
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <h1>QrDecoder</h1>
            </div>
           {/* <QrDecoderCamera /> */}
           <QrDecoderFile />
        </div>
    )
}

export default QrDecoder