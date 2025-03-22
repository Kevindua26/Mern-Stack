# Data Types in MySQL

A table contains multiple columns with specific data types such as numeric or string. MySQL provides more data types other than just numeric and string. Each data type in MySQL can be determined by the following characteristics:

* The kind of values it represents.
* The space that takes up and whether the values are a fixed-length or variable length.
* The values of the data type can be indexed or not.
* How MySQL compares the values of a specific data type.

<br>

![Data Types](https://www.mysqltutorial.org/wp-content/uploads/2024/01/mysqldatatypes.jpg)

`UNSIGNED` This is used for the integers values that the number cann't be in negative, for example- 
```
    CREATE TABLE table_name (
        number TINYINT UNSIGNED
    );
```
mean the no cann't contain the negative value in it, and the range of TINYINT(-128 to 127) will be updated to (0 to 255).