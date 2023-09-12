import { links } from "./elements.js"

export function registerEvents(router) {
  window.onload = () => {
    Object.keys(links).forEach((key) => {
      links[key].onclick = (e) => router.route(e)
    })
  }

  window.onpopstate = () => router.handle()
}
