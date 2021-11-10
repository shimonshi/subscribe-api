import { CreateUser, GetUser } from '../controller/user.controller';
import { Express } from 'express';

export default (app: Express) => {
    app.get('/:id', async (req, res) => {
        const doc = await GetUser(req.params.id);
        res.json(doc);
    });
    app.post('/', async (req, res) => {
        const doc = await CreateUser({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        });
        res.json(doc);
    });
};
