import logo from './logo.svg';
import './App.css';
// import { HomePage } from './components/Movies/HomePage.component';
// import { AddMovie } from './components/Movies/AddMovie.component';
import Comments from './components/Movies/Comments.component';
import MyView from './components/Movies/Views.component';
import Post from './components/Movies/Post.component';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <HomePage /> */}
        {/* <AddMovie/> */}
        {/* <MyView/> */}
        {/* <Comments/> */}
        <Post/>
      </header>
    </div>
  );
}

export default App;
