'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('/login', 'AuthController.login').middleware('guest');

Route.group(() =>{
    Route.resource('materials', 'MaterialController').apiOnly();
    Route.get('busca/:descricao', 'MaterialController.busca');
    
    Route.resource('clientes', 'ClienteController').apiOnly();
    
    Route.resource('pedidos', 'PedidoController').apiOnly();

}).middleware('auth');
