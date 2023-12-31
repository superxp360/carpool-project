"use client"


import AvailablePoolsCard from "./AvaliablePoolCards";
import { useState, useEffect } from "react";

export default function AvailablePoolsList() {
  const [poolCards, setPoolCards] = useState([]);


// Define a functio that gets all the pool cards
  const getPoolCards = async () => {
    const response = await fetch('https://carpool-project-kf.web.app/poolForms');
    const json = await response.json();
    setPoolCards(json);
  };

  // Define a function that filters car body types
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
  

  useEffect(() => {
    getPoolCards();
  }, []);

  

  return (
    <div>
      <div className="flex flex-row justify-center mt-20 mb-10">
        <h1 className="text-center text-6xl text-sky-400 font-sans">Available Pools</h1>
      </div>
      <div className="flex flex-row mr-5 ml-5 justify-center mb-5 space-x-[5px] font-semibold">
        <button className="hover:bg-sky-400 focus:bg-sky-400 rounded py-3 px-5" onClick={getPoolCards}>All</button>
        <h1 className="mt-3">|</h1>
        <button onClick={getSedanCards} className="hover:bg-sky-400 focus:bg-sky-400 rounded py-3 px-5">Sedan</button>
        <h1 className="mt-3">|</h1>
        <button onClick={getSUVCards} className="hover:bg-sky-400 focus focus:bg-sky-400 rounded py-3 px-5">SUV</button>
        <h1 className="mt-3">|</h1>
        <button onClick={getPickUpCards} className="hover:bg-sky-400 focus focus:bg-sky-400 rounded py-3 px-5">PickUp</button>
        <h1 className="mt-3">|</h1>
        <button onClick={getCoupeCards}className=" hover:bg-sky-400 focus focus:bg-sky-400 rounded py-3 px-5">Coupe</button>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        {poolCards.length === 0 ? (
          <p className="text-center ml-10 text-2xl text-sky-500">No Avaliable Pools</p>
        ) : (
        poolCards.map((poolCards) => (
          <AvailablePoolsCard poolCards={poolCards} setPoolCards={setPoolCards} />
        )))}
      </div>
    </div>
  );
}