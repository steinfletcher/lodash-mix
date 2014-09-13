var _ = require('../index.js'),
    test = require('tape');

test('compactObject: should remove falsy properties (shallow)', function (t) {
    t.plan(2);

    var obj = {
        a: null,
        b: {
            c: 9,
            d: null
        },
        e: {
            f: [null, undefined]
        },
        g: '',
        h: 0,
        i: false,
        j: undefined
    };

    t.deepEqual(_.compactObject(obj), {
        b: {
            c: 9,
            d: null
        },
        e: {
            f: [null, undefined]
        }
    });

    t.deepEqual(obj, {
        a: null,
        b: {
            c: 9,
            d: null
        },
        e: {
            f: [null, undefined]
        },
        g: '',
        h: 0,
        i: false,
        j: undefined
    });
});

test('compactObject: should remove falsy properties (deep)', function (t) {
    t.plan(1);

    var obj = {
        a: null,
        b: {
            c: 9,
            d: null
        },
        e: {
            f: [null, undefined]
        },
        g: '',
        h: 0,
        i: false,
        j: undefined
    };

    t.deepEqual(_.compactObject(obj, true), {
        b: {
            c: 9,
        },
        e: {
            f: [null, undefined]
        }
    });
});
