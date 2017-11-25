const REQUEST_URL = 'https://talaikis.com/api/quotes/random';
const TWEET_URI = 'https://twitter.com/intent/tweet?text=';

const quoteBox = document.querySelector('.quote p');
const quoteAuthor = document.querySelector('.quote .author');
const tweetBtn = document.querySelector('.tweet-quote');
const magicBtn = document.querySelector('.btn-quote');
magicBtn.onclick = handler;

function handler(e) {
  fetch(REQUEST_URL).then(data => {
    if (data.status === 200 && data.statusText === 'OK') {
      return data.json();
    } else {
      throw new Error(`Cannot process request status: ${data.status}`)
    }
  })
  .then(data => {
    quoteBox.textContent = data.quote;
    quoteAuthor.textContent = data.author;
    tweetBtn.href = TWEET_URI + encodeURIComponent(
      `${data.quote}\n—${data.author}`)
  })
}

