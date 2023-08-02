
import AvailablePoolsList from "./components/AvaliablePoolsList"
import AddAvaliablePoolCard from "./components/startPoolForm"


export default function Home({children}) {
  return (
   <main>
    <AddAvaliablePoolCard />
    <AvailablePoolsList />
   </main>
  )
}
