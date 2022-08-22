import React, { useState } from 'react';
import styles from './QrDecoderCamera.module.css'
import { QrReader } from 'react-qr-reader';

function QrDecoderCamera() {
    const [data, setData] = useState('No result');
    return (
        <div>
            <div className={styles.camera}>
                <QrReader
                    onResult={(result, error) => {
                        if (!!result) {
                            setData(result?.text);
                        }

                        if (!!error) {
                            console.info(error);
                        }
                    }}
                />
            </div>
            <p>{data}</p>
        </div>
    )
}

export default QrDecoderCamera