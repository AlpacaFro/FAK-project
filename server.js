const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;


//app.getProductDetails('https://fakestoreapi.com/products/1');
app.getProductDetails = async (url) => {
    try {
        const response = await axios.get(url);
        console.log(response.data);
        
        return response;
    } catch (error) {
        console.log(error.response.status);
        return error.response;
    }
};

//app.addProduct('p1',3000,"some product",'https://i.pravatar.cc',"general").then(result => console.log(result));
app.addProduct = function (title, price, description, image, category){
    return fetch('https://fakestoreapi.com/products',{
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
}
  
app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
});

module.exports = app;
