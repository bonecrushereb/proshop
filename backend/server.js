import express from 'express';
import products from './data/products.js';
import connectDb from './config/db.js';


const PORT = process.env.PORT || 3000;
const app = express();

connectDb();

app.get('/', (req, res) => {
    res.send('API Running');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.listen(PORT, () => console.log('app running on port: ' + PORT))