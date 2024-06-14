import Navbar from "../components/header/Navbar";
import Header from "../components/header/Header";
import FilterBar from "../components/header/FilterBar";

function ShopScreen() {
    return (
      <div>
        <Navbar/>
        <Header title="Shop" subtitle="Home > Shop"/>
        <FilterBar/>
      </div>
    );
  }
  
  export default ShopScreen;