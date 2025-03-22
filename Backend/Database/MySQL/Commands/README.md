# DATABASE QUERIES

* `CREATE DATABASE db_name;`
* `CREATE DATABASE IF NOT EXISTS db_name;`

<br>

* `DROP DATABASE db-name;`
* `DROP DATABASE IF EXISTS db_name;`

<br>

* `SHOW DATABASES;`
* `USE db-name;`
* `SHOW TABLES;`

<br>

# Table Queries

* Create
* Insert
* Update
* Alter
* Tuncate
* Delte
* `SELECT * FROM table_name;` View Table

<br>

```
CREATE TABLE table_name (
    col-name1 datatype constraint,
    col-name1 datatype constraint, 
    col-name1 datatype constraint
);
```

```
INSERT INTO table_name 
(colname1, colname2, colname3...)
VALUES
    (val_col1, val_col2, valo_col3...),
    (val_col1, val_col2, valo_col3...),
    .
    .
    .
    (val_col1, val_col2, valo_col3...);
```

<br>

# Select Command

Select and shows data in database.

* `SELECT col1, col2 FROM table_name;` - to select particular columns of the table.
* `SELECT * FROM table_name;` - to select a whole table. 

`DISTINCT` keyword is used to display the unique results only, for example- 

Users

| Id(PK) | Name  | Email  | Followers  | Following  |
|--------|--------|--------|--------|--------|
| 1   | Adam   | adam@yahoo.in | 123   | 145   |
| 2   | Bob   | bob123@gmail.com | 200   | 200   |
| 3   | Cassey   | cassey@gmail.com | 200 | 206   |
| 4   | Donald   |  donald@gmail.com  | 200 | 105 |

<br>

`SELECT DISTINCT Followers FROM Users;`

Output-

| Followers |
|--------|
| 123   |
| 200   |
