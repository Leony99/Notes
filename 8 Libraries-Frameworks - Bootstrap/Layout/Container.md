# Container

Containers are a fundamental building block of Bootstrap that contain, pad, and align your content within a given device or viewport.

---

### Default Container

Default `.container` class is a responsive, fixed-width container, meaning its max-width changes at each breakpoint.

**.container**

*Example:*

```html
<div class="container">
  <!-- Content here -->
</div>
```

### Responsive Container

Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached. After that, the default container width is applied.

**.container-{breakpoint}**

- breakpoints:
    - sm = 576px
    - md = 768px
    - lg = 992px
    - xl = 1200px
    - xxl = 1400px

*Example:*

```html
<div class="container-sm">
  <!-- Content here -->
</div>
```

### Fluid Container

Fluid containers are 100% wide at all breakpoints.

**.container-fluid**

*Example:*

```html
<div class="container-fluid">
  <!-- Content here -->
</div>
```

