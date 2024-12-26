let jsonData = '{"fact":"Purring does not always indicate that a cat is happy and healthy - some cats will purr loudly when they are terrified or in pain.","length":129}';

console.log("JSON Data: ", jsonData);

let parsedData = JSON.parse(jsonData);
console.log("Parsed Data: ", parsedData.fact);

let student = {
  name: "Kaivalaya Dua",
  age: 19,
  gender: "Male",
}
console.log("Student: ", student);

let stringifiedData = JSON.stringify(student);
console.log("Stringidied Data: ", stringifiedData);