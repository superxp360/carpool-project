import AvailablePoolsCard from "./AvaliablePoolCards";

async function getPoolCards() {
  const response = await fetch('http://127.0.0.1:5002/poolForms')
  return response.json()
}

export default async function AvailablePoolsList() {

  const allPoolCards = await getPoolCards()

  return (
    <>
      {allPoolCards.map(poolCards => (
        <AvailablePoolsCard poolCards={poolCards} key={poolCards.id} />
      ))}
    </>
  )

}