import express from 'express';
import ClassesControler from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();

const classesControler = new ClassesControler()
routes.post('/classes', classesControler.create);
routes.get('/classes', classesControler.index);


const connectionsController = new ConnectionsController();
routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);
export default routes;