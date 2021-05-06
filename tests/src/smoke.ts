const { Flagpole } = require('flagpole');

const suite = Flagpole.suite('Basic Smoke Test of Site')
   .base('http://www.flosports.tv');

suite.html("Homepage Loads")
   .open("/")
   .next(async context => {
       context.assert('HTTP Status equals 200', context.response.statusCode).equals(200);
   });

