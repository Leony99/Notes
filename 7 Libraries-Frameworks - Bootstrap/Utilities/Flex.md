# Flex

Use flex utilities to change the display of flex items at specific breakpoints.

---

### Flex

Applies `display: flex;` to an element.

**d-{breakpoint}-flex** or **d-{breakpoint}-inline-flex**

- breakpoints:
    - sm = 576px
    - md = 768px
    - lg = 992px
    - xl = 1200px
    - xxl = 1400px
    - Blank = all

*Example:*

```html
<div class="d-flex p-2">I'm a flexbox container!</div>
<div class="d-inline-flex">I'm an inline flexbox container!</div>
<div class="d-md-flex p-2">I'm a flexbox container!</div>
```

### Flex Direction

**flex-{breakpoint}-{direction}**

- directions:
    - row = row
    - row-reverse = row-reverse
    - column = column
    - column-reverse = column-reverse

*Example:*

```html
<div class="d-flex flex-row p-2">I'm a flexbox container!</div>
<div class="d-md-flex flex-row-reverse p-2">I'm a flexbox container!</div>
```

### Justify-content/align-items

**justify-content-{breakpoint}-{direction}**

**align-items-{breakpoint}-{direction}**

- directions:
    - start = start
    - end = end
    - center = center
    - between = between
    - around = around
    - evenly = evenly

*Example:*

```html
<div class="d-flex justify-content-center p-2">I'm a flexbox container!</div>
<div class="d-md-flex justify-content-between p-2">I'm a flexbox container!</div>
```

```html
<div class="d-flex align-items-md-center p-2">I'm a flexbox container!</div>
<div class="d-md-flex align-items-between p-2">I'm a flexbox container!</div>
```