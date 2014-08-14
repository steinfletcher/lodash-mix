var _ = require('../../lodash-mixins.js'),
    test = require('tape');

var src = {a: 1, b: 2},
    dest = {c: 3, d: {e: 4}},
    expected = {a: 1, b: 2, c: 3, d: {e: 4}};

test('immutableMerge: should produce an object with the properties of src and dest', function (t) {
    t.plan(1);

    var merged = _.immutableMerge(src, dest);
    t.deepEqual(merged, expected);
});

test('immutableMerge: should not mutate the original objects', function (t) {
    t.plan(2);

    _.immutableMerge(src, dest);
    t.deepEqual(src, {a: 1, b: 2});
    t.deepEqual(dest, {c: 3, d: {e: 4}});
});
