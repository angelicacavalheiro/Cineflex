import "./css/exibePedido.css";

export default function ExibePedido(){
    return(
        <>
            <div className="titulo verde">
                    <p> Pedido feito com sucesso! </p>           
            </div>
        

            <div className = "infos">
                <h1>Filme e sessão</h1>
                <p>Enola Holmes</p>
                <p> 24/06/21 15h </p>
            </div>

            <div className = "infos">
                <h1>Ingressos</h1>
                <p>Assento 15</p>
                <p>Assento 16 </p>
            </div>

            <div className = "infos">
                <h1>Comprador</h1>
                <p>Nome: João da Silva Sauro</p>
                <p>CFP: 123.456.789-00</p>
            </div>

            <button className="botao voltar">Voltar para Home</button>    

        </>

    )
}