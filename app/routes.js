// External dependencies
const express = require('express');
const router = express.Router();


router.post(/select-a-date/, function (req, res) {
    const destination = 'confirmation';
    res.redirect( destination );
});


module.exports = router;
