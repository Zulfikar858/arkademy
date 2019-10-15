const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) =>{
    res.send('HALO AKU EXPRESS');
})
app.listen(port, ()=> console.log(`App listen on port ${port}`))