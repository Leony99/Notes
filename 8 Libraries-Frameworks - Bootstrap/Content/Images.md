# Images

Opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them.

---

### Responsive images

**.img-fluid**

*Example:*

```html
<img src="path/to/image.jpg" class="img-fluid" alt="Responsive image">
```

### Image thumbnails

In addition to our border-radius utilities, you can use `.img-thumbnail` to give an image a rounded 1px border appearance.

**.img-thumbnail**

*Example:*

```html
<img src="path/to/image.jpg" class="img-thumbnail" alt="Thumbnail image">
```

### Picture

If you are using the `<picture>` element to specify multiple `<source>` elements for a specific `<img>`, make sure to add the .img-* classes to the `<img>` and not to the `<picture>` tag.

*Example:*

```html
<picture>
  <source srcset="..." type="image/svg+xml">
  <img src="..." class="img-fluid img-thumbnail" alt="...">
</picture>
```