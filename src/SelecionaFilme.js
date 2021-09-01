import "./css/filme.css";
import enola from "./assets/enola.png"

export default function SelecionaFilme(){
    return(
        <>
            <div className="titulo">
                <p> Selecione o filme </p>           
            </div>
            <div className="filmes">
                <img src={enola}/>
                <img src={enola}/>
                <img src={enola}/>
                <img src={enola}/>
                <img src={enola}/>
                <img src={enola}/>
                <img src={enola}/>
                <img src={enola}/>
            </div>
        </>

    )
}
