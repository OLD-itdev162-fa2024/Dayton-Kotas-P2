import React from "react";
import { createFlip } from "../services/api"; 

function FlipButton({ onFlip }) {
  const flipCoin = async () => {
    try {
      const outcome = Math.random() > 0.5 ? "heads" : "tails";
      const newFlip = await createFlip(outcome); 
      onFlip(newFlip); 
    } catch (error) {
      console.error("Error flipping the coin:", error);
    }
  };

  return <button onClick={flipCoin}>Flip Coin</button>;
}

export default FlipButton;
