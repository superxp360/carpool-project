"use client"

// Import the "AvailablePoolsCard" component and the "useState" and "useEffect" hooks from React.
import AvailablePoolsCard from "./AvaliablePoolCards";
import { useState, useEffect } from "react";

// Define a React component that displays a list of available carpool rides.
export default function AvailablePoolsList() {
  // Declare the "poolCards" state variable and its setter function using the "useState" hook.
  const [poolCards, setPoolCards] = useState([]);

  // Define an asynchronous function to fetch the pool cards from the server and update the state.
  const getPoolCards = async () => {
    const response = await fetch('https://carpool-project-kf.web.app/poolForms');
    const json = await response.json();
    setPoolCards(json);
    // set filtered pools to json as well
  };

  // Define a set of filter functions to filter the available pool cards based on the body style of the car.
  const getSedanCards = async () => {
    const response = await fetch('https://carpool-project-kf.web.app/poolForms');
    const json = await response.json();
    const filterPoolForm = json.filter((card) => card.carBody === "Sedan");
    setPoolCards(filterPoolForm)
    
  }

  const getSUVCards = async () => {
    const response = await fetch('https://carpool-project-kf.web.app/poolForms');
    const json = await response.json();
    const filterPoolForm = json.filter((card) => card.carBody === "SUV");
    setPoolCards(filterPoolForm)
    
  }

  const getPickUpCards = async () => {
    const response = await fetch('https://carpool-project-kf.web.app/poolForms');
    const json = await response.json();
    const filterPoolForm = json.filter((card) => card.carBody === "Pick-up");
    setPoolCards(filterPoolForm)
  }

  const getCoupeCards = async () => {
    const response = await fetch('https://carpool-project-kf.web.app/poolForms');
    const json = await response.json();
    const filterPoolForm = json.filter((card) => card.carBody === "Coupe");
    setPoolCards(filterPoolForm)
  }
  
  // Use the "useEffect" hook to fetch the pool cards when the component mounts.
  useEffect(() => {
    getPoolCards();
  }, []);

  
  // Render the component.
  return (
    <div>
      <div className="flex flex-row justify-center mt-[160px] mb-[100px]">
        <h1 className="text-center mt-2 text-6xl text-sky-700">Available Pools</h1>
        <h1 className=" text-2xl mt-[25px] ms-[100px]">Just press on the "Join Pool!" button to get join a pool.</h1>
      </div>
      <div className="flex flex-row justify-center space-x-[35px] font-semibold">
        <button className=" focus:bg-sky-400 rounded py-3 px-5" onClick={getPoolCards}>All</button>
        <h1 className="mt-2 text-xl">|</h1>
        <button onClick={getSedanCards} className=" focus:bg-sky-400 rounded py-3 px-5">Sedan</button>
        <h1 className="mt-2 text-xl">|</h1>
        <button onClick={getSUVCards} className=" focus:bg-sky-400 rounded py-3 px-5">SUV</button>
        <h1 className="mt-2 text-xl">|</h1>
        <button onClick={getPickUpCards} className=" focus:bg-sky-400 rounded py-3 px-5">PickUp</button>
        <h1 className="mt-2 text-xl">|</h1>
        <button onClick={getCoupeCards}className="focus:bg-sky-400 rounded py-3 px-5">Coupe</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-8">
        {
        poolCards.map((poolCards) => (
          <AvailablePoolsCard poolCards={poolCards} key={poolCards.id} setPoolCards={setPoolCards} />
        ))}
      </div>
    </div>
  );
}