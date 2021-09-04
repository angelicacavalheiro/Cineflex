import "./css/exibePedido.css";
import { Link, useParams } from "react-router-dom";

export default function ExibePedido({movieInfos, setMovieInfos}) {   

    return(
        <>
            <div className="titulo verde">
                <p> Pedido feito com sucesso! </p>           
            </div>
        

            <div className = "infos">
                <h1>Filme e sessão</h1>
                <p>{movieInfos.title}</p>
                <p>{movieInfos.data} {movieInfos.hora}</p>
            </div>

            <div className = "infos">
                <h1>Ingressos</h1>

                {movieInfos.assentosEscolhidos.map((assento) => (
                         <p>Assento: {assento}</p>
                   ))}           
                
            </div>

            <div className = "infos">
                <h1>Comprador</h1>
                <p>{movieInfos.Comprador}</p>
                <p>{movieInfos.CPF}</p>
            </div>

            <Link to={`/`}>
                <button className="botao voltar">Voltar para Home</button>
            </Link>

                

        </>

    )
}