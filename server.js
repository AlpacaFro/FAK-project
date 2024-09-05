const express = require('express');
const app = express();
const port = 3000;

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
        })//.then(response => response.json())
        // .then(res=>res.json())
        // .then(json=>{
        //     console.log(json)
        // })
}
app.add = function() {return 'success!'};
/**Acceptance Criteria:

The product detail page should display the product’s name, full description, price, category, and images.

Product reviews and ratings should be displayed if available.

Users should see available stock levels.

Include an "Add to Cart" button on the product detail page. */

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

//app.addProduct('p1',3000,"some product",'https://i.pravatar.cc',"general").then(result => console.log(result));
app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
});

module.exports = app;