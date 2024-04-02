const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.send('respond with a resource')
})

router.post('/users', function (req, res, next) {
  res.send('notify if added successfuly')
})

module.exports = router
