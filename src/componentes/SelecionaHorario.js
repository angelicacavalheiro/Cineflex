import ".././css/horario.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function SelecionaHorario(){

    const params = useParams();

    const id = params.idFilme;
    const [sessoes, setSessoes] = useState([]);  
    const [rodape, setRodape] = useState([]);  


    useEffect(() => {

        const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${id}/showtimes`);

        promisse.then((res) => {       
            setSessoes(res.data.days)
            setRodape(res.data)
        });
        }, []); 

   

    return(
        <>
            <div className="titulo">
                <p> Selecione o horário </p>           
            </div>
            
            <div className= "datas">
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
            </div>
             
            <footer className="rodapePage2">
                <img src={rodape.posterURL} />
                <p>{rodape.title}</p>
            </footer>     
        </>
    )
    
}


