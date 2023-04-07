
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     

      <Router>
      
  <Route exact path="/" component={Home} />
  <Route path="/AboutUs" component={AboutUs} />
  <Route path="/Products" component={Products} />

 
      </Router>
  
    </div>

  
    
  );
}

export default App;
