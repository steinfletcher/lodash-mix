# lodash-mixins

Some [lodash mixins](http://lodash.com/docs#mixin) I tend to add to my projects.

# mixins

## _.format
```javascript
_.format('Other {} are {}', 'people', 'good plumbers')

// produces 'Other people are good plumbers'
```

## _.formatUrl
```javascript
_.formatUrl('/categ/:cat/:isbn', {cat: 'books', isbn: '034038204X'})

// '/categ/books/034038204X'
```

## _.immutableMerge
```javascript
_.immutableMerge({a: 1}, {b: 2})

// produces {a:1 , b:2} without mutating the input objects
```

