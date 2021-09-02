import "./css/filme.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function SelecionaFilme(){

    const [images, setImages] = useState([]);

    useEffect(() => {
      const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");

      promisse.then((res) => {       
        setImages(res.data)
      });
    }, []);

    return(
        <>
            <div className="titulo">
                <p> Selecione o filme </p>           
            </div>
            <div className="filmes"> 
                {images.map((image) => (<img src={image.posterURL} alt={image.title} />))}
            </div>
        </>

    )
}

