const express = require('express');
const asyncHandler = require("express-async-handler");
const { Exchange } = require("../../db/models");

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
    const exchanges = await Exchange.findAll({ order: ['amount']});
    res.json(exchanges);
}))

module.exports = router;
