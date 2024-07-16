const express = require("express");
const mongooseFile = require("./mongoose");

//Create server
const server = express();

//Use json in requisitions
server.use(express.json());

//Middleware
server.use((req, res, next) => {
    console.log(`Request type: ${req.method}`);
    next();
});

//Create server requisitions
//Request = request made by the client to the server
//Response = response sent by the server to the client
server.get("/home", (req, res) => {
    res.status(200).send("<h1>Home page</h1>");
});

server.post("/users", async (req, res) => {
    try {
        const user = await mongooseFile.UserModel.create(req.body);
        res.status(201).json(user);
    }
    catch(error) {
        res.status(500).send(error.message);
    }
});

server.get("/users", async (req, res) => {
    try {
        const users = await mongooseFile.UserModel.find({});
        res.status(200).json(users);
    }
    catch(error) {
        res.status(500).send(error.message);
    }
});

server.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await mongooseFile.UserModel.findById(id);
        res.status(200).json(user);
    }
    catch(error) {
        res.status(500).send(error.message);
    }
});

server.patch("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await mongooseFile.UserModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(user);
    }
    catch(error) {
        res.status(500).send(error.message);
    }
});

server.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await mongooseFile.UserModel.findByIdAndRemove(id);
        res.status(200).json(user);
    }
    catch(error) {
        res.status(500).send(error.message);
    }
});

//Open server
const port = 8080;
server.listen(port, () => console.log(`Server port = ${port}!`))