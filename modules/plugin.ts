import { defineNuxtPlugin } from '#app'

let links = []
let _router = null

const navigate = event => {
  console.log('metaKey ', event.metaKey)
  const href = event.currentTarget.getAttribute('href')
  const target = event.currentTarget.getAttribute('target') ?? '_self'
  if (href && href[0] === '/') {
    event.preventDefault()
    event.metaKey 
      ? window.open(href, target)
      : _router.push(href) 
  }
}

const removeListeners = links => {
  for (let i = 0; i < links.length; i++) {
    links[i].removeEventListener('click', navigate, false)
  }
  links = []
}

const addListeners = links => {
  for (let i = 0; i < links.length; i++) {
    const target = links[i].getAttribute('target')
    // For improved security `rel="noopener"` will be added automatically if target is `_blank`
    // https://github.com/mathiasbynens/rel-noopener/
    if (target && target === '_blank') {
      const rel = links[i].getAttribute('rel') || ''
      console.log(rel)
      const attributes = rel.includes('noopener') ? rel : (rel + ' noopener')
      links[i].setAttribute('rel', attributes)
    }
    links[i].addEventListener('click', navigate, false)
  }
}


export default defineNuxtPlugin(nuxtApp => {
  console.log(nuxtApp)
  _router = nuxtApp.$router
  nuxtApp.vueApp.directive('interpolation', {
    updated() {
      removeListeners(links)
      addListeners(links)
    },
    mounted(el) {
      links = el.getElementsByTagName('a')
      addListeners(links)
    },
    beforeUnmount(el) {
      el.removeEventListener('click', removeListeners(links))
    }
  })
})