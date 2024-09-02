# Colors

Convey meaning through color with a handful of color utility classes.

---

### Colors

**{target}-{color}-{state}**

- Target:
    - bg = background
    - text = text
    - border = border
    - placeholder = placeholder
    - link = link
    - hover = hover
    - focus = focus
    - active = active
    - disabled = disabled
- Colors:
    - primary = blue
    - secondary = gray
    - success = green
    - danger = red
    - warning = yellow
    - info = cyan
    - light = white
    - dark = black
    - body = white
    - body-secondary = gray
    - body-tertiary = gray-dark
    - black = black
    - white = white
    - transparent = transparent
- state: (only text)
    - emphasis = high-emphasis
    - blank = normal

*Example:*

```html
<div class="bg-primary">bg-primary</div>
<p class="text-primary">text-primary</p>
<p class="text-secondary-emphasis">text-secondary-emphasis</p>
<button class="btn btn-danger">btn-danger</button>
```