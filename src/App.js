import './App.css';
import './darkmod.css';
import Calendar from 'react-calendar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Cabinet d'implantologie dentaire du Dr Jean-Charles Giunta
        </h1>
        <Calendar/>
      </header>
    </div>
  );
}

export default App;
