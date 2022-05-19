'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('index')
Route.get('/login', 'LoginController.login')
Route.post('/login', 'LoginController.logins')
Route.get('/daftar', 'UserController.daftar')
Route.post('/daftar', 'UserController.store')

Route.get('/index', 'indexController.index')