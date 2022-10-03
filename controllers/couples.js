const express = require('express');
const couplesRouter = express.Router();
const User = require('../models/user');
const Events = require('../models/events')


// Couple/user Index route
couplesRouter.get('/:id', async (req, res) => {
    try {
        // send all people
        res.json(await User.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// Couple/user Create route
couplesRouter.post('/', async (req, res) => {
    try {
        res.json(await User.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
}); 

// Couple/events Index route
// couplesRouter.get('/:id', async (req, res) => {
//     try {
//         // send all people
//         res.json(await Events.find({}));
//     } catch (error) {
//         //send error
//         res.status(400).json(error);
//     }
// });






module.exports = couplesRouter;