import React from "react";
import { useState } from "react";
import logo from "../../images/logo.png"
import icon from "../../images/icon.png"
import carro from "../../images/carro.png"
import moto from "../../images/moto.png"
import caminhao from "../../images/caminhao.png"

import styles from "./style.module.css"


 function Home() {

    
    const [image, setImage] = useState('');
    const uploadImage = async e => {

        e.preventDefault()
        console.log("Upload Imagem")
        
    }


    return (
        <div>
            <header>
                <img src={logo} className={styles.logo}></img>
                <p className={styles.pHeader}>IA automobiles</p>
            </header>

            <div clasName={styles.Container}>
                <h1>Publique sua imagem aqui</h1>
                <h2>Obtenha a classificação das suas imagens de automóveis</h2>
                <form onSubmit={uploadImage}>
                <input type="file" name="image" multiple onChange={e => setImage(e.target.files[0])} className={styles.input}/>
                
                <button type="submit">Salvar</button>
                </form>
                <p className={styles.p}>Click to choose, copy & paste or drag drop files anywhere</p>
            </div>

            <footer className={styles.footer}>
                <p>Faça upload desses tipos de imagens</p>
                <img src={carro}></img>
                <img src={moto}></img>
                <img src={caminhao}></img>
            </footer>
        </div>
    )

}

export default Home;