const quote = document.querySelector('blockquote');
const author = document.querySelector('span');
const buttons = document.querySelectorAll('button');

async function getQuote() {
  try {
    const response = await fetch('https://dummyjson.com/quotes/random');
    const data = await response.json();
    quote.textContent = data.quote;
    author.textContent = data.author;
  } catch (error) {
    quote.textContent = 'Unable to load quote.';
    console.error(error);
  }
}

buttons[0].addEventListener('click', getQuote);
buttons[1].addEventListener('click', () => {
  const text = `"${quote.textContent}" - ${author.textContent}`;
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
    '_blank'
  );
});

getQuote();
