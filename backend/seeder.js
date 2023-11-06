import mongoose from "mongoose";
import { mongoURI } from './config/default.js';
import users from "./data/users.js";
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createUsers = await User.insertMany(users);
        const adminUser = createUsers[0]._id;
        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser };
        });

        await Product.insertMany(sampleProducts);

        console.log("data imported")
        process.exit();
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

const DestroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

if(process.argv[2] == '-d') {
    DestroyData();
} else {
    importData();
}
