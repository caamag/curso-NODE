import express from 'express';
import router from './routes';

const PORT = 3000
const app = express()

//using routes
app.use(express.json())
app.use(router)

app.listen(PORT, (): void => {
    console.log('App rodando na porta 3000');
})