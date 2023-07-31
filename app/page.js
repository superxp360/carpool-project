
import AvailablePoolsList from "./components/AvaliablePoolsList"
import AddAvaliablePoolCard from "./components/startPoolForm"


export default function Home() {
  return (
   <main className="bg-white">
    <AddAvaliablePoolCard />
    <AvailablePoolsList />
   </main>
  )
}
