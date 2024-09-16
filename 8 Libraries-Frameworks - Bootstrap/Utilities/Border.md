# Border

Use border utilities to add or remove an element’s borders. Choose from all borders or one at a time.

---

### Add Border

**border-{side}**

- Sides:
    - top = top
    - bottom = bottom
    - start = left(start)
    - end = right(end)
    - blank = all

*Example:*

```html	
<span class="border"></span>
<span class="border-top"></span>
<span class="border-end"></span>
<span class="border-bottom"></span>
<span class="border-start"></span>
```

### Remove border

When border is active: **border-{side}-0**

- Sides:
    - top = top
    - bottom = bottom
    - start = left(start)
    - end = right(end)
    - blank = all

*Example:*

```html	
<span class="border border-0"></span>
<span class="border border-top-0"></span>
<span class="border border-end-0"></span>
<span class="border border-bottom-0"></span>
<span class="border border-start-0"></span>
```

### Border size

When border is active: **border-{size}**

- Sizes:
    - 1 = 0.25rem
    - 2 = 0.5rem
    - 3 = 1rem
    - 4 = 1.5rem
    - 5 = 3rem 

*Example:*

```html	
<span class="border-top border-3"></span>
<span class="border border-2"></span>
```

### Border Color

When border is active: **border-{color}**

- Colors: See in color section

*Example:*

```html		
<span class="border border-primary"></span>
<span class="border border-primary-subtle"></span>
<span class="border border-secondary"></span>
<span class="border border-secondary-subtle"></span>
```