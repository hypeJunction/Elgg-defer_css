Deferred CSS Loading for Elgg
=============================
![Elgg 2.0](https://img.shields.io/badge/Elgg-2.0.x-orange.svg?style=flat-square)

## Features

 * Allows plugin authors to defer CSS loading until page is rendered
 * Allows to load CSS dynamically using an AMD module

## Notes

This is a very basic implementation. Currently just a proof of concept.
Currently there is no way to define priorities, or validate if requested CSS is an extension of
another CSS view etc.

## Usage

To defer css loading, call `defer_css($css_view_name)`. This will load colorbox CSS once the page is rendered.

```php
defer_css('lightbox/elgg-colorbox-theme/colorbox.css');
```

To require a CSS file client side:

```js
var elgg = require('elgg');
require('defer');
elgg.loadCSS('lightbox/elgg-colorbox-theme/colorbox.css');
```
