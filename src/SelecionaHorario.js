import "./css/horario.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function SelecionaHorario(){

    const params = useParams();

    const id = params.idFilme;
    const [sessoes, setSessoes] = useState([]);  


    useEffect(() => {

        const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${id}/showtimes`);

        promisse.then((res) => {       
            setSessoes(res.data.days)
        });
        }, []); 

        console.log(sessoes[0])
    

    return(
        <>
            <div className="titulo">
                <p> Selecione o horário </p>           
            </div>

            
            {sessoes.map((sessao) => (
                <div className="data">{sessao.weekday} {sessao.date}
                    <div className="horarios">
                        {sessao.showtimes.map((horarios) => (
                            <Link to={`/assentos/${horarios.id}`}>
                                <button>{horarios.name}</button>  
                            </Link>
                                                           
                        ))} 
                    </div>
                </div> 
            ))}              
        </>
    )
    
}


