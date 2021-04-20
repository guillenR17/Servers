const axios = require('axios');
var info;
axios.get('http://localhost:9090').then(answer =>{
    info = answer.data;
    console.log( info );
}).catch( error => {
    console.log( error );
} );
var info = {Number1: 7, number2: 17};
axios.post( 'http://localhost:9090', info ).then( answer => console.log( answer.data ) );