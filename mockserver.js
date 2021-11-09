require('dotenv').config();
var http = require('http');
var mockserver = require('mockserver');

mockserver.verbose = true;

console.log("Starting mockserver on " + process.env.MOCK_PORT);
http.createServer(mockserver('mockserver/data', true)).listen(process.env.MOCK_PORT);