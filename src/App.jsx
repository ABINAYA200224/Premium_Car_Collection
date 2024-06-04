
import './App.css'
import Header from './Components/Header/Header'
import HeaderBacground from './Components/Header/HeaderBacground'
import BrandCategorySection from './Components/BrandCategorySection/BrandCategorySection'
import AllVehiclesComponent from './Components/VehiclesCard/AllVehiclesComponent'
import VehiclesTypes from './Components/VehiclesTypes/VehiclesTypes'
import PartnerAndSuppoter from './Components/PartnerAndSupporter/PartnerAndSuppoter'
import BestSellingCars from './Components/BestSellingCars/BestSellingCars'
import FindCarComponent from './Components/FindCarCompoent/FindCarComponent'
import ClientComponent from './Components/ClientComponent/ClientComponent'
import CarDelerService from './Components/CarDelerService/CarDelerService'
import BlogComponent from './Components/BlogComponent/BlogComponent'
import FooterComponent from './Components/Footercomponent/FooterComponent'


function App() {


  return (
    <div className='flex flex-col gap-[100px]'>
      <div>
        <Header />
        <HeaderBacground />
        <BrandCategorySection />
      </div>

      <AllVehiclesComponent />
      <VehiclesTypes />
      <PartnerAndSuppoter />

      <BestSellingCars />
      <FindCarComponent />
      <ClientComponent />
      <CarDelerService />
      <BlogComponent />
      <FooterComponent />


    </div>
  )
}

export default App
