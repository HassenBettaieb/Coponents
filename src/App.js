import logo from './logo.svg';
import './App.css';
import Photo from './component/profil/profilPhoto'
import Adress from './component/profil/adress'
import Fullname from './component/profil/fullname'
function App() {
  return (
    <div className="App">
      <Photo/>
      <Fullname/>
      <Adress/>
      
    </div>
  );
}

export default App;
