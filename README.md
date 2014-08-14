# lodash-mixins

Some [lodash mixins](http://lodash.com/docs#mixin) I tend to add to my projects.

# mixins

```
_.format('Other {} are {}', 'people', 'good plumbers') -> 'Other people are good plumbers'

_.formatUrl('/categ/:cat/:isbn', {cat: 'books', isbn: '034038204X'}) -> '/categ/books/034038204X'

_.immutableMerge({a: 1}, {b: 2}) -> {a:1 , b:2} without mutating the input objects
```
