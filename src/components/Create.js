import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Create = (props) => {
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");

    const allDescriptions = [
        "Apparel",
        "Gardening Equipment",
        "Kitchen Utensils",
        "Books",
        "Albums",
        "Computer Equipment",
        "Home Decor",
        "Cellular Phones"
    ]

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            title,
            price,
            description,
        };
        axios.post("http://localhost:8000/api/productmanager/", newProduct)
          .then((res) => {
             console.log(res);
             navigate("/productmanagers/" + res.data._id);
          })
          .catch((err) => {
              console.log(err);
          })
    }

    return (
        <div>
            <h2>Create Products</h2>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input 
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Price</label>
                <input 
                type="text"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label>Description</label>
                <select 
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                > 
                <option value=""></option>
                {
                    allDescriptions.map((descriptionType, index) => (
                        <option value={descriptionType} key={index}>{descriptionType}</option>
                    ))
                }
                </select>
            </div>
            <div>
                <button type="submit">Add Product</button>
            </div>
            </form>
        </div>
    )
}

export default Create;