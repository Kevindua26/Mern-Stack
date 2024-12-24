let url = "http://universities.hipolabs.com/search?country=India";
let btn = document.querySelector("#ipB");

btn.addEventListener('click', async () => {
  let state = document.querySelector("#ip").value.trim();
  console.log(state);

  let colleges = await getUniversities(state);

  showColleges(colleges);
});

async function getUniversities(state) {
  try {
    // Fetch data for India
    let res = await axios.get(url);
    let data = res.data;

    // Filter colleges by the input state
    let filteredColleges = data.filter(college => 
      college["state-province"] && 
      college["state-province"].toLowerCase() === state.toLowerCase()
    );

    return filteredColleges;
  } catch (e) {
    console.log("Error: ", e);
    return [];
  }
}

async function showColleges(colleges) {
  let list = document.querySelector("#list");
  list.innerHTML = "";

  if (colleges.length === 0) {
    list.innerHTML = "<li>No colleges found for the given state.</li>";
    return;
  }

  for (let college of colleges) {
    let li = document.createElement("li");
    li.innerText = college.name;
    list.appendChild(li);
  }
}
