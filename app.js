// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
//============= ninjas.html

    else if (request.url === "/ninjas") {
         fs.readFile('ninjas.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });

    }
//============= dojos.html

    else if (request.url === "/dojos") {
         fs.readFile('dojos.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });

    }

//============= style.css

     else if (request.url === "/style") {
         fs.readFile('style.css', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/css'});
             response.write(contents); 
             response.end();
         });

    }


    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('URL requested is not available!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");





////===============other way

// var fs = require('fs'),
//     http = require('http'),
//     port = 5000;

// var server = http.createServer(function server(req, res){
//   // Figure out which file the HTTP request is looking for
//   var file;

//   switch (req.url) {
//     case "/":
//       file = 'index.html'
//       break;
//     case "/ninjas":
//       file = 'ninjas.html'
//       break;
//     case "/dojos/new":
//       file = 'dojos.html'
//       break;
//     default:
//       file = null;
//       break;
//   }
//   // Send file or error to browser
//   if (file !== null) {
//     // First argument uses string interpolation
//     fs.readFile(`static/${file}`, 'utf8', function(err, contents){
//       if (err) { console.log(err); }
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(contents);
//       res.end();
//     });
//   } else { // If file is null, not found
//     res.writeHead(404);
//     res.end("File not found!");
//   }
// });

// server.listen(port, function(){
//   console.log("Running on port: ", port);
// });