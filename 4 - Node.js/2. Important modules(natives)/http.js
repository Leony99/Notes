const http = require("http");

const port = 8080;

//Create server and his requisitions
//Request = request made by the client to the server
//Response = response sent by the server to the client
const server =  http.createServer((req, res) => {
    if(req.url == "/home") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<h1>Home page</h1>");
    }
    else if (req.url == "/product") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<h1>Product page</h1>")
    }
    else if (req.url == "/users") {
        const users = [{"name": "Leony", "age": 23}, {"name": "João", "age": 19}];
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(users));
    }
});
//Open server
server.listen(port, () => console.log(`port = ${port}!`));
