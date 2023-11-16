
let add_book = document.querySelector('.add-book')
let form_modal = document.querySelector('.form-modal')
let book_modal = document.querySelector('.book-modal')
let book_container = document.querySelector('.book-container')
let form = document.querySelector('.form')
let submit = document.querySelector('.submit')
let title_input = document.getElementById('title')
let author_input = document.getElementById('author')
let pages_input = document.getElementById('pages')
let read_check = document.querySelector('.checkbox')
let title = ''
let author = ''
let pages = 0
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

function createBookCard() {
    let card = document.createElement('div')
    // let card_info = document.createElement('div')
    let card_btns = document.createElement('div')
    let book_title = document.createElement('p')
    let book_author = document.createElement('p')
    let book_pages = document.createElement('p')
    let read_btn = document.createElement('button')
    read_btn.setAttribute('class', 'card-btn')
    read_btn.setAttribute('id', 'read-btn')
    let del_btn = document.createElement('button')
    del_btn.setAttribute('class', 'card-btn')
    del_btn.setAttribute('id', 'del-btn')

    book_title.textContent = `"${title}"`
    book_author.textContent = `${author}`
    book_pages.textContent = `${pages} pages`
    read_btn.textContent = 'Read'
    del_btn.textContent = 'Remove'

    card.appendChild(book_title)
    card.appendChild(book_author)
    card.appendChild(book_pages)
    card_btns.appendChild(read_btn)
    card_btns.appendChild(del_btn)
    card_btns.setAttribute('class', 'card-btns')
    // card_info.setAttribute('class', 'card-info')
    card.setAttribute('class', 'card')
    // card.appendChild(card_info)
    card.appendChild(card_btns)
    book_container.appendChild(card)
}

function reset() {
    title = ''
    author = ''
    pages = 0
    is_read = false
    form.reset()
    form_modal.close()
}

document.body.addEventListener('keydown', e => {
    if (e.key == 'Escape') form_modal.close()
})

title_input.addEventListener('input', () => {
    title = title_input.value
})

author_input.addEventListener('input', () => {
    author = author_input.value
})

pages_input.addEventListener('input', () => {
    pages = pages_input.value
})

read_check.addEventListener('change', () => {
    is_read = read_check.checked ? true : false
})

add_book.addEventListener('click', () => {
    form_modal.show()
})

form.addEventListener('submit', e => {
    e.preventDefault()
    let book = new Book(title, author, pages, is_read)
    addBook(library, book)
    showLibrary(library)
    createBookCard()
    reset()
    console.log(library)
})

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

function showLibrary(library) {
    for (let i = 0; i < library.length; i++) {
        console.table(library[i])
    }
}