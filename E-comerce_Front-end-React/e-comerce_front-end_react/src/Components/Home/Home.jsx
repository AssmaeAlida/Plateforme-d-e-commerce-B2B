import Categories from './Categories/Categories'
import HeroPage from './HeroPage/HeroPage'
import './Home.css'
import NavBar from './NavBar/NavBar'
import Pagination from './Pagination/Pagination'
import Newsletter from './Newsletter/Newsletter'

function App() {

  return (
    <>
    <div className='body'>
    <NavBar/>
    <Pagination/>
    <HeroPage/>
    <Categories/>
    <Newsletter/>
    </div>

   
   
    </>
  )
}

export default App
