# lodash-mixins

Some [lodash mixins](http://lodash.com/docs#mixin) for node and the browser.

# mixins

## _.format
```javascript
_.format('Other {} are {}', 'people', 'good plumbers')
// produces 'Other people are good plumbers'
```

## _.formatPath
```javascript
_.formatPath('/categ/:cat/:isbn', {cat: 'books', isbn: '034038204X'})
// produces '/categ/books/034038204X'
```

## _.immutableMerge
```javascript
_.immutableMerge({a: 1}, {b: 2})
// produces {a:1 , b:2} without mutating the input objects
```

## _.ordinal
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
