import { useState } from "react"
import ExplorMenu from "../../components/ExplorMenu/ExplorMenu"
import Header from "../../components/Header/Header"
import "./Home.css"
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay"
import AppDownload from "../../components/AppDownload/AppDownload"

const Home = () => {

  const[category, setCategory] = useState("All")

  return (
    <div className="home">
    <Header/>
    <ExplorMenu  category={category}  setCategory={setCategory}/>
    <FoodDisplay category={category}/>
    <AppDownload/>
    </div>
  )
}

export default Home