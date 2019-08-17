const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const SqlRecord = require('./models/sqlRecord');

// Init Express App
const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// Handle MongoDB connection
const dbRoute = 'mongodb://localhost:27017/sqlNotebook';
mongoose.connect(dbRoute, { useNewUrlParser: true });
let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Express API
router.get('/heartbeat', (req, res) => {
    return res.json({ success: true });
})

// Create new record
router.post('/create', (req, res) => {

    let sqlRecord = new SqlRecord();
  
    const { message } = req.body;

    id = 1;
  
    if ((!id && id !== 0) || !message) {
      return res.json({
        success: false,
        error: 'INVALID INPUTS',
      });
    }
    sqlRecord.id = id;
    sqlRecord.message = message;
    sqlRecord.save((err) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });

// this method fetches all available data in our database
router.get('/getRecords', (req, res) => {
    SqlRecord.find((err, data) => {
        if (err) {
            return res.json({ success: false, error: err })
        };
        return res.json({ success: true, records: data });
    });
});

// this is our update method
// this method overwrites existing data in our database
router.post('/updateData', (req, res) => {
  const { id, update } = req.body;
  Data.findByIdAndUpdate(id, update, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// // this is our delete method
// // this method removes existing data in our database
// router.delete('/deleteData', (req, res) => {
//   const { id } = req.body;
//   Data.findByIdAndRemove(id, (err) => {
//     if (err) return res.send(err);
//     return res.json({ success: true });
//   });
// });

// Launch our backend into a port; bodyParser parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use('/api', router);
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));