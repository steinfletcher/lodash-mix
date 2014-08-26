var _ = require('../index.js'),
    test = require('tape');

test('formatUrl: should format a string with supplied parameters', function (t) {
    t.plan(1);

    var formatted = _.formatPath('/categ/{cat}/{isbn}', {cat: 'books', isbn: '034038204X'});
    t.equal(formatted, '/categ/books/034038204X');
});

test('formatUrl: should remove {} if the arguments are not defined', function (t) {
    t.plan(1);

    var formatted = _.formatPath('/categ/{cat}/{isbn}', {isbn: '034038204X'});
    t.equal(formatted, '/categ//034038204X');
});

