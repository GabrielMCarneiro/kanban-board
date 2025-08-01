import ListasPage from "../pages/listasPage"
import TarefasPage from "../pages/tarefasPage"

const listasPage = new ListasPage()
const tarefasPage = new TarefasPage()

describe('Testes Vercel App', () => {  

  it('Adicionando nova lista', () => {
    listasPage.acessarPaginaInicial()
    listasPage.criarNovaLista()
    listasPage.checarListaCriada()
  })

  it('Excluindo uma lista', () => {
    listasPage.acessarPaginaInicial()
    listasPage.apagarLista()
    listasPage.checarAusenciaDeLista()
  })

  it('Adicionando nova tarefa', () => {
    listasPage.acessarPaginaInicial()
    tarefasPage.criarNovaTarefa()
    tarefasPage.checarTarefaCriada()
  })

  it('Editando o título de uma tarefa', () => {
    listasPage.acessarPaginaInicial()
    tarefasPage.clicarNaTarefa()
    tarefasPage.editarTituloDaTarefa()
    tarefasPage.checarTituloEditado()
  })

  it('Criando tag para uma tarefa', () => {
    listasPage.acessarPaginaInicial()
    tarefasPage.clicarNaTarefa()
    tarefasPage.criarNovaTag()
    tarefasPage.checarTagCriada()
  })

  it('Apagando uma tarefa', () => {
    listasPage.acessarPaginaInicial()
    tarefasPage.apagarTarefa()
    tarefasPage.checarAusenciaDeTarefa()
  })

})