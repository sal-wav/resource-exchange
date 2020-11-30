const express = require('express');
const asyncHandler = require('express-async-handler');
const { Fund } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const funds = await Fund.findAll({ order: ['createdAt']});
    res.json(funds);
}))

router.post('/', asyncHandler(async(req, res) => {
    const fund = await Fund.create({
        title: req.body.title,
        subtitle: req.body.subtitle,
        description: req.body.description,
        goal: Number(req.body.goal),
        funded: req.body.funded,
        image: req.body.image,
        categoryId: Number(req.body.categoryId),
        ownerId: req.body.ownerId,
    });
    return res.json(fund);
}));

module.exports = router;
