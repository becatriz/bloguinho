// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'
import BlogLayout from '~/layouts/Blog.vue'


export default function (Vue, { router, head, isClient }) {
    head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('BlogLayout', BlogLayout)

}
