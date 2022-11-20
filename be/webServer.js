import http from 'http';
//const http = require('http');

//callback function
const requestListener = (req, res) => {
    // MIME (Multipurpose Internet Mail Extensions) types
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('X-Powered-By', 'NodeJS');

    const {method, url} = req;
    
    if(url === '/') {
        if(method === 'GET') {
            res.statusCode = 200;
            res.end(JSON.stringify({
                message: `Homepage ${method} Response`,
            }))
            //curl -X GET http://localhost:5000 -i
        } else {
            res.statusCode = 400;
            res.end(JSON.stringify({
                message: `Halaman Tidak Dapat Menerima ${method} request`,
            }))
        }
        
    } else if(url === '/about') {
        if(method === 'GET') {
            res.statusCode = 200;
            res.end(JSON.stringify({
                message: `About ${method} Response`
            }))
            //curl -X GET http://localhost:5000/about -i
        } else if(method === 'POST') {
            let body = [];
            
            req.on('data', (chunk) => {
                body.push(chunk);
            })

            req.on('end', () => {
                body = Buffer.concat(body).toString()
                const {user} = JSON.parse(body);
                res.statusCode = 200;
                res.end(JSON.stringify({
                    message: `Hi, ${user}! This is About POST Response`,
                }))
                // curl -X POST -H "Content-Type: application/json" http://localhost:5000/free -d "{\"user\": \"...\", \"param2\": \"...\"}" -i
            })
        } else {
            res.statusCode = 400;
            res.end(JSON.stringify({
                message: `Halaman Tidak Dapat Menerima ${method} request`,
            }))
        }
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({
            message: `Halaman Tidak Ditemukan`,
        }))
    }
};

const server = http.createServer(requestListener);

//determine the port and listen for connections
const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
})
