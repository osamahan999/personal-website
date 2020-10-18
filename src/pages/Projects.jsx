import React, { useState } from "react";


/**
 * TODO: split different pages into different files. Then, import said files.
 */

function Projects() {
  const [saxVideos, setSaxVideos] = useState(true);

  return (
    <div>
      <button
        onClick={() => setSaxVideos(!saxVideos)}
        className="object-styling text-class"
      >
        Sax Videos
      </button>
      {/* {saxVids()} */}
    </div>
  );
}

export default Projects;
