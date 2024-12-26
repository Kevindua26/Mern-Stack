let url = "http://universities.hipolabs.com/search?country=";
let btn = document.querySelector("#ipB");

btn.addEventListener('click', async () => {
  let country = document.querySelector("#ip").value;
  console.log(country);

  let colleges = await getUniversities(country);

  showColleges(colleges);
})

async function getUniversities(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch(e) {
    console.log("Error: ", e);
    return [];
  }
}

async function showColleges(colleges) {
  let list = document.querySelector("#list");
  list.innerHTML = "";
  for (colleges of colleges) {
    let li = document.createElement("li");
    li.innerText = colleges.name;
    list.appendChild(li);
  }
}