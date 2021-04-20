const axios = require('axios');

var info;

axios.get('').then( answer => {
    info = answer;
    console.log( info );
}).catch( error => {
    console.log( error );
});