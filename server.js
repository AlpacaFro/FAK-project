const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.json());

app.addProduct = (title, price, description, image, category) => {
  return axios.post("https://fakestoreapi.com/products", {
    title: title,
    price: price,
    description: description,
    image: image,
    category: category,
  });
};

app.post("/addProduct", async (req, res) => {
  const { title, price, description, image, category } = req.body;
  try {
    const response = await app.addProduct(
      title,
      price,
      description,
      image,
      category
    );

    

    res.status(200).json(response.data); // Send the response from FakeStore API
  } catch (error) {
    res.status(500).json({ error: "Failed to add product" });
  }
});

app.listen(3000, () => {
  console.log("server is running on  port 3000");
});

module.exports = app;
