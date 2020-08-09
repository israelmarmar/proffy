import express from 'express';
import ClassController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classControllers = new ClassController();
const connectController = new ConnectionsController();

routes.get('/classes', classControllers.index);
routes.post('/classes', classControllers.create);

routes.get('/connections', connectController.index);
routes.post('/connections', connectController.create);

export default routes;