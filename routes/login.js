const express = require('express');

const router = express.Router();

router.get('/add-message', (req, res, next)=>{
   res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)"  action="/message" method="POST"><input type="text" id="username" name="message"><button type="submit">Send</button></form>');
})

router.post('/message',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;