'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('/register', 'UserController.create');

Route.post('/sessions', 'SessionController.create')

Route.resource('materials', 'MaterialController')
    .apiOnly()
    .middleware('auth')