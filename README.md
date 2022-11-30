# checkbox-group
✅ Checkbox group setup with some "master" one that uncheck all other, or gets unchecked if one of the others is checked. Kinda like a "all" checkbox.

# TODO

A lot to get this widely useable… Options, and stuff.

For now, it just works like this:

```html
<div data-checkbox-group>
  <label><input type="checkbox" data-checkbox-master> All</label>
  <label><input type="checkbox"> Value 1</label>
  <label><input type="checkbox"> Value 2</label>
</div>
```

```js
new CheckboxGroup()
```
