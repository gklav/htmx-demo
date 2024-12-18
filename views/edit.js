const createEditFormTemplate = (book) => `
    <form class="grid grid-cols-3"
         hx-put="/books/${book.id}"
         hx-swap="outerHTML"
         hx-target="closest li"
          >
            <input type="text" name="title" placeholder="title" class="block font-medium text-gray-700" required value="${book.title}">
            <input type="text" name="author" placeholder="author" class="block font-medium text-gray-700" required value="${book.author}">
            <button
                class="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-green-700 outline-none bg-transparent hover:bg-green-700 text-green-700 hover:text-white transition-all duration-300"
            >Edit book</button>
  </form>
`;

export default createEditFormTemplate;