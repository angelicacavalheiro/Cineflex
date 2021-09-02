import "./css/assentos.css";

export default function SelecionaAssentos(){
    return(
        <>
            <div className="titulo">
                    <p> Selecione o(s) assento(s) </p>           
            </div>

            <div className="assentos">
                <div className="assento disposicao">
                    <p className="disponivel">01</p>
                    <p className="indisponivel" >01</p>                    
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