const express = require('express');
const asyncHandler = require('express-async-handler');
const { Fund } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const funds = await Fund.findAll({ order: ['createdAt']});
    res.json(funds);
}))



module.exports = router;
