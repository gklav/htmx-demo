const createBookTemplate = (book) => `
    <li data-id="${book.id}" class="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4 p-6">
        <div class="details" class="p-6" hx-get="/books/edit/${book.id}" hx-target="closest li">
            <h2 class="text-lg font-semibold">${book.title}</h2>
            <p class="mt-2 text-sm text-gray-500 leading-relaxed">by ${book.author}</p>
        </div>
        <button
            hx-delete="/books/${book.id}"
            hx-confirm="Are you sure you want to delete this book?"
            hx-target="closest li"
            hx-swap="outerHTML"
           class="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-red-700 outline-none bg-transparent hover:bg-red-700 text-red-700 hover:text-white transition-all duration-300"
        >
        Delete</button>
    </li>
`;

export default createBookTemplate;