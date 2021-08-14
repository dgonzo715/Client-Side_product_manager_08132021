import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const AllProducts = (props) => {
    const [ allProducts, setAllProducts] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/productmanager")
        .then((res) => {
          console.log(res);
          setAllProducts(res.data);  // this is the same the body that is returned in postman
        })
        .catch((err) => {
           console.log(err); 
        })
    }, [])
    return (
        <div>
            <h2>All Products</h2>
            {
                allProducts.map((product, index) => (
                    <div key={index}>
                    <Link> to={"/products/" + product.id}>{product.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default AllProducts;