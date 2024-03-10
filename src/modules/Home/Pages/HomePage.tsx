import FooterComponent from "../../Core/Components/Footer/FooterComponent"
import NavbarComponent from "../../Core/Components/Navbar/NavbarComponent"
import BannerComponent from "../Components/BannerComponent"
import ContentComponent from "../Components/ContentComponent"
import HomeFormComponent from "../Components/HomeFormComponent"

const HomePage = () => {
  return (
    <main className='home'> 
        <NavbarComponent/>
        <div className='home__sections'>
          <BannerComponent/>
          <ContentComponent/>
          <HomeFormComponent/>
        </div>
        <FooterComponent/>
    </main>
  )
}

export default HomePage