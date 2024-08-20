import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar/navbar";
import TopBar from "./Components/TopBar/topbar";
import Intro from "./Components/Intro/intro";
import Arrival from "./Components/Arrival/arrival";
import Product from './Components/Product/product';
import Footer from "./Components/Footer/footer";
import Category from './Components/Category/category';

function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Intro />
      <Arrival />
      <Product />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
