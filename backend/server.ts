import express from 'express';
import { Request, Response } from 'express'

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// endpoints

app.get('/', (req: Request, res: Response) => {
    res.send('homepage')
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});