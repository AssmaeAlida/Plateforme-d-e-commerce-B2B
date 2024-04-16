import Categories from './Categories/Categories'
import HeroPage from './HeroPage/HeroPage'
import './Home.css'
import NavBar from './NavBar/NavBar'
import Pagination from './Pagination/Pagination'
import Newsletter from './Newsletter/Newsletter'
import CardArticle from './CardArticle/CardArticle'
import CardProduct from './CardProduct/CardProduct'
import Footer from './Footer/Footer'
function Home() {

  return (
    <>
    <div className='body'>
    <NavBar/>
    <Pagination/>
    <HeroPage/>
    <Categories />
    <CardArticle/>
    <CardProduct/>
    <Newsletter/>
    <Footer/>
    </div>

   
   
    </>
  )
}

export default Home
