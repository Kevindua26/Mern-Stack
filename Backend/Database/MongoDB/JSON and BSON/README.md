# JSON and BSON

JSON is a widely used data interchange format popular across many applications and technology stacks. BSON, the binary representation of JSON, is primarily used internally by MongoDB for efficient storage and data traversal.

<br>

### Binary JSON document

BSON stands for “Binary JSON,” and that's exactly what it was invented to be. A BSON file is a binary representation of the corresponding JSON file. BSON's binary-encoded serialization format encodes type and length information as well, which allows it to be traversed much more quickly compared to JSON.

BSON adds some additional data types (non-JSON-native), like dates and binary data, without which MongoDB would have been missing some valuable support.

<br>

<table>
  <tr>
    <th></th>
    <th>JSON</th>
    <th>BSON</th>
  </tr>
  <tr>
    <td>Encoding</td>
    <td>UTF-8 string</td>
    <td>Binary</td>
  </tr>
  <tr>
    <td>Data Support</td>
    <td>String, boolean, number, array, object, null</td>
    <td>String, boolean, number (integer, float, long, decimal128...), array, null, date, BinData</td>
  </tr>
  <tr>
    <td>Readability</td>
    <td>Human and machine</td>
    <td>Machine only</td>
  </tr>
</table>

<br>

JSON and BSON are indeed close cousins by design. BSON is designed as a binary representation of JSON data, with specific extensions for broader applications, and optimized for data storage and traversal. Just like JSON, BSON supports embedding objects and arrays.

One particular way in which BSON differs from JSON is in its support for some more advanced types of data. JSON does not, for instance, differentiate between integers (which are round numbers) and floating-point numbers (which have decimal precision to various degrees).

Most server-side programming languages have more sophisticated numeric types (standards include integer, regular precision floating point number — a.k.a. “float” — double-precision floating point — a.k.a. “double” — and boolean values), each with its own optimal usage for efficient mathematical operations.

<br>

[Click Here](https://www.mongodb.com/resources/basics/json-and-bson) for more info or visit https://www.mongodb.com/resources/basics/json-and-bson.