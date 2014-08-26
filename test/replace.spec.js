
var _ = require('../index.js'),
    test = require('tape');

test('replace: should replace the matched object with the replacement', function (t) {
    t.plan(1);

    var base = [
        {a: 1, b: 2},
        {a: 2, b: 3},
        {a: 3, b: {c: 4}}
    ];
    base = _.replace(base, {a: 3, b: {c: 4}}, {a: 3, b: 7});

    t.deepEqual(base, [
        {a: 1, b: 2},
        {a: 2, b: 3},
        {a: 3, b: 7}
    ]);
});

test('replace: should add the replacement to the array if the match is falsy', function (t) {
    t.plan(1);

    var base = [
        {a: 1, b: 2},
        {a: 2, b: 3},
        {a: 3, b: {c: 4}}
    ];
    base = _.replace(base, {a: 3, b: {c: 2}}, {a: 3, b: 7});

    t.deepEqual(base, [
        {a: 1, b: 2},
        {a: 2, b: 3},
        {a: 3, b: {c: 4}},
        {a: 3, b: 7}
    ]);
});
