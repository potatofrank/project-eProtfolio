const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

const multerConf = {
    storage: multer.diskStorage({
        destination: function (req, file, next) {
            next(null, '../uploads');
        },
        filename: function (req, file, next) {
            next(null, file.originalname);
        }
    }),
    fileFilter: function (req, file, next) {
        if(!file){
            next();
        }
        const image = file.mimetype.startsWith('image/');
        const pdf = file.mimetype.startsWith('application/');
        if(image || pdf){
            next(null, true);
        }else{
            next({message:"File type not supported"}, false);
        }
    }
};

const Sheet = require('../models/sheets');

router.post("/upload", multer(multerConf).single('musicSheet'), (req, res, next) => {
    if(req.file){
        console.log(req.file);
        req.body.photo = req.file.filename;
    }

    const sheet = new Sheet({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        musicSheet: req.file.originalname
    });
    sheet.save();
    res.redirect('back');
})

module.exports = router;