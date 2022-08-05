import { Router } from './router.js'

const router = new Router()  // cria uma instancia de Router
const navLinks = document.querySelectorAll('nav ul li a')

// adicionando as rotas
router.add('404', '/pages/404.html')
router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploration', '/pages/exploration.html')




router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

for (const link of navLinks) link.addEventListener('click', route)
