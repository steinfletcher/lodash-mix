var _ = require('../index.js'),
    test = require('tape');

test('format: should format a string with supplied parameters', function (t) {
    t.plan(1);

    var formatted = _.format('Other {} are {}', 'people', 'good plumbers');
    t.equal(formatted, 'Other people are good plumbers');
});

test('format: should remove {} if the arguments are not defined', function (t) {
    t.plan(1);

    var formatted = _.format('Other {} are {}');
    t.equal(formatted, ('Other  are '));
});
