import './App.css';
import images from './images';

function App() {
  return (
    <div className="App">
      <h3>Learn React Hooks</h3>
      <img 
        src={images[0]} 
        style={{ 
          height: '60vh', 
          width: '95vw'
        }}
      />
    </div>
  );
}

export default App;
