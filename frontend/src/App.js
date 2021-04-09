import './App.css';
import MenuComp from './Components/MenuComp';
import Page from './Components/Page';

function App() {
  return (
    <div className="App">
      <div className="menu-icon-container"><MenuComp/></div>
      <div className="page-outer-container"><Page /></div>

    </div>
  );
}

export default App;
