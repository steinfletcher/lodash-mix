var _ = require('../index.js'),
    test = require('tape');

test('ordinal: should return the ordinal of a given number', function (t) {
    t.plan(8);

    t.equal(_.ordinal(1), 'st');
    t.equal(_.ordinal(2), 'nd');
    t.equal(_.ordinal(3), 'rd');
    t.equal(_.ordinal(4), 'th');
    t.equal(_.ordinal(9), 'th');

    t.equal(_.ordinal(103), 'rd');
    t.equal(_.ordinal(10842), 'nd');
    t.equal(_.ordinal(0), 'th');
});

