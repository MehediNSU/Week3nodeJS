//THIS FILE IS ONLY FOR STREAM AND BUFFER MODULE

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        res.write(
            '<body><form method="post" action="/process"><input name="message" /></form></body>'
        );
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('stream finished');
            const parsedBody = Buffer.concat(body).toString();
            res.write(parsedBody.substring(8));
            res.end();
        });
    } else {
        res.write('Not found');
        res.end();
    }
});

server.listen(8000);
