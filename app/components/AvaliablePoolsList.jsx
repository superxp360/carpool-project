"use client"
import {deleteDoc} from 'f'
import AvailablePoolsCard from "./AvaliablePoolCards";
import { useState, useEffect } from "react";



export default function AvailablePoolsList() {
  // declare the state variable and its setter function
  const [poolCards, setPoolCards] = useState([]);

  // define an async function to fetch the pool cards from the server and update the state
  const getPoolCards = async () => {
    const response = await fetch('https://carpool-project-kf.web.app/poolForms');
    const json = await response.json();
    setPoolCards(json);
    // set filtered pools to json as well
  };

  // write your filter function
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
  
  // use the useEffect hook to fetch the pool cards when the component mounts
  useEffect(() => {
    getPoolCards();
  }, []);

  
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
          <AvailablePoolsCard poolCards={poolCards} key={poolCards.id} />
        ))}
      </div>
    </div>
  );
}