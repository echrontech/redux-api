import './App.css';
import Counter from './features/counter/Counter'
import Coin from './features/counter/Coin'
import Theme from './features/theme/Theme'
import Apicall from './Apicall'
function App() {
  
  
  return (
    <div className="App">
      <h1>Saleem redux</h1>
      <Counter />
      <Coin />
      <Theme />
      <Apicall />
    </div>
  );
}

export default App;
