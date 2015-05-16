var _ = require('../index.js'),
    test = require('tape');

test('titleCase: should transform a word containing stop words to title case', function (t) {
    t.plan(1);
    var testStr = "silence: lectures and writings";
    t.equal(_.titleCase(testStr), "Silence: Lectures and Writings");
});

test('titleCase: should return an empty string if the string is empty', function (t) {
    t.plan(1);
    var testStr = "";
    t.equal(_.titleCase(testStr), "");
});

test('titleCase: should return an empty string if the string is null', function (t) {
    t.plan(1);
    var testStr = null;
    t.equal(_.titleCase(testStr), "");
});

test('titleCase: should return title case string when the string non alpha chars', function (t) {
    t.plan(1);
    var testStr = "the 6th sense";
    t.equal(_.titleCase(testStr), "The 6th Sense");
});
