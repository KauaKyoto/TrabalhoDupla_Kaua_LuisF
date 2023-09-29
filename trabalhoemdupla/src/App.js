import Jogos from './components/Jogos';
import './components/Jogos.css';
import './App.css';

function App() {
  return (
    <div className="Container">
      <h1> K&L Games </h1>
      <br></br>
      <Jogos Jogos="Estratégia e Diversão"/>
      <br></br>
    </div>
  );
}

export default App;