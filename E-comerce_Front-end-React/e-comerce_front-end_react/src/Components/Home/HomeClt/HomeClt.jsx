
import CardArticle from '../CardArticle/CardArticle'
import Categories from '../Categories/Categories'
import Pagination from '../Pagination/Pagination'
import './../Home.css'
import NavBar from './../NavBar/NavBarClt'
import HeroPageClt from './HeroPageClt/HeroPageClt'
import CardProduct from '../CardProduct/CardProduct'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'
function HomeClt() {

  return (
    <>
    <div className='body'>
    <NavBar src='./images/ellipse-31.png' alt='image profile'/>
    <Pagination/>
    <HeroPageClt/>
    <Categories/>
    <CardArticle/>
    <CardProduct/>
    <Newsletter/>
    <Footer/>

   
    </div>

   
   
    </>
  )
}

export default HomeClt
