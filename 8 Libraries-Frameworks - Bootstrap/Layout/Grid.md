# Grid

Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive.

- **container**
    - **row**
        - **col**

*Example:*

```html
<div class="container-fluid text-center">
  <div class="row">
    <div class="col">
      Column 1
    </div>
    <div class="col">
      Column 2
    </div>
    <div class="col">
      Column 3
    </div>
  </div>
</div>
```

---

### 12 Columns

12 columns represent the width of the row divided by 12, and each col can use fractions of the width.

**col-{breakpoint}-{fractions}**

- breakpoints:
    - sm = 576px
    - md = 768px
    - lg = 992px
    - xl = 1200px
    - xxl = 1400px
    - blank = all
- fractions:
    - 1 = 100%
    - 2 = 50%
    - 3 = 33.333333%
    - 4 = 25%
    - 5 = 20%
    - 6 = 16.666667%
    - 7 = 14.285714%
    - 8 = 12.5%
    - 9 = 11.111111%
    - 10 = 10%
    - 11 = 9.090909%
    - 12 = 8.333333%
    - auto = auto

*Example:*

```html
<div class="container">
    <div class="row">
      <div class="col-12 col-md-6 col-xl-2">
        Column 1
      </div>
      <div class="col-12 col-md-6 col-xl-2">
        Column 2
      </div>
      <div class="col-12 col-md-6 col-xl-2">
        Column 3
      </div>
    </div>
</div>
```

### Line Break

Add a line break between columns.

**.w-100**

*Example:*

```html
<div class="container">
    <div class="row">
      <div class="col-3">Column 1</div>
      <div class="col-3">Column 2</div>
      <div class="w-100"></div>
      <div class="col-3">Column 3</div>
    </div>
</div>
```

### Order

**order-{order}**

Change the visual order of your columns.

- order: 1 to 12

*Example:*

```html
<div class="container">
    <div class="row">
      <div class="col-3 order-2">Column 1</div>
      <div class="col-3 order-1">Column 2</div>
      <div class="col-3 order-3">Column 3</div>
    </div>
```

### Offset

Move columns to the right.

**offset-{breakpoint}-{fractions}**

- breakpoints:
    - sm = 576px
    - md = 768px
    - lg = 992px
    - xl = 1200px
    - xxl = 1400px
- fractions:
    - 1 = 1/12
    - 2 = 2/12
    - 3 = 3/12
    - 4 = 4/12
    - 5 = 5/12
    - 6 = 6/12
    - 7 = 7/12
    - 8 = 8/12
    - 9 = 9/12
    - 10 = 10/12
    - 11 = 11/12

*Example:*

```html
<div class="container">
    <div class="row">
      <div class="col offset-2">Column 1</div>
      <div class="col offset-1">Column 2</div>
      <div class="col">Column 3</div>
    </div>
</div>
```