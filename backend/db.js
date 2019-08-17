const mongoose = require('mongoose');
// const express = require('express');
// var cors = require('cors');

// const API_PORT = 3001;
// const app = express();
// app.use(cors());
// const router = express.Router();


// Handle MongoDB connection
const dbRoute = 'mongodb://localhost:27017/sqlNotebook';
mongoose.connect(dbRoute, { useNewUrlParser: true });
let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));