// add try/catch to fetching methods
// add a routing file
// test status codes 200 and 404(should try on purpose to create an error code)
// test a certain products price

const express = require('express');
const app = express();
const port = 3000;

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

app.get('/products/:id',(req, res) => {
    const id = req.params.id;    
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response=>{
                return response.json();
            })
            .then(body =>{
                console.log(body);
                res.send(body);
            })
});

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
});

module.exports = app;
