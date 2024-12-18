const createHomePageTemplate = () => `
    <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading List</title>
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body class="text-3xl text-gray-800 font-extrabold text-center">
      <header>
        <h1>My Reading List</h1>
      </header>

      <main>
        <div class="book-list">
          <button 
           hx-get="/books"
           hx-target=".book-list"
           class="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-blue-700 outline-none bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white transition-all duration-300">
                Show Books
          </button>
        </div>

        <div class="add-book-form bg-white p-8 rounded shadow-md max-w-md w-full mx-auto m-2">
          <h2 class="text-2xl font-semibold mb-4">What do you want to read?</h2>
          <form class="grid grid-cols-2 gap-4"
          hx-target=".book-list ul"
          hx-swap="beforeend"
          hx-post="/books"
          hx-on::after-request="document.querySelector('form').reset()"
          >
            <input type="text" name="title" placeholder="title" class="block font-medium text-gray-700" required>
            <input type="text" name="author" placeholder="author" class="block font-medium text-gray-700" required>
            <button
                class="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-green-700 outline-none bg-transparent hover:bg-green-700 text-green-700 hover:text-white transition-all duration-300"
            >Add book</button>
          </form>
        </div>
      </main>
    </body>
  </html>
`;

export default createHomePageTemplate;