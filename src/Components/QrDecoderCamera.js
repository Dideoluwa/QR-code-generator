import React, { useState } from 'react';
import styles from './QrDecoderCamera.module.css'
import { QrReader } from 'react-qr-reader';

function QrDecoderCamera() {
    const [data, setData] = useState('No result');
    let [showResult, setShowResult] = useState(false)
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <h1>Scan QR code</h1>
            </div>
            <div className={styles.camera}>
                <QrReader
                    onResult={(result, error) => {
                        if (result) {
                            setData(result?.text);
                            setShowResult(true)
                        }

                        if (!!error) {
                            // console.info(error);
                        }
                    }}
                />
            </div>
            {showResult && <div className={styles.header}>
                <h2>Open link now : <a href={data} target= '_blank' rel="noreferrer" >{data}</a></h2>
            </div>}
        </div>
    )
}

export default QrDecoderCamera