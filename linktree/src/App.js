import './App.css';
import Profile from './Profile';
import Links from './Links';
import Contact from './Contact'

function App() {
  return (
    <div className="App">
     <div className="container">
      <Profile/>  {/**oor <Profile></Profile> */}
      <Links/>
      <Contact></Contact>
     </div>
    </div>
  );
}

export default App;
