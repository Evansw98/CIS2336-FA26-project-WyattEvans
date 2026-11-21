const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');

const pathFront = express.static(path.join(__dirname, '../frontend'));
app.use(pathFront);

app.use(express.urlencoded({extended: true}));

app.post('/booking',(req,res)=>{
    const room = req.body.room;
    const date = req.body.date;
    const start = req.body.start;
    const end = req.body.end;
    const name = req.body.name;
    const studentId = req.body.studentId;
    const email = req.body.email;

    const filePath = path.join(__dirname, 'formData.json');

    const newEntry = {
        room: room,
        date: date,
        start: start,
        end: end,
        name: name,
        studentId: studentId,
        email: email
    }

    console.log(newEntry);

let existingData = [];

if(fs.existsSync(filePath)){
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    if(fileContent){
        existingData = JSON.parse(fileContent);
    }
}

existingData.push(newEntry);

fs.writeFileSync(filePath, JSON.stringify(existingData));

const displayResult = 'Booking successful';

});

const port = 8080;

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});
