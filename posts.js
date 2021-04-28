const express = require('express');
const router = express.Router();
const Task  = require('../model/Task');

router.get('/', async (req,res) => {
        try {
            const tasks = await Task.find();
            res.json(tasks);
        } catch (err) {
            res.json({message:err})
        }
})

router.post('/', async(req,res) => {
   const task = new Task({
       title: req.body.title,
       description: req.body.description,
       status: req.body.status
   })
    // task.save().then(data => {
    //     res.json(data);
    // })
    //     .catch(err => {
    //        res.json({message: err})
    //     });
    try {
        const savedTask = await task.save();
        console.log('almost done')
        res.json(savedTask);
        console.log('finally done')
    } catch (err) {
       res.json({message: err})
    }
})

module.exports = router;
