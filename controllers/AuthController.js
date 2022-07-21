'use strict';
require('dotenv').config();
const Cognito = require('../cognito-services');

async function SignUp(req, res) {
    const response = await Cognito.signUp(req.body.email,req.body.password);
    res.json(response)
}

async function Verify(req, res) {
    const response = await Cognito.verify(req.body.email,req.body.codeEmailVerify);
    res.json(response)
}

async function SignIn(req, res) {
    const response = await Cognito.signIn(req.body.email,req.body.password);
    res.json(response)
}

module.exports = {
    SignIn, Verify, SignUp
}
