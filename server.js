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
    })
        // .then(res=>res.json())
        // .then(json=>{
        //     console.log(json)
        // })
}
app.add = function() {return 'success!'};

//app.addProduct('p1',3000,"some product",'https://i.pravatar.cc',"general").then(result => console.log(result));
// app.listen(port, ()=>{
//     console.log(`server is listening on port ${port}`);
// });

module.exports = app;