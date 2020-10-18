import React, { useState } from 'react';



function Navbar(props) {
    return (
        <div>
          <button onClick={() => props.conditionalRenderFunction(0)} className="object-styling text-class" >Home</button>
          <button onClick={() => props.conditionalRenderFunction(1)} className="object-styling text-class" >Projects</button>
          {/* <button onClick={() => setConditional(2)} className="object-styling text-class" >Random Skills</button> */}
        </div>
      )
}

export default Navbar