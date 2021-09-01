import "./css/horario.css";

export default function SelecionaHorario(){
    return(
        <>
            <div className="titulo">
                <p> Selecione o horario </p>           
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