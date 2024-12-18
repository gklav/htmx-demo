import createBookTemplate from "./book.js";
import {BOOKS_DATA} from "../data/data.js";

const createListTemplate = () => `
    <ul>
        ${BOOKS_DATA.map((book) => createBookTemplate(book)).join('')}
    </ul>
`
export default createListTemplate;