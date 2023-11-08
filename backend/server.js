import express from 'express';
import connectDb from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';


const PORT = process.env.PORT || 3000;
const app = express();

connectDb();

app.get('/', (req, res) => {
    res.send('API Running');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log('app running on port: ' + PORT))