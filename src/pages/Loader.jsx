import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';

const Loader = () => {
  return (
    <div className="h-[90vh] flex justify-center items-center">
      <Player
        src="https://lottie.host/2037d34c-b0b8-44b1-819e-f3fe516f8cf9/xQcMHiHBPH.json"
        className="player h-32 w-32"
        loop
        autoplay
      />
    </div>
  );
};

export default Loader;
