export default function Assento({assento}){
    return (
        <p className={(assento.isAvailable) ? ("disponivel") : ("indisponivel") }> 
                        
        {
            assento.name < 10 ? `0${assento.name}` : assento.name
        }

        </p>
    )
}