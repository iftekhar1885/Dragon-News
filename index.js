const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());
const categories = require('./data/catagories.json');
app.get('/', (req, res )=>{
    res.send('News API Running');
});

app.get('/news-catagories', (req, res) =>{
    res.send(categories)
})
app.listen(port, () =>{
    console.log('Dragon News Server on port', port)
})