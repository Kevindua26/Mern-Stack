let url = "https://catfact.ninja/fact";
let url1 = "https://dog.ceo/api/breeds/image/random";

async function getFacts() {
  try{
    let res = await axios.get(url);
    return res.data.fact;
  } catch (e) {
    console.log("Error: ", e);
    return "No Fact Found.";
  }
}

async function getImage() {
  try {
    let link = await axios.get(url1);
    return link.data.message;
  } catch (e) {
    return "/";
  }
}

let btn = document.querySelector("#genFact");

btn.addEventListener('click',async () => {
  let fact = await getFacts();
  console.log(fact);

  let p = document.querySelector('p');
  p.innerText = fact;
});

let btn1 = document.querySelector('#genImage');

btn1.addEventListener('click', async () => {
  let link = await getImage();
  console.log(link);

  let img = document.querySelector('#dog');
  img.setAttribute('src', link);
});