const getRandomQuote = async (URL) => {
  try {
    const response = await fetch(URL);
    const parsedResponse = await response.json();
    return parsedResponse;
  } catch (err) {
    console.error(err);
  }
};

const getQuoteByAnime = async (URL, anime) => {
  try {
    const response = await fetch(`${URL}/anime?title=${anime}`);
    const quote = await response.json();
    return quote;
  } catch (err) {
    console.error(err);
  }
};

const getQuoteByCharacter = async (URL, character) => {
  try {
    const response = await fetch(`${URL}/character?name=${character}`);
    const quotes = await response.json();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  } catch (err) {
    console.error(err);
  }
};

const anime = "Jujutsu Kaisen";
const character = "Satoru Gojo";
const URL = "https://animechan.xyz/api/quotes";

// getRandomQuote(URL)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error("Error: ", error);
//   });

// getQuoteByAnime(URL, anime)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error("Error: ", error);
//   });

getQuoteByCharacter(URL, character)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error: ", error);
  });
