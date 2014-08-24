var _ = require('../index.js'),
    test = require('tape');

test('isUuid: should validate a uuid', function (t) {
    t.plan(1);

    t.equal(_.isUuid(_.uuid()), true);
});

test('isUuid: should reject an invalid uuid', function (t) {
    t.plan(3);

    t.equal(_.isUuid('12345678-1234-1234-1234-123412341234'), false);
    t.equal(_.isUuid('12345678-1234-4234-1234-123412341234'), false);
    t.equal(_.isUuid('12345678-1234-1234-9234-123412341234'), false);
});
