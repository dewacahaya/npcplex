import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import "./home.scss"
import List from "../../components/list/List"

const Home = () => {
  return (
    <div className='home'>
        <Featured/>
        <List/>
        <List/>
        <List/>
        <List/>
        <Navbar/>
    </div>
  )
}

export default Home
