import React, { useState } from 'react';

/**
 * TODO: split different pages into different files. Then, import said files.
 */



function App() {

  /**
   * Page state hook
   */
  const [conditional, setConditional] = useState(0);
  const [saxVideos, setSaxVideos] = useState(true);

  /**
   * Sets the page state by returning correct html based on $conditional hook
   */
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
        {navbar()}
        
      </div>
    )

  }

  /**
   * Returns the projects page
   */
  const projectsPage = () => {

    return (
      <div>
        {navbar()}
        <button onClick={() => setSaxVideos(!saxVideos)} className="object-styling text-class">Sax Videos</button>
        {saxVids()}


      </div>
    )

  }


  /**
   * Based on the saxVideos boolean hook, it returns the sax videos html
   */
  const saxVids = () => {
    if (saxVideos) {

      return (
      <div className = "videos">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YufSybhKtH0"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture" allowfullscreen>
        </iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/YufSybhKtH0"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture" allowfullscreen>
        </iframe>

      </div>
      )
    }
       
  }

  /**
   * Returns the state buttons
   */
  const navbar = () => {
    return (
      <div>
        <button onClick={() => setConditional(0)} className="object-styling text-class" >Home</button>
        <button onClick={() => setConditional(1)} className="object-styling text-class" >Projects</button>
        {/* <button onClick={() => setConditional(2)} className="object-styling text-class" >Random Skills</button> */}
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
