import ".././css/assentos.css";
import Assento from "./Assento"
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SelecionaAssentos({movieInfos, setMovieInfos}){

    const params = useParams();
    const id = params.idSessao;

    const [assentos, setAssentos] = useState({});
    const [nomeComprador, setNomeComprador] = useState()
    const [CPFcomprador, setCPFcomprador] = useState()

    useEffect(() => {
      const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${id}/seats`);

      promisse.then((res) => {       
        setAssentos(res.data)
        setMovieInfos({title: res.data.movie.title,
        hora: res.data.name,
        dia: res.data.day.weekday,
        data: res.data.day.date,
        image: res.data.movie.posterURL})        

      });
    }, []);    

    function adicionarInputEenviarDados({CPFcomprador, nomeComprador, movieInfos, setMovieInfos}) {

        setMovieInfos({...movieInfos,             
            Comprador: nomeComprador,
            CPF: CPFcomprador
            }
        )      
        
        let send = {
            ids: movieInfos.assentosID,
            name: nomeComprador,
	        cpf: CPFcomprador
        }
        
        const post = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many", send);

      }     
  
    return(
        <>
            <div className="titulo">
                    <p> Selecione o(s) assento(s) </p>           
            </div>

            <div className="corpo">
                <div className="assentos">
                    <div className="assento disposicao">

                        { (assentos.seats !== undefined) ? 
                        assentos.seats.map((assento) => (
                            <Assento assento={assento} movieInfos={movieInfos} setMovieInfos={setMovieInfos}/>
                            
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
                
                    <input  
                    onChange={(e) => setNomeComprador(e.target.value)}
                    value={nomeComprador} 
                    type="text" 
                    name="input" 
                    placeholder="Digite seu nome..." />

                    <div>CPF do comprador:</div>

                    <input onChange={(e) => setCPFcomprador(e.target.value)}
                    value={CPFcomprador} 
                    type="text" 
                    name="input" 
                    placeholder="Digite seu CPF..." />

                </div>      

                <Link to={`/sucesso`} style={{textDecoration: 'none'}} >
                    <button onClick= {() => adicionarInputEenviarDados({CPFcomprador, nomeComprador, movieInfos, setMovieInfos})}
                    className="botao">Reservar assento(s)</button>   
                </Link>   
            </div>

            <div className="rodapePage2">
                <img src={movieInfos.image} />
                <div className="texto">
                    <p>{movieInfos.title}</p>
                    <p>{movieInfos.dia} - {movieInfos.hora} </p>
                    
                </div>
            </div>                   
                            
        </>
    )
    
}