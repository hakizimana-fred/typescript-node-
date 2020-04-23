import express, {Application, Request, Response} from 'express'

const app: Application = express()

const PORT: number = 5000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from typescript')
})


app.listen(PORT, err => {
    if(err) throw new Error('something went wrong')
    console.log(`server started on port ${PORT}`)
})