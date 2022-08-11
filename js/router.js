
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
   * @param {*} img Caminho para imagem de fundo
   */
  add(routeName, page, img) {
    this.routes[routeName] = page
    this.routes[routeName+'#img'] = img || null
  }
  
  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handleLocation()
  }

  handleLocation() {
    const { pathname }  = window.location
    const route = this.routes[pathname] || this.routes[404]
    const img = this.routes[pathname+'#img'] 

    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html

        if(img)
          document.querySelector('body')
            .style.backgroundImage = `url(${img})`
    })

    this.makeLinkActive()
  }

  makeLinkActive() {
    const links = document.querySelectorAll('nav ul li a')
    const { pathname } = location
    const currentLink = document.querySelector(`a[href="${pathname}"]`)
  
    for(let a of links) a.classList.remove('active')
    
    if(currentLink)
      currentLink.classList.add('active')
  }

}