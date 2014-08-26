# lodash-mix

Some [lodash mixins](http://lodash.com/docs#mixin) I've collected - for node and the browser.

# mixins

```javascript
_.uuid()
// generates an RFC 4122 compliant version 4 uuid
```

```javascript
_.isUuid('262182b1-f92c-42bd-ab39-8faedb47b4dc')
// produces true|false. Validates an RFC 4122 compliant version 4 uuid
```

```javascript
_.format('Other {} are {}', 'people', 'good plumbers')
// produces 'Other people are good plumbers'
```

```javascript
_.formatPath('/categ/{cat}/{isbn}', {cat: 'books', isbn: '034038204X'})
// produces '/categ/books/034038204X'
```

```javascript
_.immutableMerge({a: 1}, {b: 2})
// produces {a:1 , b:2} without mutating the input objects
```

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
