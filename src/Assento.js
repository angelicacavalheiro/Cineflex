export default function Assento({assento, movieInfos, setMovieInfos}){

    function adicionarEmarcarAssento({assento, movieInfos, setMovieInfos, event}){
       
        (movieInfos.assentosEscolhidos !== undefined) 
        ? 
        (setMovieInfos({...movieInfos, assentosEscolhidos : [...movieInfos.assentosEscolhidos, assento.name], 
            assentosID : [...movieInfos.assentosID, assento.id]}))
        : 
        setMovieInfos({...movieInfos, assentosEscolhidos : [assento.name], assentosID : [assento.id]})
               
        {
        ((event.target.className) === ("disponivel")) ?
        (event.target.className = "selecionado")
        :
        ((event.target.className) === ("selecionado")) ?
        (event.target.className = "disponivel")
        :
        alert("Esse assento não está disponível")
    
        }
               
    }
  

    return (
        <p onClick= {(event) => adicionarEmarcarAssento({assento, movieInfos, setMovieInfos, event})}
        
        className={(assento.isAvailable) ? ("disponivel") : ("indisponivel") }>
                        
        {
            assento.name < 10 ? `0${assento.name}` : assento.name
        }

        </p>
    )
}
