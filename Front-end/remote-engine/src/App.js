import logo from './logo.svg';
import './App.css';
import { MainRoute } from './Routes/MainRoute';
import { NaveBar } from './Componants/NaveBar';

function App() {
  return (
    <div className="App">
      <NaveBar/>
      <MainRoute/>
    </div>
  );
}

export default App;
