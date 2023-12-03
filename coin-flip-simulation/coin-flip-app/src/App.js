import React, { useState, useEffect } from "react";
import { fetchFlips, createFlip, deleteFlip } from "./services/api";
import FlipButton from "./components/FlipButton";
import FlipsDisplay from "./components/FlipsDisplay";

function App() {
  const [flips, setFlips] = useState([]);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);

  useEffect(() => {
    const loadFlips = async () => {
      try {
        const fetchedFlips = await fetchFlips();
        setFlips(fetchedFlips);
      } catch (error) {
        console.error("Error fetching flips:", error);
      }
    };

    loadFlips();
  }, []);

  useEffect(() => {
    if (!flips) {
      return;
    }

    const heads = flips.filter((flip) => flip.outcome === "heads").length;
    const tails = flips.filter((flip) => flip.outcome === "tails").length;
    setHeadsCount(heads);
    setTailsCount(tails);
  }, [flips]);

  const handleFlip = async () => {
    const outcome = Math.random() > 0.5 ? "heads" : "tails";
    try {
      const newFlip = await createFlip(outcome);
      setFlips((prevFlips) => [...prevFlips, newFlip]);
    } catch (error) {
      console.error("Error creating a flip:", error);
    }
  };

  const handleDelete = async (flipId) => {
    try {
      await deleteFlip(flipId);
      setFlips(flips.filter((flip) => flip._id !== flipId));
    } catch (error) {
      console.error("Error deleting flip:", error);
    }
  };

  return (
    <div className="App">
      <h1>Coin Flip Simulator</h1>
      <FlipButton onFlip={handleFlip} />
      <FlipsDisplay flips={flips} handleDelete={handleDelete} />
      <div>
        <p>Heads: {headsCount}</p>
        <p>Tails: {tailsCount}</p>
      </div>
    </div>
  );
}

export default App;
