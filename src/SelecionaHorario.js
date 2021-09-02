import "./css/horario.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function SelecionaHorario(){

   
      const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/"+`${1}`+"/showtimes");
      console.log(promisse)


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