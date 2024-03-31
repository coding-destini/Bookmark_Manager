const express = require('express');
const router = express.Router();
const bookmarkController = require('../controllers/bookmarkController');



// POST route to create a new bookmark
router.post('/api/bookmarks', bookmarkController.createBookmark);
router.get('/api/getbookmark',bookmarkController.getbookmark)

module.exports = router;
