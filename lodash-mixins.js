(function () {
    var mixins = (function () {
        var extendWith = {};

        /**
         * _.immutableMerge
         *
         * Merges two objects without mutating the two objects
         * Usage:
         *    var src = {a: 1, b: 2};
         *    var dest = {c: 3, d: 4};
         *    var merged = _.immutableMerge(src, dest);
         * Produces:
         *    src -> { a: 1, b: 2 }
         *    dest -> { c: 3, d: 4 }
         *    merged -> { a: 1, b: 2, c: 3, d: 4 }
         * @param {Object} src - the source object
         * @param {Object} dest - the destination object
         * @returns {Object} a new object constructed from properties of src and dest
         */
        extendWith.immutableMerge = function (src, dest) {
            return _.merge(_.cloneDeep(src), dest);
        };

        /**
         * _.format
         *
         * Formats a string with given parameters.
         * Usage:
         *    _.format('Other {} are {}', 'people', 'good plumbers')
         * Produces:
         *    'Other people are good plumbers'
         *
         * @param {String} template - the template to format
         * @returns {String} the formatted string
         */
        extendWith.format = function (template) {
            var i = 1,
                args = arguments;
            return template.replace(/{}/g, function () {
                return typeof args[i] !== 'undefined' ? args[i++] : '';
            });
        };

        /**
         * _.formatPath
         *
         * Formats a path/url with given parameters.
         * Usage:
         *    _.formatPath('/:categ/:id', {categ: 'books', isbn: '034038204X'})
         * Produces:
         *    '/categ/books/034038204X'
         *
         * @param {String} template - the url template to format
         * @param {Object} params - the replacement parameters
         * @returns {String} the formatted url
         */
        extendWith.formatPath = function (template, params) {
            return template.replace(/:[a-z0-9]+/g, function (a, b) {
                var paramName = a.slice(1, a.length);
                var paramVal = params[paramName];
                return typeof paramVal !== 'undefined' ? paramVal : '';
            });
        };

        return extendWith;
    })();

    /**
     * bootstrap mixins for node and the browser
     * For the browser: lodash must be explicitly included above
     *    this library
     * For node: this library will wrap lodash so there is no
     *    need to include lodash
     */

    // browser environment
    var _;
    if (typeof module !== 'undefined' &&
        typeof module.exports !== 'undefined') {
        // node environment
        _ = require('lodash');
        _.mixin(mixins);
        module.exports = _;
    }
    else {
        _ = window._;
        if (typeof _ === 'function') {
            _.mixin(mixins);
        }
        else {
            throw new Error('lodash must be included before lodash-extensions.');
        }
    }
})();
