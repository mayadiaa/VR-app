import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage";
import FormPage from "./pages/Form";
import ServicePage from "./pages/ServicePage/ServicePage";
import { Route, Routes, BrowserRouter, Link, Outlet } from "react-router-dom";
import { $Current_Width } from "./store";
import { useRecoilState } from "recoil";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from"./pages/ContactPage/ContactPage";
import PurchasePage from"./pages/PurchasePage/PurchasePage";
import GamingVrPage from "./pages/GamingVrPage/GamingVrPage";
import ArchitecturePage from"./pages/ArchitecturePage/ArchitecturePage";
import ToursPage from"./pages/ToursPage/ToursPage";
import ArchPlacePage1 from "./pages/ArchPlacePage1/ArchPlacePage1";
import ArchPlace2 from './pages/ArchPlace2/ArchPlace2';
import ArchPlace3 from './pages/ArchPlace3/ArchPlace3';
import ArchPlace4 from './pages/ArchPlace4/ArchPlace4';
import ArchPlace5 from './pages/ArchPlace5/ArchPlace5';
import ArchPlace6 from './pages/ArchPlace6/ArchPlace6';
import Tour1 from'./pages/Tour1/Tour1';
import Tour2 from'./pages/Tour2/Tour2';
import Tour3 from'./pages/Tour3/Tour3';
import Tour4 from'./pages/Tour4/Tour4';
import Tour5 from'./pages/Tour5/Tour5';
import Tour6 from'./pages/Tour6/Tour6';
import Game1 from "./pages/Game1/Game1";
import Game2 from "./pages/Game2/Game2";
import Game3 from "./pages/Game3/Game3";
import CartPage from './pages/CartPage/CartPage';
import ScrollToTop from "../src/components/Scroll/Scroll";
import {RecoilRoot} from'recoil';
// import { AFrameRenderer, Marker } from 'aframe-react';
function App() {
  const [Current_Width, setCurrent_Width] = useRecoilState($Current_Width);
  window.addEventListener('resize', () => {
    setCurrent_Width(window.innerWidth);
  })
  return (
    <div className="App">
    <RecoilRoot>
      <BrowserRouter>
    <ScrollToTop/>
        {/* <div className="col-12 alert alert-success">
          <Link className="m-3" to="/">
            Home
          </Link>
          <Link className="m-3" to="/login">
            Login
          </Link>
          <Link className="m-3" to="/anyThingElese">
            Page 404
          </Link>
          <Link className="m-3" to="/service">
           <ServicePage/>
          </Link>
        </div>  */}

        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="form" element={<FormPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="service" element={<ServicePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="purchase" element={<PurchasePage />} />
            <Route path="/gaming" >
              <Route index element={<GamingVrPage />}></Route>
              <Route path="game1" element={<Game1/>}></Route>
              <Route path="game2" element={<Game2/>}></Route>
              <Route path="game3" element={<Game3/>}></Route>
              </Route> 
            <Route path="/architecture">
              <Route index element={<ArchitecturePage />}></Route>
              <Route path="archPlacePage1" element={<ArchPlacePage1/>}></Route>
              <Route path="archPlace2" element={<ArchPlace2/>}></Route>
              <Route path="archPlace3" element={<ArchPlace3/>}></Route>
              <Route path="archPlace4" element={<ArchPlace4/>}></Route>
              <Route path="archPlace5" element={<ArchPlace5/>}></Route>
              <Route path="archPlace6" element={<ArchPlace6/>}></Route>
            </Route>
            <Route path="/tours" >
              <Route index element={<ToursPage/>}></Route>
              <Route path="tour1" element={<Tour1/>}></Route>
              <Route path="tour2" element={<Tour2/>}></Route>
              <Route path="tour3" element={<Tour3/>}></Route>
              <Route path="tour4" element={<Tour4/>}></Route>
              <Route path="tour5" element={<Tour5/>}></Route>
              <Route path="tour6" element={<Tour6/>}></Route>
            </Route>
        <Route path="cartpage" element={<CartPage/>}></Route>
            <Route path="*" element={"Page 404"}/>
          </Route>
        </Routes>
        <Outlet />
      </BrowserRouter>
      </RecoilRoot>
      
    </div>
  );
}

export default App;
