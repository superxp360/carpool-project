import NavBar from "./components/NavBar"
import AvailablePoolsList from "./components/AvaliablePoolsList"
import AddAvaliablePoolCard from "./components/startPoolForm"
import Footer from "./components/Footer"


export default function Home() {
  return (
   <main>
    <NavBar/>
    <AddAvaliablePoolCard />
    <AvailablePoolsList />
    <Footer />
   </main>
  )
}
