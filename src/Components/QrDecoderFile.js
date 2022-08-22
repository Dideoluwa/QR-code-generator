import React, { useState , useRef } from 'react'
import styles from './QrDecoderFile.module.css'
import placeholder from '../Assets/placeholder.jpeg'
// import QrReader from 'react-qr-reader';
import axios from 'axios'

function QrDecoderFile() {
    // let [QrImg, setQrImg] = useState([])
    let [QrImgShow, setQrImgShow] = useState(false)
    const [image, setImage] = useState([])
    let [data, setData] = useState([])
    let [imgName, setImgName] = useState('')
    // let photoRef = useRef()

    let images = QrImgShow ? image : placeholder


    let formSubmitHandler = (e) => {
        e.preventDefault()
        if (image.length === 0) {
            setQrImgShow(false)
            return
        }
        let url = `https://api.qrserver.com/v1/read-qr-code/?fileurl=${imgName}`
        axios.get(url, {
            headers: {"Access-Control-Allow-Origin": "*"} 
        }).then((res) => {
            console.log(res.data.symbol.data)
            setData(res.data.symbol.data)
        })
    }

    const fileChangeHandler = (e) => {
        if (e.target.files && e.target.files[0]) {
            setQrImgShow(true)
            setImgName(e.target.files[0].name)
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    }
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <h1>Upload File</h1>
            </div>
            <div className={styles.body_form}>
                <div className={styles.body_form_2}>
                    <form
                        onSubmit={formSubmitHandler}>
                        <div className={styles.inputField}>
                            <input
                            //    ref={photoRef}
                                accept="image/*"
                                name='file'
                                onChange={fileChangeHandler}
                                type='file'
                            ></input>
                        </div>
                        <button>Decode QR code</button>
                    </form>
                </div>
                <div className={styles.body2}>

                    <div className={styles.qr_code}>
                        <img src={images} alt='Qr code' />
                    </div>
                </div>
                <h1>{data}</h1>
            </div>
        </div>
    )
}

export default QrDecoderFile