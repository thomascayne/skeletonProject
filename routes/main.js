/*
    Main routing page for node web server. Contains app wide routes for application.
*/
const express = require('express');
const router = express.Router();
//Commenting out DB connection, but leaving to show where we are putting it
//let connection = require('../serverModules/dbConnection');

const sendmail = require('sendmail')({
    logger: {
        debug: console.log,
        info: console.info,
        warn: console.warn,
        error: console.error
    },
    silent: false,
    smtpPort: 25, 
    smtpHost: 'yourSMTPURL'
});

function errorEmail(subject, body) {

    sendmail({
        from: 'fromEmail',
        to: 'toEmail',
        subject: "Error" + subject,
        html: body + " - " + moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    }, function (err, reply) {

    });
}


/*********************************************************** */
/* Server routes                                             */
/*********************************************************** */

router.get('/api/testRoute', function(req, res, next) {

    res.status(200).json({data: "Test Confirmed"});
});

module.exports = router;