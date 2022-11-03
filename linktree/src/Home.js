const Home = () => {
    // const handleClick = () => {
    //     console.log("Hello World!")
    // }
  //   const handleClick = (e) => {
  //     console.log("Hello World!", e)  //logs the event object & its properties.So you can log e.target, e.button etc
  // }
    // const handleClickAgain = (name) =>{
    //   console.log("Hello " + name);
    // }

    //event parameter
    // const handleClickAgain = (name, e) => {
    //   console.log("Hello " + name, e.target);
    // }


  return (
    <div className="container">
      <div className="home">
        <h2>Homepage</h2>
        
      </div>
      <div className="kitchen">
       {/* <h2>Kitchen</h2>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={(e) => {handleClickAgain("Ben", e) }}>Click Me Again</button> */}
        {/*the anonymous function gets access to event object.Its then passed into the inner function as the second param*/} 
      </div>
    </div>
  );
};

export default Home;
