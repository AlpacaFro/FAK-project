const supertest = require('supertest');
const express = require('express');
const app = express();


function addProduct(title, price, description, image, category){
    fetch('https://fakestoreapi.com/products',{
        method:"POST",
        body:JSON.stringify(
            {
                title: title,
                price: price,
                description: description,
                image: image,
                category: category
            }
        )
    })
        .then(res=>res.json())
        .then(json=>console.log(json))
}

addProduct('p1',3000,"some product",'https://i.pravatar.cc',"general");
