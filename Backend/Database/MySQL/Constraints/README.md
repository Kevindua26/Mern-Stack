# Constraints

Rules for data in the table

* `NOT NULL` - columns cann't have null value
* `UNIQUE` - all values in column are different
* `DEFAULT` - sets the default value of a column
* `CHECK` - it can limit the value allowed in column

<table>
    <tr text-align="center">
        <th colspan="7">User</th>
    </tr>
    <tr>
        <th>Id</th>
        <th>Age</th>
        <th>State</th>
        <th>Name</th>
        <th>Email</th>
        <th>Followers</th>
        <th>Following</th>
    </tr>
    <tr>
        <td>1</td>
        <td>10</td>
        <td>Delhi</td>
        <td>Adam</td>
        <td>adam@yahoo.in</td>
        <td>123</td>
        <td>145</td>
    </tr>
    <tr>
        <td>2</td>
        <td>11</td>
        <td>Mumbai</td>
        <td>Bob</td>
        <td>bob123@gmail.com</td>
        <td>200</td>
        <td>200</td>
    </tr>
    <tr>
        <td>3</td>
        <td>16</td>
        <td>Delhi</td>
        <td>Casey</td>
        <td>casey@gmail.com</td>
        <td>200</td>
        <td>206</td>
    </tr>
    <tr>
        <td>4</td>
        <td>14</td>
        <td>Jaipur</td>
        <td>Donald</td>
        <td>donald@gmail.com</td>
        <td>200</td>
        <td>105</td>
    </tr>
</table>

Here as you can see, `Name` **cann't be null** in any of the case because everyone has a name.

And the `Email` for each individual should be **unique**.

The initial or default number of followers and following should be 0.
```
    CREATE TABLE User (
        Id INT,
        Name VARCHAR(30) NOT NULL,
        Email VARCHAR(50) UNIQUE,
        Follower INT DEFAULT 0,
        Following INT DEFAULT 0,
        CONSTRAINT CHECK (Age >= 13 AND State='Delhi')
    );

```

<br>

# Key Constraints

* **Primary Key**
The PRIMARY KEY constraint uniquely identifies each record in a table.
Primary keys must contain UNIQUE values, and cannot contain NULL values.
A table can have only ONE primary key; and in the table, this primary key can consist of single or multiple columns (fields).
There is only 1 Primary Key & it should not be null.

* **Foreign Key**
The FOREIGN KEY constraint is used to prevent actions that would destroy links between tables.
A FOREIGN KEY is a field (or collection of fields) in one table, that refers to the PRIMARY KEY in another table.
The table with the foreign key is called the child table, and the table with the primary key is called the referenced or parent table.
Foreign Key can have duplicate & null values.


User
| Id(PK) | Name  | Email  | Followers  | Following  |
|--------|--------|--------|--------|--------|
| 1   | Adam   | adam@yahoo.in | 123   | 145   |
| 2   | Bob   | bob123@gmail.com | 200   | 200   |
| 3   | Cassey   | cassey@gmail.com | 200 | 206   |
| 4   | Donald   |  donald@gmail.com  | 200 | 105 |


Posts
| Id(PK)  | Content  | User_id(FK) |
|--------|--------|--------|
| 101   | Hello World   | 1   |
| 102   | Bye Bye   | 2   |
| 103   | Hello World   | 3   |

```
    CREATE TABLE User (
        Id INT,
        Name VARCHAR(30) NOT NULL,
        Email VARCHAR(50) UNIQUE,
        Follower INT DEFAULT 0,
        Following INT DEFAULT 0,

        PRIMARY KEY (id)
    );

    CREATE TABLE Post(
        Id INT PRIMARY KEY,
        Content VARCHAR(100),
        User_id INT,

        FOREIGN KEY (User_id) REFERENCES user(Id)
    )
```

![EER Diagram](./image.png)