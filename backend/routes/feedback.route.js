const route = require('express').Router();
var express = require('express');
var router = express.Router();
const Feedback = require('../models/feedback.model');

route.get('/', async(req,res) => {
    try{
        const foundFeedback = await Feedback.find();
        res.json(foundFeedback);
    } catch(err){
        console.log(err);
    }
});

route.post('/', async (req,res) => {
    const pname = req.body.pname;
    const feedback = req.body.feedback;
    const feedbackItem = Feedback({
        pname:pname,
        feedback:feedback
    })
    try{
        const saveFeedback = await feedbackItem.save();
        res.json(saveFeedback);
    } catch(err){
        console.log(err);
    }
});
module.exports = router;