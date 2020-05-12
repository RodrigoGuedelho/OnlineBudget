import { Router } from 'express'
import UserController from './app/controllers/UserController'
import ProductsServicesController from './app/controllers/ProductsServicesController'
import SessionController from './app/controllers/SessionController'
import authMiddleware from './app/middlewares/auth'

const routes = new Router()

routes.post('/users/store', UserController.store)

routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)
routes.put('/users/update', UserController.update)
routes.post('/products-services/store', ProductsServicesController.store)
routes.put('/products-services/update', ProductsServicesController.update)
routes.post('/products-services/find', ProductsServicesController.find)

export default routes