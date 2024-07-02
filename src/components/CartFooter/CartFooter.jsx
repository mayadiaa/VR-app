import "./CartFooter.scss";
import { cartArr } from "../../store/index.js";
import { useRecoilState } from "recoil";
export default function CartFooter({products}){
    const [cart,setCart] =useRecoilState(cartArr)

    return(
        <div className="total">
        {/* <h4> EGP { +products.products.quantity * +products.products.price}</h4> */}
      </div>
    );
}