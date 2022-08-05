
/**
 * Classe Router -> trata rotas de uma SPA
 * SPA = Single Page Application
 */
export class Router {

  routes = {}

  /**
   * Adiciona uma rota ao router
   * @param {*} routeName Rota
   * @param {*} page Caminho para o html a ser carregado
   */
  add(routeName, page) {
    this.routes[routeName] = page
  }
  
  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    const { pathname }  = window.location
    const route = this.routes[pathname] || this.routes[404]
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
  }

}