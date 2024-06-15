import Navbar from "../components/header/Navbar";
import Header from "../components/header/Header";
import FilterBar from "../components/header/FilterBar";
import ShopProducts from "../components/productsCard/ShopProducts";
import WarrantyBar from "../components/warranty/WarrantyBar";
import Footer from "../components/footer/Footer";

function ShopScreen() {
    return (
      <div>
        <Navbar/>
        <Header title="Shop" subtitle="Home > Shop"/>
        <FilterBar/>
        <ShopProducts/>
        <WarrantyBar/>
        <Footer/>
      </div>
    );
  }
  
  export default ShopScreen;