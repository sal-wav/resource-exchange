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
        goal: req.body.goal,
        image: req.body.image,
        categoryId: req.body.categoryId,
        ownerId: req.body.ownerId,
    })

}))

module.exports = router;

// router.post('/create', requireAuth, asyncHandler(async (req, res, next) => {
//     const newStory = await Story.create({
//       title: req.body.title,
//       subtitle: req.body.subtitle,
//       content: req.body.content,
//       authorId: res.locals.user.id,
//       image: req.body.image
//     })
//     res.redirect(`/stories/${newStory.id}`);
//   }));
