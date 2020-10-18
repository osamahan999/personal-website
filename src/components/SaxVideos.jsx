import React, { useState } from "react";

/**
 * TODO: split different pages into different files. Then, import said files.
 */

function SaxVideos() {
  return (
    <div className="videos">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YufSybhKtH0"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YufSybhKtH0"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default SaxVideos;
