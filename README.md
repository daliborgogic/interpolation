# nuxt3-interpolation

> [Nuxt.js](https://github.com/nuxt/framework) module as directive for binding every link to catch the click event, and if it's a relative link router will push. For improved security `rel="noopener"` will be added automatically if target is `_blank`

## Setup

- Add ```nuxt3-interpolation``` as devDependencies
- Add ```nuxt3-interpolation``` to buildModules section of ```nuxt.config.ts```

```javascript
{
  buildModules: [
    // Error: exports is not defined in ES module scope
    // 'nuxt3-interpolation' 
    // Fix
    '~/node_modules/nuxt3-interpolation/index.cjs'
  ]
}
```

## Usage

```html
<div v-interpolation v-html="html" />
```

## License

[MIT](https://opensource.org/licenses/MIT)


