const router = require('express').Router();

const Users = require('../models/users-model.js');
const restricted = require('../../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
  const user = req.user;

  Users.find()
    .then(users => {
      res.json({ users, loggedInUser: user.username });
    })
    .catch(err => res.send(err));
});

module.exports = router;
