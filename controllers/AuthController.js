'use strict';
global.fetch = require('node-fetch')
require('dotenv').config();
const Cognito = require('../cognito-services/index');
const { verify } = require('../cognito-services/index');
const body = {
   email: "luizcalaca@gmail.com",
   password: "Test123456!"
};

async function SignUp(req, res) {
    const response = await Cognito.signUp(req.body.email,req.body.password);
    console.log(response);
}

async function Verify(req, res) {
    const response = await Cognito.verify(req.body.email,req.body.codeEmailVerify);
    console.log(response);
}

async function SignIn(req, res) {
    const response = await Cognito.signIn(req.body.email,req.body.password);
    console.log(response);
}

module.exports = {
    SignIn, Verify, SignUp
}
