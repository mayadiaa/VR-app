import './CartItem.scss';
import { cartArr } from "../../store/index.js";
import { useRecoilState } from "recoil";
export default function CartItem({products}){
    const [cart,setCart] =useRecoilState(cartArr)
    function removefromcart() {
      
        setCart((Prev) => {
          return Prev.filter((ele) => ele.products.id !== products.products.id);
        });
      }
  console.log(products);
  console.log(cart);
    function increment() {
        setCart((prev) => {
          const obj = prev.find((ele) => ele.products.id === products.products.id);
          const idx = prev.indexOf(obj);
          const newarr = [...prev];
          const newObj = { ...obj };
          newObj.quantity++;
          newarr[idx] = newObj;
    
          return newarr;
        });
      }
      function decrement() {
        setCart((prev) => {
          const obj = prev.find((ele) => ele.products.id === products.products.id);
          if (obj.quantity === 1) return prev;
          const idx = prev.indexOf(obj);
          const newarr = [...prev];
          const newObj = { ...obj };
          newObj.quantity--;
          newarr[idx] = newObj;
    
          return newarr;
        });
      }
      console.log(parseInt(products.products.price));
    return(
       
        <tr>
    <td>
        <img className='ImgDiv2' src={products.products.image}></img>
    </td>
    <td>
        <p className="PColor">{products.products.title}</p>
        <p>{products.products.description}</p>
    </td>
    <div id="BtCart">
        <h5 onClick={decrement}>-</h5>
    <td><span>{products.quantity}</span></td>
    <h5 onClick={increment}>+</h5>
    </div>
   
    <td className="ThePrice">EGP {products.products.price}</td>
    <td>
        <div className="thebtn"><button className="TheButton" onClick={removefromcart}>Remove</button></div></td>
    <div className="total">
         <h4> EGP { (+products.quantity) * (+products.products.price)}</h4>
       </div>
</tr>

        
    );
}