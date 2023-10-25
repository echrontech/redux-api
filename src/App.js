import './App.css';
import Counter from './features/counter/Counter'
import Coin from './features/counter/Coin'
import Theme from './features/theme/Theme'
function App() {
  return (
    <div className="App">
      <h1>Saleem redux</h1>
      <Counter />
      <Coin />
      <Theme />
    </div>
  );
}

export default App;
