import { config } from 'dotenv';
import express, { NextFunction, Request, Response, ErrorRequestHandler } from "express";
import cors from 'cors';
import path from 'path';

import router from './api';

const app = express();
config();

app.use('/public', express.static(path.join(__dirname, '..', 'public') ));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', router)

app.get('/test', (req: Request, res: Response, next: NextFunction) => {
   res.send('webcome!')
});

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
