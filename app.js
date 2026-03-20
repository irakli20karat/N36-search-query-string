const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const products = [
    { id: 1, name: 'Samsung Galaxy', price: 900 },
    { id: 2, name: 'iPhone 15', price: 1200 },
    { id: 3, name: 'MacBook Pro', price: 2500 }
];

app.get('/products', (req, res) => {
    let maxPrice = +req.query.maxPrice;
    isNaN(maxPrice) ? res.json(products) : res.json(products.filter((e) => e.price <= maxPrice));
})

app.get('/products/:id', (req, res) => {
    let id = +req.params.id;
    let product = products.find((p) => p.id == id);
    product ? res.json(product) : res.send('404 პროდუქტი ვერ მოიძებნა');
})

app.listen(port, () => {
    console.log("Server is running on port", port);
})