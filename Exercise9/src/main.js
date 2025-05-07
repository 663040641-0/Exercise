import './style.css';

const button = document.querySelector('#randomQuote');
const quotesWrite = document.querySelector('#quote');
const authorsWrite = document.querySelector('#author');

//random quote
button.addEventListener('click', () => {
    fetch('https://dummyjson.com/quotes/random')
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            //console.log(data.quote);
            quotesWrite.innerHTML = `Lorem Ipsum - ${data.quote}`;
            authorsWrite.innerHTML = `by - ${data.author}`;
        })
        .catch(error => {
            console.log('Error fetch data', error);
        });
})

//page append base on item per page
const quoteSelect = document.querySelector('#quoteSelect');
let itemPerPage = 5;
let currentPage = 1;
let totalQuotes = 1454;

quoteSelect.addEventListener('change', (e) => {
    itemPerPage = quoteSelect.value;
    currentPage = 1;
    fetchAndRenderQuotes(itemPerPage,0);
    renderPages(totalQuotes, itemPerPage, currentPage);

})

//show what page is on
// super hard
const pagesContainer = document.querySelector('#pagesContainer');
const page = document.createElement("a");

function renderPages(total, perPage, current) {
    pagesContainer.innerHTML = '';
    const pageCount = Math.ceil(total / perPage);
    const maxPagesToShow = 7; // You can adjust this

    let start = Math.max(1, current - 2);
    let end = Math.min(pageCount, current + 2);

    // Make sure we always show maxPagesToShow pages if possible
    if (end - start + 1 < maxPagesToShow) {
        if (start === 1) {
            end = Math.min(pageCount, start + maxPagesToShow - 1);
        } else if (end === pageCount) {
            start = Math.max(1, end - maxPagesToShow + 1);
        }
    }

    // First page & ellipsis before
    if (start > 1) {
        addPageBtn(1);
        if (start > 2) addEllipsis();
    }

    // Main page buttons
    for (let i = start; i <= end; i++) {
        addPageBtn(i);
    }

    // Ellipsis & last page
    if (end < pageCount) {
        if (end < pageCount - 1) addEllipsis();
        addPageBtn(pageCount);
    }

    function addPageBtn(i) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = `mx-1 px-2 py-1 rounded ${i === current ? "bg-blue-500 text-white" : "bg-gray-200"}`;
        if (i === current) pageBtn.disabled = true;
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            fetchAndRenderQuotes(itemPerPage, (currentPage - 1) * itemPerPage);
            renderPages(totalQuotes, itemPerPage, currentPage);
        });
        pagesContainer.appendChild(pageBtn);
    }

    function addEllipsis() {
        const el = document.createElement('span');
        el.textContent = '...';
        el.className = "mx-1";
        pagesContainer.appendChild(el);
    }
}
//


//get quotes
//quotes append
//monkey happy
const manyQuotesContainer = document.querySelector('#manyQuotesContainer');

function fetchAndRenderQuotes(limit,skip) {
    fetch(`https://dummyjson.com/quotes?limit=${limit}&skip=${skip}`)
        .then(res => res.json())
        .then(data => {
            const quotes = data.quotes; // Correct: quotes, not quote
            manyQuotesContainer.innerHTML = '';

            quotes.forEach(quote => {
                const quoteDiv = document.createElement('div');
                quoteDiv.className = 'flex flex-wrap flex-col m-5 p-8 text-2xl font-bold border-2 border-black rounded-2xl';
                const quoteText = document.createElement('p');
                const quoteAuthor = document.createElement('p');

                // Fill them with text
                quoteText.textContent = `Lorem Ipsum - ${quote.quote}`;
                quoteAuthor.textContent = `by - ${quote.author}`;

                // Append to the div
                quoteDiv.appendChild(quoteText);
                quoteDiv.appendChild(quoteAuthor);

                // Add the quote div to the container
                manyQuotesContainer.appendChild(quoteDiv);
            });
        })
        .catch(error => {
            console.log('Error fetching data', error);
        });
}
fetchAndRenderQuotes(5,0)
renderPages(totalQuotes, itemPerPage, currentPage);
