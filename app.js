const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port=process.env.PORT || 80



//For serving static files

app.use('/static', express.static('static'))
app.use(express.urlencoded())



//Set the template engine as pug 
app.set('view engine ', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) =>{
    const params ={ }
    res.status(200).render('home.pug',params);
  });

app.get('/volunteer', (req, res) =>{
    const params ={ }
    res.status(200).render('volunteer.pug',params);
  });
app.get('/gallery', (req, res) =>{
    const params ={ }
    res.status(200).render('gallery.pug',params);
  });
app.get('/about', (req, res) =>{
    const params={ }
    res.status(200).render('about.pug',params);
  });
app.get('/submit', (req, res) =>{
    const params={ }
    res.status(200).render('submit.pug',params);
  });
app.post('/volunteer', (req, res) =>{
    name=req.body.name
    phone=req.body.phone
    email=req.body.email
    age=req.body.age
    address=req.body.address
    desc=req.body.desc
    let outputToWrite=`The name of volunteer is: ${name},his/her phone numnber is: ${phone},his/her email is: ${email},
    his/her age is :${age},his/her address is:${address},his/her motto to join the foundation: ${desc}`
    fs.writeFileSync('output.txt',outputToWrite)
    const params ={'message':'Your form has been submitted successfully'}
    res.status(200).render('volunteer.pug',params);
  });


app.listen(port, ()=>{
      console.log(`The application started successfully on port ${port}`);
  });