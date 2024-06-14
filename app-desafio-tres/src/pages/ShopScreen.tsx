import Navbar from "../components/header/Navbar";
import Header from "../components/header/Header";
import FilterBar from "../components/header/FilterBar";
import ShopProducts from "../components/productsCard/ShopProducts";

function ShopScreen() {
    return (
      <div>
        <Navbar/>
        <Header title="Shop" subtitle="Home > Shop"/>
        <FilterBar/>
        <ShopProducts/>
      </div>
    );
  }
  
  export default ShopScreen;