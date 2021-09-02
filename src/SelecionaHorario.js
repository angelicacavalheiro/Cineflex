import "./css/horario.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function SelecionaHorario(){

    const params = useParams();

    const id = params.idFilme;
    const [horarios, setHorarios] = useState([]);  

    const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${id}/showtimes`);
    

    return(
        <>
            <div className="titulo">
                <p> Selecione o horário </p>           
            </div>
            <div className="data">quinta 
                <div className="horarios">
                    <button>15h</button>
                    <button>14h</button>
                </div>
            </div>
            <div className="data">sexta
                <div className="horarios">
                    <button>16h</button>
                    <button>17h</button>
                </div>
            </div>
        </>
    )
}