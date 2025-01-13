const express = require('express');

const app = express();
x = 5
console.log(x); // example for js hoisting (will not pass strict mode) (only works with var)
var x

app.get('/', (req, res) => {
    y = 0
    res.send('Hello World! ' + y);
    var y
});

app.get('/hoisting', (req, res) => {
    variable_y = 5
    res.send('variable_y=' + variable_y); // since the declaration is hoisted to the top we get 5, change to let to fail the testcafe local test.
    var variable_y
});
// testing scope
{
    var variable_z = 10; // since its var it can be accessed from the outer scope
    let variable_c = 50; // let can't be accessed from the outer scope.
    console.log('variable_c can only be accessed from inside and its value is: ' + variable_c)
}
if (variable_z === 5){
    console.log('variable_z can be accessed from outside and its value is: ' + variable_z)
}

app.get('/test_sum', (req, res) => {
    // print(req.params.get('id'))
    test_sum(req.params.get('a'), req.params.get('b'));
    res.send('test_sum');
});

app.get('/send/', (req, res) => {
    // print(req.params.get('id'))
    res.send('Hello World!');
});

// Playing with objects
num_dictionary={ 
    "1":["alex","harry"],
    "2":["liza","alex"],
    "3":["fred", "harry"],
    "5":["susan", "ricardo"]
};

console.log(num_dictionary["5"][1]);
console.log('length: ' + num_dictionary["5"].length);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

//npm install (from inside the file to update dependencies)
//npm install --save-dev jest
//npm install --save-dev testcafe
//npm init playwright@latest

//npm ls --depth=0 (check installed packages)
//node --watch server.js
//npm test (runs the tests as we configured in package.json)
//testcafe chrome test/test_cafe_gettin_started.js

//npx playwright test
//npx playwright show-report
//npx playwright test --ui

// Lets do a github action which will run the code and afterwards run jest tests for me. (lets make it happen on branch push).
// Lets create a full CI with ENV variables and deploy image to my docker public registry. (Might need to use Secrets in repo)

// Maybe do it locally with cypress too

// beforeEach and afterEach  - relates to before each run and after each run.
// version control platforms - ?
// testing frameworks - did testcafe and jest.
// Familiarity with Selenium, WebdriverIO and Cypress, Docker, Kubernetes, or Cloud Platforms like AWS

// TODO: add proper .env init for first timers
// TODO: use applitools eyes WebDriverIO - can't need api key
// TODO: use applitools eyes TestCafe - can't need api key
// TODO: do a selenium java example - can't need api key
// TODO: do a selenium python example - can't need api key

// TODO: checkout Playwright for java / python
// TODO: add proper ci for creating the image deploy .env on CI run, run the code and running the test.

// Checkout the cypress

// Playwright, testcafe, Cypress, leetcode js