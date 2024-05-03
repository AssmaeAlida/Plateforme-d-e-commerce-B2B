
import CardArticle from '../CardArticle/CardArticle'
import Categories from '../Categories/Categories'
import Pagination from '../Pagination/Pagination'
import './../Home.css'
import CardProduct from '../CardProduct/CardProduct'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBarVend'
function HomeVend() {

  return (
    <>
    <div className='body'>
    <NavBar   src='./images/ellipse-31.png' alt='image profile'/>
    <Pagination/>
    <Categories/>
    <CardArticle/>
    <CardProduct/>
    <Newsletter/>
    <Footer/>

   
    </div>

   
   
    </>
  )
}

export default HomeVend
