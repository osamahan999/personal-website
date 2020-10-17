import React, { useState } from 'react';

/**
 * TODO: split different pages into different files. Then, import said files.
 */



function App() {

  const [conditional, setConditional] = useState(0);


  const setPageState = () => {
    if (conditional == 0) return homePage();

    else if (conditional == 1) return projectsPage();
  }


  /**
   * Returns the homepage
   */
  const homePage = () => {

    return (
      <div>
        {buttons()}

      </div>
    )

  }

  /**
   * Returns the projects page
   */
  const projectsPage = () => {

    return (
      <div>
        {buttons()}

      </div>
    )

  }


  /**
   * Returns the state buttons
   */
  const buttons = () => {
    return (
      <div>
        <button onClick={() => setConditional(0)} className="object-styling text-class" >Home</button>
        <button onClick={() => setConditional(1)} className="object-styling text-class" >Projects</button>
        <button onClick={() => setConditional(2)} className="object-styling text-class" >Random Skills</button>
      </div>
    )
  }



  /**
   * Main return statement 
   */
  return (
    <div>

      {setPageState()}


    </div>
  );
}



export default App;
