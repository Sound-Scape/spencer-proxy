const controller = require('./controllers.js');

const router = require('express').Router();

router.get('/waveformplayer/:id', controller.waveformPlayer);

// router.get('/comments/:songid', controller.comments);

module.exports = router;
