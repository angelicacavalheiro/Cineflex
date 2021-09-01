
import "./css/reset.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Topo from "./Topo"
import SelecionaFilme from "./SelecionaFilme";
import SelecionaHorario from "./SelecionaHorario";
import SelecionaAssento from "./SelecionaAssento";
import ExibePedido from "./ExibePedido";


function App() {
  return (
    <BrowserRouter>
      <Topo />
      <SelecionaAssento />
      

      <Switch>

        {/* <Route path="/" exact>
          <SelecionaFilme />
        </ Route>  */}

        {/* <Route path="/sessoes/:idFilme" exact>
          <SelecionaHorario />
        </ Route>  */}

        {/* <Route path="/assentos/:idSessao" exact>
          <SelecionaAssento />
        </ Route>  */}

        <Route path="/sucesso" exact>
          <ExibePedido />
        </ Route> 

      </ Switch>       
    </ BrowserRouter>  
  );
}

export default App;
