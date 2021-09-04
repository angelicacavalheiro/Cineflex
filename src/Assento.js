export default function Assento({assento, movieInfos, setMovieInfos}){

    function selecionarAssento({assento, movieInfos, setMovieInfos}){

        (movieInfos.assentosEscolhidos !== undefined) 
        ? 
        (setMovieInfos({...movieInfos, assentosEscolhidos : [...movieInfos.assentosEscolhidos, assento.name], 
            assentosID : [...movieInfos.assentosID, assento.id]}))
        : 
        setMovieInfos({...movieInfos, assentosEscolhidos : [assento.name], assentosID : [assento.id]})

        console.log(movieInfos)    

  

        // esse post precisa ser feito quando o botao for clicado e não quando o assento for clicado 
        // const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many",
        // movieInfos.assentosEscolhidos);
               
    }

    return (
        <p onClick= {() => selecionarAssento({assento, movieInfos, setMovieInfos})}className={(assento.isAvailable) ? ("disponivel") : ("indisponivel") }>
                        
        {
            assento.name < 10 ? `0${assento.name}` : assento.name
        }

        </p>
    )
}
