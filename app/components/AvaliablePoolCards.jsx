"use client"
import { useContext } from "react";
import { AuthContext } from "../Login/authContext";

export default function AvailablePoolsCard({ poolCards, setPoolCards }) {
  // Use the useContext hook to get the authenticated user from the AuthContext
  const { user } = useContext(AuthContext);

  // Define a function to delete a pool card from the database
  const deletePoolCard = async () => {
    try {
      // Send a DELETE request to the API endpoint that corresponds to the pool card being deleted
      const res = await fetch(`https://carpool-project-kf.web.app/poolForms/${poolCards.id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log("Deleting pool card");
      // Parse the response body as JSON to get the updated list of pool cards
      const newPools = await res.json();
      // Update the state of pool cards with the updated list fetched from the server
      setPoolCards(newPools);
    } catch (error) {
      // Handle any errors that occur during the DELETE request
      console.error(error);
    }
  };

  // Render a card containing information about an available carpool ride
  return (
    <>
      <div>
        <div className="grid grid-cols-1 gap-4">
          <div className="p-3 bg-blue-100 rounded text-blue-800 h-64">
            <div className="mx-auto"></div>
            <h1>
              <strong>Driver's Name:</strong> {poolCards.firstName} {poolCards.lastName}
            </h1>
            <h1>
              <strong>Email:</strong> {poolCards.email}
            </h1>
            <h1>
              <strong>Car:</strong> {poolCards.carYear} {poolCards.carMake} {poolCards.carModel}
            </h1>
            <h1>
              <strong>Available Seats:</strong> {poolCards.numSeats}
            </h1>
            <h1>
              <strong>From:</strong> {poolCards.toAddress}
            </h1>
            <h1>
              <strong>To:</strong> {poolCards.fromAddress}
            </h1>
            <h1>
              <strong>BodyStyle:</strong> {poolCards.carBody}
            </h1>
            {/* Render a delete button that is visible only to the authenticated user who created the pool card */}
            <div className="text-right">
              {user && user.uid === poolCards.uid ? (
                <button onClick={deletePoolCard} className="rounded mt-5 text-white bg-red-600 w-10 h-10">
                  X
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}