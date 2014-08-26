# lodash-mix

Some [lodash mixins](http://lodash.com/docs#mixin) I've collected - for node and the browser.

# mixins

### _.format

```javascript
_.format('Other {} are {}', 'people', 'good plumbers')
// produces 'Other people are good plumbers'

_.format('/categ/{cat}/{isbn}', {cat: 'books', isbn: '034038204X'})
// produces '/categ/books/034038204X'

_.format('/categ/{cat}/{isbn}', 'books', '034038204X')
// produces '/categ/books/034038204X'
```

### _.uuid

```javascript
_.uuid()
// generates an RFC 4122 compliant version 4 uuid
```

### _.isUuid

```javascript
_.isUuid('262182b1-f92c-42bd-ab39-8faedb47b4dc')
// produces true|false. Validates an RFC 4122 compliant version 4 uuid
```

### _.immutableMerge

```javascript
_.immutableMerge({a: 1}, {b: 2})
// produces {a:1 , b:2} without mutating the input objects
```

### _.ordinal

```javascript
_.ordinal(142)
// produces 'nd'
```

# tests

Tests run in node and the browser. Browserify and tape must be installed globally.

Execute from the command line

```bash
npm test
```
