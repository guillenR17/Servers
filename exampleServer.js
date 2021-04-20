const http = require( 'http' );

const direction = 'localhost';
const port = 9090;

const MessageService = function( petition, answer ){
    answer.setHeader("Content-Type", "application/json");

    switch( petition.url ){
        case "/messageChristmas":
             answer.writeHead(200);
             answer.end( JSON.stringify({message : "Merry Christmas"}) );
             break
        case "/salute":
             answer.writeHead(200);  
             answer.end( JSON.stringify({message: "Welcome to the contest"}) );
             break   
        default:
             answer.writeHead(400);
             answer.end( JSON.stringify({message : "You're wrong"}) );
             break    
    }

    
    //answer.end( JSON.stringify({message : "Hello to everyone"}) );
}

const server = http.createServer( MessageService );

server.listen( port, direction, () => {

    console.log( "the server is turned on and working" );
    console.log( "in http://" + direction + ":" + port );

});