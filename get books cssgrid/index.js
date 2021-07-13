/* 
    Library (Challenge)

    Write a displayLibrary(books) function
        - Add error catching

    Use CSS Grid instead of Flexbox to style 
        the library container
        - Use a gap of 1rem
        - Display 3 books per row
*/
// my steps 
// 1. fetch the getBooks from local file books.json-e.g line20
// 2. plan how you want the layout to be
// 3. design the layout either inside your index.html  or index.js e.g line30
//4. design how the book will look + attributes to be shown. line 30
//5. add several books to my-library div thru displayLibrary fxn + add it to body.innerHTML by mapping)
//6. display my library div
//7. check for error

async function getBooks() {
    let response = await fetch('books.json')
    let books = await response.json()
    let n = 1
    return books.map(book => {
        book.id = n
        n += 1
        return book
    })
}
//design how a book will look in html+ attributes to be shown.
function getBookHtml(book) {
    return `<div class="my-book">
        <div class="my-book-cover">${book.title}</div>
        <div class="my-book-spine"></div>
        <div class="my-book-footer"></div>
    </div>`
}

//add several books to my-library div
function displayLibrary(books) {
    document.body.innerHTML = `<div class="my-library">
        ${books.map(getBookHtml).join('')}
    </div>`
}
//display my library div
getBooks()
.then(displayLibrary)
.catch(e => console.log(e)) 


    