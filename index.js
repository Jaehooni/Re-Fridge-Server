import express from 'express';
import cors from 'cors';
import session from 'express-session';

import { status } from './config/response.status';
import { response } from './config/response';
import { sessionOption } from './config/session.config';

import { usersRouter } from "./src/routes/users.route";
import { fridgesRouter } from './src/routes/fridges.route';
import { foodsRouter } from './src/routes/foods.route';

const app = express();

//middleware
app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use((session(sessionOption)));

//router
app.use('/users', usersRouter);
app.use('/fridges', fridgesRouter);
app.use('/foods', foodsRouter);

app.use((err, req, res, next) => {
    res.locals.message = err.message;   
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; 
    console.log("error", err);
    res.status(err.data.status || status.INTERNAL_SERVER_ERROR).send(response(err.data));
});

app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`)
});

