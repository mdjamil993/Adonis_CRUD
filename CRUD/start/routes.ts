import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/getbooks','BooksController.store')
Route.get('getbooks','BooksController.show')
Route.put('getbooks','BooksController.update')
Route.delete('getbooks',"BooksController.delete")



