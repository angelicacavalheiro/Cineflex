export default function Assento({assento, movieInfos, setMovieInfos}){

    function MarcarAssento({assento, movieInfos, setMovieInfos, event}){

       
        {(movieInfos.assentosEscolhidos !== undefined) 
        ? 
        (setMovieInfos({...movieInfos, assentosEscolhidos : [...movieInfos.assentosEscolhidos, assento.name], 
            assentosID : [...movieInfos.assentosID, assento.id]}))
            
        : 
        setMovieInfos({...movieInfos, assentosEscolhidos : [assento.name], assentosID : [assento.id]})}


        
        if ((event.target.className) === ("disponivel")){
            (event.target.className = "selecionado") 
        } else if ((event.target.className) === ("selecionado")) {
            (event.target.className = "disponivel") 

            let variavel = movieInfos.assentosEscolhidos.indexOf(assento.name)
            setMovieInfos({...movieInfos,  assentosEscolhidos :
                 [...movieInfos.assentosEscolhidos, (movieInfos.assentosEscolhidos.splice(variavel, 1))], 
                 assentosID : [assento.id]})
      
            

        } else {
            alert("Esse assento não está disponível")
        }
        console.log(`ficou: ${movieInfos.assentosEscolhidos}`)
       
       
       




        // ((event.target.className) === ("disponivel")) ?    
        // (event.target.className = "selecionado")         
        // :   
        // ((event.target.className) === ("selecionado")) ?
        // (event.target.className = "disponivel")             
        // : 
        // alert("Esse assento não está disponível")
  
    }
    
    
  

    return (
        <p onClick= {(event) => MarcarAssento({assento, movieInfos, setMovieInfos, event})}
        
        className={(assento.isAvailable) ? ("disponivel") : ("indisponivel") }>
                        
        {
            assento.name < 10 ? `0${assento.name}` : assento.name
        }

        </p>
    )
}
