import { useRecoilState } from "recoil";
import { useState } from "react";
import "./GlassesProd.scss";
import { cartArr } from "../../store/index.js";
import {Link} from'react-router-dom'
import ReactImageMagnify from 'react-image-magnify';
export default function GlassesProd(products) {
    const [cart,setCart] =useRecoilState(cartArr)
    const [clicked , setClicked] = useState(true);
    const Image=products.products.image;
    console.log(cart);
    function handleAddToCart(){
       
        setCart(prev =>{
            if(prev.find((ele=> ele.id == products.products.id)) && !clicked){
                return (
                    prev && setClicked(false)
                )
            }
            else{
                return [...prev, {...products, quantity:1}];
            }
     
           
        })
    }
    return (
        
            <div className="col-3 GProd">
             <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src:Image,
                       
                    },
                    largeImage: {
                        src:Image,
                        width: 1129,
                        height:400
                    },
                    enlargedImagePosition:'over'
                }} />
            {/* <img src={products.products.image}></img> */}
            <div className='col-12 glasscontent'>
                <h6>{products.products.title}</h6>
                   <p>{products.products.description}</p>
                   <div className='col-12 con2'>
                       <h5 className='col-6'>EGP {products.products.price}</h5>
                       {!cart.find((ele=> ele.products.id == products.products.id)) ?
                        <button className='col-6' onClick={handleAddToCart}>Add to cart</button>
                        : ''}
                    </div>
                    <Link to='/cartpage'><h6>Check your order</h6></Link>
            </div>
            
        </div>
        
    );                                        
}


























// import "./GlassesProd.scss";
// import ReactImageMagnify from 'react-image-magnify';
// import image from './gs1.png'
// import products from '../../data/db.json';
// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";
// export default function GlassesProd() {
//     const [products ,setProducts]=useState([]);
//     useEffect(()=>{
// axios("http://localhost:3004/products").then((data) => setProducts(data.data));
//     },[]);

//     return (
//         <div className="col-12" id="GlassesProd">
//              {products.map((products,index) =>{
//                 return(
//                     <div key={index}>
//                         <GlassesProd products={products}/>
//                     </div>
//                 );
//             })
//         }
//             <div className="col-3 GProd">
//                 <ReactImageMagnify {...{
//                     smallImage: {
//                         alt: 'Wristwatch by Ted Baker London',
//                         isFluidWidth: true,
//                         src:image,
//                     },
//                     largeImage: {
//                         src:image,
//                         width: 1129,
//                         height:400
//                     }
//                 }} />
             
//                 <div className='col-12 glasscontent'>
//                     <img src={products.image}></img>
//                     <h6>{products.title}</h6>
//                     <p>{products.description}</p>
//                     <div className='col-12 con2'>
//                         <h5 className='col-6'>{products.price}</h5>
//                         <button className='col-6'>Add to cart</button>
//                     </div>
//                 </div>
//             </div>
          
//         </div>
//     );
// }