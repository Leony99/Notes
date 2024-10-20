# Spacing

Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an element’s appearance.

---

### Padding and Margin

**{property}{sides}-{size}** or **{property}{sides}-{breakpoint}-{size}**

- Properties:
    - m = margin
    - p = padding
- Sides:
    - t = top
    - b = bottom
    - s = left(start)
    - e = right(end)
    - x = left and right(x axis)
    - y = top and bottom(y axis)
    - blank = all
- Size:
    - 0 = 0
    - 1 = 0.25rem
    - 2 = 0.5rem
    - 3 = 1rem
    - 4 = 1.5rem
    - 5 = 3rem
    - auto = auto

*Example:*

```html
<div class="p-4">padding-4</div>
```

```html
<div class="mt-2">margin-top-1</div>
```

```html
<div class="py-2">padding-y-1</div>
```

---

### Gap

When using *'display: grid'* or *'display: flex'*, you can make use of gap utilities on the parent element. This can save on having to add margin utilities to individual children of a grid or flex container.

**{property}-gap-{size}**

- properties:
    - blank = all
    - row = row gap
    - column = column gap

*Example:*

```html
<div class="grid gap-2">
    <div class="bg-primary p-2">1</div>
    <div class="bg-primary p-2">2</div>
    <div class="bg-primary p-2">3</div>
    <div class="bg-primary p-2">4</div>
</div>
```

```html
<div class="grid row-gap-2">
    <div class="bg-primary p-2">1</div>
    <div class="bg-primary p-2">2</div>
    <div class="bg-primary p-2">3</div>
    <div class="bg-primary p-2">4</div>
</div>
```

```html
<div class="grid column-gap-2">
    <div class="bg-primary p-2">1</div>
    <div class="bg-primary p-2">2</div>
    <div class="bg-primary p-2">3</div>
    <div class="bg-primary p-2">4</div>
</div>
```

