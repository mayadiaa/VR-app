import './CartList.scss';
import CartItem from "../CartItem/CartItem";
import { cartArr } from "../../store/index.js";
import { useRecoilState } from "recoil";
export default function CartList(){
    const [cart] = useRecoilState(cartArr)
    console.log(cart);
    return(
        <table className=" col-11  table-bordered">
        <thead>
            <tr>
                <th>Items</th>
                <th>Description</th>
                <th>Qty</th>
                <th>Price</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        {cart.map((products) => {
                    return (
                      
                            <CartItem products={products}  />
                       
                    );
                })

                }
        </tbody>
     
    </table>
    );
}