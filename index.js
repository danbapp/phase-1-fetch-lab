function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(res => {
    return res.json()
  })
  .then(data => renderBooks(data))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

// fetch('https://reqres.in/api/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     firstName: 'Tom',
//     lastName: 'Weather',
//     id: 303
//   })
// })
//   .then(res => {
//     return res.json()
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log('Error'))