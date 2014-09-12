
var _ = require('../index.js'),
    test = require('tape');

test('pluck: maintains original pluck after extension', function (t) {
    t.plan(1);

    var base = [
        {a: 1, p: 1},
        {b: 1, p: 2},
        {c: 1, p: 3},
        {d: 1, p: 4}
    ];

    var nestedProps = _.pluck(base, 'p');

    t.deepEqual(nestedProps, [1, 2, 3, 4]);
});

test('pluck: should extract values from a given nested property', function (t) {
    t.plan(1);

    var base = [
        {a: 1, p: {c: 1}},
        {b: 1, p: {c: 2}},
        {c: 1, p: {c: 3}},
        {d: 1, p: {c: 4}}
    ];

    var nestedProps = _.pluck(base, 'p.c');

    t.deepEqual(nestedProps, [1, 2, 3, 4]);
});

test('pluck: should extract values from a given nested property', function (t) {
    t.plan(1);

    var base = [
        {a: 1, p: {c: {d: 4}}},
        {b: 1, p: {c: {d: 1}}},
        {c: 1, p: {c: {d: 44}}},
        {d: 1, p: {c: 4}}
    ];

    var nestedProps = _.pluck(base, 'p.c.d');

    t.deepEqual(nestedProps, [4, 1, 44, undefined]);
});
