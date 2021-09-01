
import "./css/style.css";
import "./css/reset.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SelecionaFilme from "./SelecionaFilme";
import SelecionaHorario from "./SelecionaHorario";
import SelecionaAssento from "./SelecionaAssento";
import ExibePedido from "./ExibePedido";


function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route >
          <SelecionaFilme />
        </ Route> 

        <Route >
          <SelecionaHorario />
        </ Route> 

        <Route >
          <SelecionaAssento />
        </ Route> 

        <Route >
          <ExibePedido />
        </ Route> 

      </ Switch>       
    </ BrowserRouter>  
  );
}

export default App;
