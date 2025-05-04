# FIND in DB

```bash
db.collection.find() //returns everything

//example
college> db.student.find()
[
  {
    _id: ObjectId('68178e30c99e374970b5f899'),
    name: 'Kevin',
    age: 19,
    marks: 90
  },
  {
    _id: ObjectId('68178e6cc99e374970b5f89a'),
    name: 'Raunak',
    city: 'Delhi',
    marks: 88
  },
  {
    _id: ObjectId('68179103c99e374970b5f89b'),
    name: 'Suhani',
    age: 20,
    marks: 10
  },
  {
    _id: ObjectId('68179103c99e374970b5f89c'),
    name: 'Swati',
    age: 19,
    marks: 98
  },
  {
    _id: ObjectId('68179103c99e374970b5f89d'),
    name: 'Aadhishree',
    age: 20,
    marks: 95
  },
  {
    _id: ObjectId('6817a6e87055552b79b5f899'),
    name: 'Farah',
    performance: { marks: 99, grade: 'A' }
  }
]
```

<br>

for specific queries

```bash
db.collection.find( {key: value} ) //returns a cursor

//example
college> db.student.find( {name: "Kevin"} )
[
  {
    _id: ObjectId('68178e30c99e374970b5f899'),
    name: 'Kevin',
    age: 19,
    marks: 90
  }
]
```

```bash
db.collection.findOne( {key: value} ) //returns an actual document

//example
college> db.student.findOne( {name: "Kevin"} )
{
  _id: ObjectId('68178e30c99e374970b5f899'),
  name: 'Kevin',
  age: 19,
  marks: 90
}
```

## FIND in Nesting

```bash
db.student.find({"performance.marks": 99});
[
  {
    _id: ObjectId('6817a6e87055552b79b5f899'),
    name: 'Farah',
    performance: { marks: 99, grade: 'A' }
  }
]
```

## Query Operators

Find students whose marks are **greater than** 90
```bash
db.student.find( {marks: {$gt: 90}} )
```

Find students whose marks are **greater than equal to** 90
```bash
db.student.find( {marks: {$gte: 90}} )
```

Find students who live in **Delhi or Mumbai**
```bash
db.student.find( { city: {$in: ["Delhi", "Mumbai"]} })
```

Find students who **scored > 80 marks or live in Delhi**
```bash
db.student.find( { $or: [{marks: {$gt: 80}}, {city: "Delhi"}] } )
```

<br>

[Click here](https://www.mongodb.com/docs/manual/tutorial/insert-documents/) to go through `operators` in MongoDB.