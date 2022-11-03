import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const name = "Ben";
  const likes = 50;
  //we can also store links dynamically
  const link = "https://onedistinct.tech";

  return (
    <div className="App">
      <Navbar /> {/**importing Navbar from Navbar.js**/}
      <div className="className">
        <Home></Home>

        <h1>Hello World! {name}</h1>

        <p>Liked {likes} times!</p>

        {/**<p>{valid javascript code between the curly braces}</p>*/}

        <p>10</p>
        <p>{"String!"}</p>
        <p>{[1, 2, 3, 4, 5, 6, 7, 8, 9]}</p> {/**123456789 puts all elements*/}
        together & outputs them as a string

        <p>{Math.random() * 10}</p>

        <a href={link}>My Portfolio Site</a>
      </div>
    </div>
  );
}

export default App;
