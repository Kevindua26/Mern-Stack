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
* Delete
* `SELECT * FROM table_name;` View Table

<br>

```
// to create table

CREATE TABLE table_name (
    col-name1 datatype constraint,
    col-name1 datatype constraint, 
    col-name1 datatype constraint
);
```

```
// to insert new row of data

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

```
SET SQL_SAFE_UPDATES = 0; // if there's any error on updation

// to update the data

UPDATE table_name
SET col1 = val1, col2 = val2
WHERE [condition];
```

```
// to alter the data 

// add column
ALTER TABLE table_name
ADD COLUMN column-name datatype constraint;

// drop column
ALTER TABLE table_name
drop COLUMN column_name;

// rename table
ALTER TABLE table_name
RENAME TO new_table_name;

// change column (rename)
ALTER TABLE table_name
CHANGE COLUMN old_name new_name datatypes new_constraint;

// modify column (modify datatypes/constraint)
ALTER TABLE table_name
MODIFY col_name new_datatype new_constraint;
```

```
// to truncate table

TRUNCATE TABLE table_name;
```

```
// to delete rows

DELETE FROM table_name
WHERE [condition];
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
