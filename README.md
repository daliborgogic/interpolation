# nuxt3-interpolation

> [Nuxt.js](https://github.com/nuxt/framework) module as directive for binding every link to catch the click event, and if it's a relative link router will push. For improved security `rel="noopener"` will be added automatically if target is `_blank`

> :warning: For Nuxt 2, see [here](https://github.com/daliborgogic/nuxt-interpolation)

## Setup

### Install the module
```
npm install nuxt3-interpolation
# or
yarn add nuxt3-interpolation
```

```javascript
{
  buildModules: [
    'nuxt3-interpolation' 
  ]
}
```

## Usage

```html
<div v-html="html" v-interpolation />
```

## License

[MIT](https://opensource.org/licenses/MIT)


