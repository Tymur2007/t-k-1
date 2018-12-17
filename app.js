// var msg = 'Hello Tymur and Ruslan I'm write to you what to do and you write this it's Ok?';
// console.log(msg);

var http = require("http");
http.createServer(function (request, response) {
     // HTTP Status: 200 : OK
     // Send the http header 
     // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello Tymur and Ruslan I'm write to you what to do and you write this it's Ok?"
    response.end('Hello Tymur Kozubov this you write this programe (`_`)');
 }).listen(8081);
 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');