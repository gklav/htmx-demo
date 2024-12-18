import 'dotenv/config';
import express, {urlencoded} from 'express';
import createHomePageTemplate from "./views/index.js";
import createListTemplate from "./views/list.js";
import {BOOKS_DATA} from "./data/data.js";
import createBookTemplate from "./views/book.js";
import createEditFormTemplate from "./views/edit.js";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(urlencoded({extended: false}));

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send(createHomePageTemplate());
});

app.get('/books', (req, res) => {
    res.send(createListTemplate());
});

app.post('/books', (req, res) => {
    const {title, author}= req.body
    const id = Math.floor(Math.random() * 1000).toString();

    BOOKS_DATA.push({id, title, author});

    res.redirect(`/books/${id}`);
});

app.get('/books/:id', (req, res) => {
    const id = req.params.id

    const book = BOOKS_DATA.find(book => book.id === id);

    res.send(createBookTemplate(book));
});

app.delete('/books/:id', (req, res) => {
    const id = req.params.id;

    const index = BOOKS_DATA.findIndex(book => book.id === id);
    BOOKS_DATA.splice(index, 1);


    res.send();
});

app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id;

    const book = BOOKS_DATA.find(book => book.id === id);

    res.send(createEditFormTemplate(book));
});

app.put('/books/:id', (req, res) => {
    const { title, author } = req.body;
    const id = req.params.id;

    const newBook = { id, title, author };
    const oldBookIndex = BOOKS_DATA.findIndex(book => book.id === id);

    BOOKS_DATA[oldBookIndex] = newBook;

    res.send(createBookTemplate(newBook));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});