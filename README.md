# angular-horsey
Angular directive for [horsey](https://github.com/bevacqua/horsey) by [bevacqua](https://github.com/bevacqua); all the kudos are on him!


## install
via ``bower``
```bash
bower install angular-horsey --save-dev
```

## usage
This is a Type ``A`` directive and you can use it on ``text``, ``textarea`` or ``div`` tags;

```html
<input id='hy' angular-horsey suggestions="suggestions"/>
```

```html
<textarea id='ta' angular-horsey suggestions="suggestions2" plugin-conf="horseyConfig"></textarea>
```

The attribute ``suggestions`` is an array with a list of suggestions to be presented to the user.
The attribute ``plugin-conf`` is an Object with the Horsey's [options](https://github.com/bevacqua/horsey#options).
