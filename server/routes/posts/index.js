const express = require('express');
const router = express.Router();
const asyncError = require('../../utils/async-error');
const db = require('../../models');

router.use(app.oauth.authenticate());

router.get('/', asyncError(async (req, res) => {
  const posts = await db.Post.findAll();
  res.json(posts.toJSON());
}));

router.post('/new', asyncError(async (req, res, next) => {
  db.Post.create({
    userId: req.locals.user.id,
    image: req.body.image,
    context: req.body.context
  }).then( user => {
    return res.json({code: 200});
  }).catch( error => {
    console.log(error);
    next(error);
  });
}));