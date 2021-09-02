import "./css/assentos.css";
import Assento from "./Assento"
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SelecionaAssentos(){

    const params = useParams();
    const id = params.idSessao;

    const [assentos, setAssentos] = useState({});

    useEffect(() => {
      const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${id}/seats`);

      promisse.then((res) => {       
        setAssentos(res.data)
      });
    }, []);
    console.log(assentos)

    return(
        <>
            <div className="titulo">
                    <p> Selecione o(s) assento(s) </p>           
            </div>

            <div className="assentos">
                <div className="assento disposicao">

                    { (assentos.seats !== undefined) ? 
                     assentos.seats.map((assento) => (
                         <Assento assento={assento} />
                        
                   )) 
                   :
                   null                    
                   }                  
                     

                </div>
            </div>

            <div className = "legenda assento">
                <div>
                    <p className="selecionado" />
                    Selecionado
                </div>
                <div>
                    <p className="disponivel" />
                    Disponivel                
                </div>
                <div>
                    <p className="indisponivel" />
                    Indisponivel               
                </div>
            </div>

            <div className="inputs">
                <div>Nome do comprador:</div>
                <input type="text" name="input" value="Digite seu nome..." />
                <div>CPF do comprador</div>
                <input type="text" name="input" value="Digite seu CPF..." />
            </div>   

            <button className="botao">Reservar acessento(s)</button>    
            
        </>
    )
}