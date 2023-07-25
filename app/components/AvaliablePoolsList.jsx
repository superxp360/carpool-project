"use client"

import AvailablePoolsCard from "./AvaliablePoolCards";
import { useState, useEffect } from "react";

export default function AvailablePoolsList() {
  // declare the state variable and its setter function
  const [poolCards, setPoolCards] = useState([]);

  // define an async function to fetch the pool cards from the server and update the state
  const getPoolCards = async () => {
    const response = await fetch('http://127.0.0.1:5002/poolForms');
    const json = await response.json();
    setPoolCards(json);
  };

  // use the useEffect hook to fetch the pool cards when the component mounts
  useEffect(() => {
    getPoolCards();
  }, []);

  return (
    <div className="m-4">
      <h1 className="text-center text-3xl font-medium mb-8">Available Pools</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-8">
        {/* map over the poolCards array and render an AvailablePoolsCard component for each one */}
        {poolCards.map((poolCards) => (
          <AvailablePoolsCard poolCards={poolCards} key={poolCards.id} />
        ))}
      </div>
    </div>
  );
}