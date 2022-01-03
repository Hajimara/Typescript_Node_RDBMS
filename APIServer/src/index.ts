import express, {NextFunction, Request, Response} from "express";

const app = express();

app.get('/test', (req: Request, res: Response, next: NextFunction) => {
   res.send('webcome!')
});

const port = '9999';
app.listen(port, () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: ${port}🛡️
  ################################################
`);
});
