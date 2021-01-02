const express = require('express');
const app = express();
const morgan = require('morgan');
const multer = require('multer');
const {upload} = require('./utils/multer.util');

// application middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// router
app.post('/', upload.single('my-file'), (req, res, next) => {
    //req.file
    res.status(201).json(req.file);
}); 
// router
app.post('/array', upload.array('my-files', 4), (req, res, next) => {
    //req.files
    res.status(201).json(req.files);
});
// port binding
app.listen(9000, () => {
  console.log('server start');
});