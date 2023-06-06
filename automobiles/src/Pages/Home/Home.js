import axios from 'axios';
import React from "react";
import { useState } from "react";
import logo from "../../images/logo.png"
import icon from "../../images/icon.png"
import carro from "../../images/carro.png"
import moto from "../../images/moto.png"
import caminhao from "../../images/caminhao.png"

import styles from "./style.module.css"


 function Home() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [prediction, setPrediction] = useState(null);

        const handleFileChange = (event) => {
            setSelectedFile(event.target.files[0]);
        };

        const handlePredict = () => {
            if (!selectedFile) {
            alert('Selecione um arquivo de imagem');
            return;
            }


        const formData = new FormData(); {
        formData.append('image', selectedFile);
    
        axios.post('http://localhost:5000/predict', formData)
          .then(response => {
            setPrediction(response.data);
          })
          .catch(error => {
            console.error(error);
          });
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
                
                <input type="file" name="image" multiple onChange={handleFileChange} className={styles.input}/>
                
                <button type="submit" onClick={handlePredict}>Salvar</button>
                <p className={styles.p}>Click to choose, copy & paste or drag drop files anywhere</p>

                {prediction && (
                    <div>
                    <p>Class ID: {prediction.class_id}</p>
                    <p>Class Name: {prediction.class_name}</p>
                    </div>
                )}         
                
               
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
}

export default Home;