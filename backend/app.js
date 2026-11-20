const express = require('express');
const app = express();


app.use(express.static('../frontend'));
app.use(express.urlencoded({extended: true}));
app.post('/booking',(req,res)=>{
    console.log(req.body);

    res.send('Your booking request was received! Please check your email for your confirmation.');
});

const port = 8080;

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});
