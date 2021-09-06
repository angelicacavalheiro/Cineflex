export default function Assento({assento, movieInfos, setMovieInfos}){

    function MarcareDesmarcarAssento({assento, movieInfos, setMovieInfos, event}){

        if ((event.target.className) === ("disponivel")){
            (event.target.className = "selecionado") 

            {(movieInfos.assentosEscolhidos !== undefined) 
                ? 
                (setMovieInfos({...movieInfos, assentosEscolhidos : [...movieInfos.assentosEscolhidos, assento.name], 
                    assentosID : [...movieInfos.assentosID, assento.id]}))
                    
                : 
                setMovieInfos({...movieInfos, assentosEscolhidos : [assento.name], assentosID : [assento.id]})}

        } else if ((event.target.className) === ("selecionado")) {
            (event.target.className = "disponivel") 

            let arrayNomeAssento = [...movieInfos.assentosEscolhidos]; 
            let arrayIDAssento = [...movieInfos.assentosID];

            let index = arrayNomeAssento.indexOf(assento.name)  

            if (index !== -1) {
                arrayNomeAssento.splice(index, 1);
                arrayIDAssento.splice(index, 1);

                setMovieInfos({...movieInfos,  assentosEscolhidos : arrayNomeAssento, assentosID : arrayIDAssento})
              }
                
        } else {
            alert("Esse assento não está disponível")
        }
    }
        
    return (
        <p onClick= {(event) => MarcareDesmarcarAssento({assento, movieInfos, setMovieInfos, event})}
        
        className={(assento.isAvailable) ? ("disponivel") : ("indisponivel") }>
                        
        {
            assento.name < 10 ? `0${assento.name}` : assento.name
        }

        </p>
    )
}
