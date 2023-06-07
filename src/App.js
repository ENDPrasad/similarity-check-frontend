import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Similarity Checker</h1>
      <div className='form' type='form'>
        <label>Question 1</label>
        <input type="text"></input>
        <label>Question 2</label>
        <input type="text"></input>
        <button>Check for similarity</button>        
      </div>
    </div>
  );
}

export default App;
