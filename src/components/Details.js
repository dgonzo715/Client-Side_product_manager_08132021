import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Details = (props) => {
    const { id } = props;
    const [ productmanager, setProductManager ] = useState({});
    useEffect(() => {
       axios.get("http://localhost:8000/api/productmanager/" + id)
       .then((res) => {
           console.log(res);
           setProductManager(res.data) 
       })
       .catch((err) => {
         console.log(err);
       })
    }, [])
    return (
        <div>
            <h2>Product Details</h2>
            <table>
                <tbody>
                    <tr>
                      <td>Title:</td>
                      <td>{productmanager.name}</td>
                    </tr>
                    <tr>
                      <td>Price:</td>
                      <td>{productmanager.name}</td>
                    </tr>
                    <tr>
                      <td>Description:</td>
                      <td>{productmanager.name}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Details;