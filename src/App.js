import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Services from './Components/services/Services';
import './App.css';
import './normalize.css';
import Landing from './Components/landing/Landing';
import Rent from './Components/rent/Rent';
import OurBrands from './Components/ourBrands/OurBrands';
import FormCom from './Components/form/Form';
import OurVehicles from './Components/ourVehicles/OurVehicles';

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Landing />
        <FormCom/>
        <Services />
        <OurVehicles/>
        <Rent />
        <OurBrands />
      </div>
      <Footer />
    </>
  );
}
export default App;
