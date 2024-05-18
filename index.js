const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(
    PORT,
    () => console.log(`it's alive on ${PORT}`)
);

app.get('/tshirt',(req,res) => {
    res.status(200).send({
        tshirt: '👕',
        size:'large',
        name:'E Tshet',
        userid:'waterdrinker001'
    })
});

app.post('/tshirt/:id',(req,res) => {
    const { id }  = req.params;
    const { logo } = req.body;
    const { ki } = req.body;
    if(!logo){
        res.status(418).send({
            message:`logo shouldn't be empty`
        }

        )
         
    }
    else{
        res.status(200).send({
            message:`SUCCESS!`
        })
    }
    
});