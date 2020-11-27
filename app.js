'use strict';
const express = require('express');
const http = require('http');

// load the env variables
require('dotenv').config();

const Config = require('./config');

const client = require('twilio')(Config.smsConfig.twilioCredentials.accountSid, Config.smsConfig.twilioCredentials.authToken);


//create an express app
const app = express();


// port to use in the app
app.set('port', Config.appConfig.PORT);




startServer();

async function startServer(){
    const server = http.createServer(app);

    server.listen(Config.appConfig.PORT);

    server.on('error', (err) => console.error(err));

    server.on('listening', () => console.log(`Server running on ${Config.appConfig.PORT}`));

}

let smsData = {
    // to: '+971 54 455 8830',
    to: '+917206561636',
    // from: Config.smsConfig.twilioCredentials.smsFromNumber,
    from: '+13108613691',
    body: "Hi test: " + 1234 
}
    client.messages.create(smsData, function (err, message) {
        if (err) {
            console.log("ERROR>>>",err)
        }
        else {
            console.log("SUCCESS>>>",message.sid)
        }
    });