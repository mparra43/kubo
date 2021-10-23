const {response} = require('express');
const {Film} = require('../models/Film');
const {Gender} = require('../models/Gender');
const {Rating} = require('../models/Ranting');


const categoryAll = async (req, res = response) => {
    try {
        const {count, rows} = await Gender.findAndCountAll();
        return res.status(201).json({ok: true, data: rows});
    } catch (error) {
        return res.status(500).json({msg: "error"});
    }
}


const allFilms = async (req, res = response) => {
    try {
        const {count, rows} = await Film.findAndCountAll();
        return res.status(201).json({data: rows});
    } catch (error) {
        return res.status(500).json({msg: "error"});
    }
}
const addFilms = async (req, res = response) => {
    const {movie, rating} = req.body;

    try {
        let newRegister = await Rating.create({
            movie,
            rating,
        });
        return res.status(201).json({ok: true, msg: "se agrego una nueva Clasificación "});
    } catch (e) {
        return res.status(500).json({msg: "error"})
    }
}


module.exports = {
    categoryAll,
    allFilms,
    addFilms,
}