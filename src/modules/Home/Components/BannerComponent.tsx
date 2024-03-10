import Banner from '../../../assets/home_banner.jpg'

const BannerComponent = () => {
  return (
    <div className='home__banner'>
        <img src={Banner} alt='Banner' className='home__banner__image'/>
    </div>
  )
}

export default BannerComponent