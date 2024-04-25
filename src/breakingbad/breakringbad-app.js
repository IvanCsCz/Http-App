/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async() => {
    
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();

    // console.log(data[0]);
    return data[0];
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async( element ) => {
    document.querySelector('.title').innerHTML = 'Breakingbad App';
    element.innerHTML = 'Loading...';

    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';


    const renderQuote = ( {quote, author} ) => {
        quoteLabel.innerHTML = quote;
        authoLabel.innerHTML = author;
        element.replaceChildren( quoteLabel, authoLabel, nextQuoteButton );
    }

    // Añadir listener
    nextQuoteButton.addEventListener('click', async() => {
        element.innerHTML = 'Loading...';
        const data = await fetchQuote();
        renderQuote(data);
    })
    

    fetchQuote()
        .then( renderQuote );
}