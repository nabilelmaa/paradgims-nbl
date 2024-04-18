// const fetchedData = fetch("https://animechan.xyz/api/random");

// fetchedData
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

async function fetchData() {
  try {
    const response = await fetch("https://animechan.xyz/api/random");
    const parsedResponse = await response.json();
    console.log(parsedResponse);
  } catch (err) {
    console.error(err);
  }
}

fetchData();

// async function fetchData() {
//   while (true) {
//     try {
//       const response = await fetch("https://animechan.xyz/api/random");
//       const text = await response.text(); // Get the response body as text
//       console.log("Response:", text); // Log the response text
//       const anime = JSON.parse(text); // Attempt to parse the response as JSON
//       if (anime.character === "Luffy") {
//         console.log(anime);
//         break;
//       } else {
//         console.log("Still searching...");
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   }
// }

// fetchData();
