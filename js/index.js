import { Router } from './router.js'

const router = new Router()  // cria uma instancia de Router
const navLinks = document.querySelectorAll('nav ul li a')

// adicionando as rotas
router.add('404', '/pages/404.html')
router.add('/', '/pages/home.html', '../img/mountains-universe-1.png')
router.add('/universe', '/pages/universe.html', '../img/mountains-universe-2.png')
router.add('/exploration', '/pages/exploration.html', '../img/mountains-universe-3.png')


// handlers
router.handleLocation()

window.onpopstate = () => router.handleLocation()
window.route = () => router.route()

for (const link of navLinks) link.addEventListener('click', route)
