import logo from './logo.svg';
import './App.css';
import Adminapp from './adminapp';
import PublicApp from './publicapp';


function App() {
  if (localStorage.getItem("adminid") != null) {
    return (
      <Adminapp />
    )
  } else {
    return (
      <PublicApp />
    )
  }

}

export default App;
