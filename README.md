# velour
A super-easy CSS framework for luxurious JavaScript-free animations.

## To Use

Download velour.css or velour.min.css and include it with your project's CSS:

```html
<link rel="stylesheet" type="text/css" href="path/to/velour.min.css">
```

## To Use in Conjunction with Bootstrap LESS

Copy all the files from components/less to your Bootstrap LESS directory and add the following to the bottom of the `bootstrap.less` file:

```less
// Velour Animation Framework
// For Velour includes, see the 'velour.less' file.
@import "velour.less";
```

Since these are animations, make sure you build with an autoprefixer turned on. Most LESS build tools either have one built in or that can be installed separately.