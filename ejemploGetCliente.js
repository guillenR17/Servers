const https = require('https');

https.get('https://api.openweathermap.org/data/2.5/weather?q=USA&appid=b1dbb7585b1bb49fbc136b21b4b3bf35', ( answer )=> {
    let info = '';
    answer.on('data', ( chunk )=> { 
        info += chunk;

    });
    
    answer.on('end', () => {
        var dataJSON = JSON.parse(info)['weather'];
        console.log( info );
    });
}).on('error', (error) => {

    console.log("Error: " + error );

});