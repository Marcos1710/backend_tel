import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource("operations", "OperationsController").apiOnly()
  Route.get('operation/check', 'OperationsController.show')
}).prefix("v1").namespace("App/Controllers/Http/Operations")