import React from "react";
import Header from "./components/header";
import HomePage from "./containers/homeContainer";

function App() {
  return (
    <div className='px-20'>
       <Header/>
      <HomePage />
    </div>
  );
}

export default App;
