import "./MyJsonG.scss";
import GlassesProd from "../GlassesProd/GlassesProd";
import axios from "axios";
import { useEffect, useState } from "react";
export default function MyJsonG() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios("http://localhost:3004/products")
            .then((data) => setProducts(data.data))

    }, []);
    return (

        <div className="col-12" id="GlassesProd">
    
                {products.map((products) => {
                    return (
                      
                            <GlassesProd products={products}  />
                       
                    );
                })

                }
            </div>
  
    );
}