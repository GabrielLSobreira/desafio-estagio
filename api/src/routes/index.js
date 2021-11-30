import { Router } from 'express';

import AlunoController from '../app/controllers/AlunoController';
import CursoController from '../app/controllers/CursoController';
import CursoAlunoController from '../app/controllers/CursoAlunoController';

const routes = new Router();

routes.get('/alunos', AlunoController.index);
routes.post('/alunos', AlunoController.create);
routes.get('/alunos/:id', AlunoController.read);
routes.put('/alunos/:id', AlunoController.update);
routes.delete('/alunos/:id', AlunoController.delete);
routes.get('/cursos', CursoController.index);
routes.post('/cursos/aluno', CursoAlunoController.create);

export default routes;
