const express = require('express')
const app = express();

const api = () =>{
    fetch('https://api.github.com/users/PavaniTiago');
    then(response => response.json())
}

app.listen('8000')

