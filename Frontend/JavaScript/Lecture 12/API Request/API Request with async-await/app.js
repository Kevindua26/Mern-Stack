let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let fetchResponse1 = await fetch(url);
    console.log("Response 1: ", fetchResponse1);
    let data1 = await fetchResponse1.json();
    console.log("Data 1: ", data1.fact);

    let fetchResponse2 = await fetch(url);
    console.log("Response 2: ", fetchResponse2);
    let data2 = await fetchResponse2.json();
    console.log("Data 2: ", data2.fact);

    let fetchResponse3 = await fetch(url);
    console.log("Response 3: ", fetchResponse3);
    let data3 = await fetchResponse3.json();
    console.log("Data 3: ", data3.fact);
  }
  catch (e) {
    console.log("Error: ", e);
  }
}

// This function is called to get the facts from the API.
getFacts();

// This console.log() below is just to clarify that the code is working asynchronously or not.
console.log("This is the my first API request using fetch with async-await methods.");