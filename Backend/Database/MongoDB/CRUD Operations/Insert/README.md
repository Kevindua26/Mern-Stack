# INSERT in DB

### insertOne()

```bash
show collections

//example
college> show collections
student
```

```bash
db.student.insertOne( {name: "", city: "", marks: } )

//exmaple
college> db.student.insertOne( {name:"Kevin", age: 19, marks: 90} )
{
  acknowledged: true,
  insertedId: ObjectId('68178e30c99e374970b5f899')
}
```

```bash
db.student.find() //returns everything

//example
college> db.student.find()
[
  {
    _id: ObjectId('68178e30c99e374970b5f899'),
    name: 'Kevin',
    age: 19,
    marks: 90
  }
]
```

If a collection doesn't exist, MongoDB creates the collection when you first store data for that collection.

### insertMany(array of document)

```bash
db.student.insertMany([{}, {}, {}, ... ])

//example
college> db.student.insertMany([{name: "Suhani", age: 20, marks: 10}, {name: "Swati", age: 19, marks: 98}, {name: "Aadhishree", age: 20, marks: 95}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('68179103c99e374970b5f89b'),
    '1': ObjectId('68179103c99e374970b5f89c'),
    '2': ObjectId('68179103c99e374970b5f89d')
  }
}
```

```bash
db.student.find()
```

## Nesting

```bash
db.student.insertOne( {name: "Farah", performance: { marks: 99, grade: "A" }} )
```

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

<br>

[Click here](https://www.mongodb.com/docs/manual/tutorial/insert-documents/) for more info.