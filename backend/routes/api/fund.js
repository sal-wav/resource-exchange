const express = require('express');
const asyncHandler = require('express-async-handler');
const { Fund } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const funds = await Fund.findAll({ order: ['createdAt']});
    res.json(funds);
}))

router.post('/', asyncHandler(async(req, res) => {
    let img = req.body.image;
    let story = req.body.description;
    if (!img) {
        img = "https://eatlocalapp.s3.amazonaws.com/RE.jpeg"
    }
    if (!story) {
        story = "The fund organizer hasn't provided Resource Exchange with more details yet. Check back soon."
    }
    const fund = await Fund.create({
        title: req.body.title,
        subtitle: req.body.subtitle,
        description: story,
        goal: Number(req.body.goal),
        funded: req.body.funded,
        image: img,
        categoryId: Number(req.body.categoryId),
        ownerId: req.body.ownerId,
    });
    return res.json(fund);
}));

module.exports = router;
