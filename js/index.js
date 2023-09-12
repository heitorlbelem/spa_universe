import { Router } from "./router.js"
import { registerEvents } from "./events.js"

const router = new Router()

router.add("/", "./pages/home.html")
router.add("/universe", "./pages/universe.html")
router.add("/exploration", "./pages/exploration.html")
router.add(404, "./pages/404.html")

registerEvents(router)
router.handle()
