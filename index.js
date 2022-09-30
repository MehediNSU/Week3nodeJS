//THIS FILE IS FOR HTTP,Web,URL & FILE SYSTEMS MODULES

var http = require ('http');
var fs = require ('fs');
var url = require('url');

var server = http.createServer(function (req, res){
   console.log('request was made: ' + req.url);

   const yourl = url.parse(req.url).pathname;

   if(yourl === '/home' || req.url === '/') {
      try{
         res.writeHead(200, {'Content-Type': 'text/html'});
         fs.createReadStream(__dirname + '/home.html').pipe(res);
      } catch{
         console.log(err);
      }
   } else if(yourl === '/contact'){
      try{
         res.writeHead(200, {'Content-Type': 'text/html'});
         // Opens the file as a readable stream with requested url
         // And pipes the read stream to the response object (which goes to the client)
         fs.createReadStream(__dirname + '/contact.html').pipe(res);
      } catch{
         console.log(err);
      }
   }
   else if(yourl === '/mehedi'){
      try{
         res.writeHead(200, {'Content-Type': 'text/html'});
         fs.createReadStream(__dirname + '/mehedi.html').pipe(res);
      } catch{
         console.log(err);
      }
   }
   else if(yourl === '/bigdata'){
      try{
         res.writeHead(200, {'Content-Type': 'text/txt'});
         fs.createReadStream(__dirname + '/bigData.txt').pipe(res);
      } catch{
         console.log(err);
      }
   }else {
      try{
         res.writeHead(404, {'Content-Type': 'text/html'});
         fs.createReadStream(__dirname + '/404.html').pipe(res);
      } catch{
         console.log(err);
      }
   }
});

server.listen(3000, '127.0.0.1');
