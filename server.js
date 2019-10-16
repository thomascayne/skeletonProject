//NPM modules
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const http = require('http');
const cluster = require('cluster');
const cors = require('cors');
const compression = require('compression');
const app = express();

//user defined modules
const mainRoutes = require('./routes/main'); //application wide routes

let corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

app.use(compression());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//sets which port the node.js server will be bound to
const port = process.env.PORT || '3000';
app.set('port', port);

//cluster module implemention, load balancing the application between all cores on the machine 
if (cluster.isMaster) {
    let numWorkers = require('os').cpus().length;

    for (let i = 0; i < numWorkers; i++) {
        cluster.fork();
    }

    console.log(`Master PID: ${process.pid}`);

    cluster.on('exit', function (worker, code, signal) {
        cluster.fork();
    });

    process.on('SIGUSR2', () => {
        const workers = Object.values(cluster.workers);
        const restartWorker = (workerIndex) => {
            const worker = workers[workerIndex];
            if (!worker) {
                return
            };

            worker.on('exit', () => {
                if (!worker.exitedAfterDisconnect) {
                    return;
                }
                console.log(`Exited process ${worker.process.pid}`);
                cluster.fork().on('listening', () => {
                    restartWorker(workerIndex + 1);
                });
            });
            worker.disconnect();
        }
        restartWorker(0);
    });

} else {
    let distDir = __dirname + "/dist/";
    //serves the compiled angular application, and links the API routes for the app
    app.use('/', cors(corsOptions), express.static(distDir));
    app.use('/', cors(corsOptions), mainRoutes); //routes for app wide usage. 

    //starts the node.js server
    const server = http.createServer(app);

    server.listen(port, () => console.log(`Running on localhost:${port}`));
}