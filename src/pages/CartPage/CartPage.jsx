import './CartPage.scss';
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { WOW } from "wowjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { $Current_Width } from "../../store";
import { useRecoilState } from "recoil";
import MainHeader from "../../components/MainHeader/MainHeader";
import ServiceHeader from "../../components/ServiceHeader/ServiceHeader";
import CartList from '../../components/CartList/CartList';
import { cartArr } from "../../store/index.js";
import CartFooter from '../../components/CartFooter/CartFooter.jsx';

export default function CartPage(){
    const [cart] = useRecoilState(cartArr)
    const [Current_Width] = useRecoilState($Current_Width);
    useEffect(() => {
        // console.log(Current_Width);
        // Active WoW.js
        const wow = new WOW({ live: false });
        wow.init();
    }, []);
    return(
    <div className='col-12'>
        
     <MainHeader />
        <ServiceHeader Name="Shopping Cart"/>
      {cart.length === 0?<h1 className=' text-center '>Cart   is   empty</h1>:<>
      <CartList />
      <CartFooter/>
      </>}
   
       

    </div>
    );
}