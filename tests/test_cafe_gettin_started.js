fixture('Getting Started')
    .page('https://devexpress.github.io/testcafe/example');

test('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button');
});

// npm install -g testcafe
// testcafe chrome tests/test_cafe_gettin_started.js