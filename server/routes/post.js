const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/auth');

const Post = require('../model/Post');

// @route POST api/posts
// @desc Create post
// @access Private
router.post('/', verifyToken, async (req, res) => {
    const { title, description, url, status } = req.body;

    if (!title) {
        return res
            .status(400)
            .json({ success: false, message: 'Title is required' });
    }

    try {
        const newPost = new Post({
            title,
            description,
            url: url.startWith('http://' ? url : `https://${url}`),
            status: status || 'TO_LEARN',
            user: req.userId,
        });

        await newPost.save();

        res.json({ success: true, message: 'Happy learning!', post: newPost });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
});

module.exports = router;
