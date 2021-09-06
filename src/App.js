import "./css/reset.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Topo from "./componentes/Topo"
import SelecionaFilme from "./componentes/SelecionaFilme";
import SelecionaHorario from "./componentes/SelecionaHorario";
import SelecionaAssento from "./componentes/SelecionaAssento";
import ExibePedido from "./componentes/ExibePedido";
import { useState} from "react";

function App() {

  const [movieInfos, setMovieInfos] = useState({})

  return (
    <BrowserRouter>
      <Topo />      

      <Switch>

        <Route path="/" exact>
          <SelecionaFilme />
        </ Route> 

         <Route path="/sessoes/:idFilme" exact>
          <SelecionaHorario />
        </ Route> 

        <Route path="/assentos/:idSessao" exact>
          <SelecionaAssento movieInfos={movieInfos} setMovieInfos={setMovieInfos}/>
        </ Route>  

         <Route path="/sucesso" exact>
          <ExibePedido movieInfos={movieInfos} setMovieInfos={setMovieInfos}/>
        </ Route> 

      </ Switch>       
    </ BrowserRouter>   
  );
}

export default App;
