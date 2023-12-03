import React from "react";

function FlipsDisplay({ flips, handleDelete }) {

  if (!flips) {
    return <div>Loading flips...</div>;
  }

  return (
    <div>
      {flips.map((flip) => (
        <div key={flip._id}>
          {flip.outcome}
          <button onClick={() => handleDelete(flip._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default FlipsDisplay;
