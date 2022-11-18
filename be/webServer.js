import http from 'http';
//const http = require('http');

//callback function
const requestListener = (req, res) => {
    // MIME (Multipurpose Internet Mail Extensions) types
    res.setHeader('Content-Type', 'text/html');

    const {method, url} = req;
    if(url === '/') {
        if(method === 'GET') {
            res.statusCode = 200;
            res.end('<h3>Homepage GET Response</h3>')
        } else {
            res.statusCode = 400;
            res.end(`Halaman Tidak Dapat Menerima ${method} request`)
        }
        
    } else if(url === '/about') {
        if(method === 'GET') {
            res.statusCode = 200;
            res.end('<h3>About GET Response</h3>')
        } else if(method === 'POST') {
            let body = [];
            
            req.on('data', (chunk) => {
                body.push(chunk);
            })

            req.on('end', () => {
                body = Buffer.concat(body).toString()
                const {user} = JSON.parse(body);
                res.statusCode = 200;
                res.end(`Hi, ${user}! This is About POST Response`)
            })
        } else {
            res.statusCode = 400;
            res.end(`Halaman Tidak Dapat Menerima ${method} request`)
        }
    } else {
        res.statusCode = 404;
        res.end('Halaman Tidak Ditemukan')
    }
    
    /**
     * if(method === 'PUT') {
        res.end('<h3>PUT Response</h3>')
        }
     */
};

const server = http.createServer(requestListener);

//determine the port and listen for connections
const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
})
