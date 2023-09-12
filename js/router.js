import { app, backgroundImage, links } from "./elements.js"

export class Router {
  routes = {}

  add(route, page) {
    this.routes[route] = page
  }

  route(event) {
    event.preventDefault()

    this.changePage(event.target)
    this.handle()
  }

  handle() {
    let { pathname } = location
    const selectedLink = pathname === "/" ? "home" : pathname.replace("/", "")
    const filePath = this.routes[pathname] || this.routes[404]
    const target = links[selectedLink]

    fetch(filePath)
      .then((data) => data.text())
      .then((html) => {
        backgroundImage.src = `./assets/${selectedLink}-bg.png`
        app.innerHTML = html
        this.setCurrentLink(target)
      })
  }

  changePage(target) {
    const routeName = target.href

    window.history.pushState({}, "", routeName)
  }

  setCurrentLink(target) {
    Object.keys(links).forEach((key) => {
      links[key].classList.remove("selected")
    })
    target.classList.add("selected")
  }
}
