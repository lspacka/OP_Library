
let add_book = document.querySelector('.add-book')
let form_modal = document.querySelector('.form-modal')
let form = document.querySelector('.form')
let submit = document.querySelector('.submit')
let title = document.getElementById('title')
let author = document.getElementById('author')
let pages = document.getElementById('pages')
let read_check = document.querySelector('.checkbox')
let title_val = ''
let author_val = ''
let pages_val = 0
let is_read = false
const library = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.have_read = read
    this.haveRead = function() {
        return !read
    }
}

function reset() {
    title_val = ''
    author_val = ''
    pages_val = 0
    is_read = false
    form.reset()
    form_modal.close()
}

document.body.addEventListener('keydown', e => {
    if (e.key == 'Escape') form_modal.close()
})

title.addEventListener('input', () => {
    title_val = title.value
})

author.addEventListener('input', () => {
    author_val = author.value
})

pages.addEventListener('input', () => {
    pages_val = pages.value
})

read_check.addEventListener('change', () => {
    is_read = read_check.checked ? true : false
})

add_book.addEventListener('click', () => {
    form_modal.show()
})

form.addEventListener('submit', e => {
    e.preventDefault()
    let book = new Book(title_val, author_val, pages_val, is_read)
    addBook(library, book)
    showLibrary(library)
    reset()
    console.log(library)
})

// //  mock books
// let book1 = new Book(
//     'Infinite Jest',
//     'David Foster Wallace',
//     '1079 pages',
//     'false'
// )

// let book2 = new Book(
//     'Smashing Node',
//     'Guillermo Rauch',
//     '322',
//     'false'
// )

// library.push(book1, book2)
// let new_lib = addBook(library)
// showLibrary(new_lib)

//  Impure
function addBook(library, book) {
    if (book) library.push(book)
    else return
    // return library
}

//  Pure
// function addBook(library, book) {
//     const lib_copy = [...library] 
//     book && lib_copy.push(book)  
//     return lib_copy
// }

//  looping func
function showLibrary(library) {
    for (let i = 0; i < library.length; i++) {
        console.table(library[i])
    }
}