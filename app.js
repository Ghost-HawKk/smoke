const express = require('express')
const loginControl = require('./controllers/loginControl')
const signupControl = require('./controllers/signupControl')
const usernameAvailability = require('./controllers/usernameAvailabilityCheck')
const videoStream = require('./controllers/videoStream')
const profileControl = require('./controllers/profileControl')
const credEdit = require('./controllers/credEdit')
const credChange = require('./controllers/credChange')
const profEdit = require('./controllers/profEdit')
const profChange = require('./controllers/profChange')
const logoutControl = require('./controllers/logoutControl')
const serverControl = require('./controllers/serverControl')

var app = express();

// Fire Controllers
loginControl(app);
signupControl(app);
usernameAvailability(app);
videoStream(app);
profileControl(app);
credEdit(app);
credChange(app);
profEdit(app);
profChange(app);
logoutControl(app);
serverControl(app);
