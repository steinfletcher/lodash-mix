# lodash-mix

Some [lodash mixins](http://lodash.com/docs#mixin) I've collected - for node and the browser.

     npm install lodash-mix

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

### _.upsert

```javascript
var base = [{id: 1, data: 2}, {id: 2, data: 3}, {id: 3, data: {nested: 4}}];
var matcher = {id: 3, data: {nested: 4}}
var newElement = {id: 3, data: 5}
_.upsert(base, matcher, newElement);
// produces [{id: 1, data: 5}, {id: 2, data: 3}, {id: 3, data: 5}]
```

### _.pluck

Extends _.pluck to enable extraction of nested properties

```javascript
var base = [{p: {c: 1}}, {p: {c: 2}}]
_.pluck(base, 'p.c')
// produces [1, 2]
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
