const library = []
let add_book = document.getElementById('add-book')

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.haveRead = function() {
        return !read
    }
}
//  mockup books

//  make it a pure function modding a (deep)copy of the library
function addBook(library, book) {
    const lib_copy = library // ?
    lib_copy.push(book)
    return lib_copy
}

//  looping func
function showLibrary(library) {
    for (let i = 0; i < library.length; i++) {
        console.table(library[i])
    }
}