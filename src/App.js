import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/Movies/HomePage.component';
import { MyProvider } from './components/Movies/MyProvider.component';
import { AddMovie } from './components/Movies/AddMovie.component';
function App() {
  return (
    <MyProvider>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HomePage />
        {/* <AddMovie/> */}
      </header>
    </div>
    </MyProvider>
  );
}

export default App;
