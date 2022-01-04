import { config } from 'dotenv';
import express, { NextFunction, Request, Response, ErrorRequestHandler } from "express";
import cors from 'cors';
import path from 'path';
import mysql from './database/mysql';
import router from './api';

const app = express();
config();

app.use('/api/public', express.static(path.join(__dirname, '..', 'public') ));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', router)

app.get('/api/test', (req: Request, res: Response, next: NextFunction) => {
   res.send('webcome!')
});

mysql();

app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).send(err);
});

const port = '9999';

app.listen(port, () => {
    console.log(`
  #########################################
  🛡️  Server listening on port: ${port}  🛡️
  #########################################
`);
});
