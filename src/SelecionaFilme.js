import "./css/filme.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SelecionaFilme(){

    const [images, setImages] = useState([]);

    useEffect(() => {
      const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies");

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
                {images.map((image) => (
                <Link to={`/sessoes/${image.id}`}>
                    <img key={image.id} src={image.posterURL} alt={image.title} />
                </Link>
                ))}
            </div>
        </>

    )
}

