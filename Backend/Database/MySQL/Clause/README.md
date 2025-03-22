# CLAUSE

Table -> Users

| Id(PK) | Name  | Email  | Followers  | Following  |
|--------|--------|--------|--------|--------|
| 1   | Adam   | adam@yahoo.in | 123   | 145   |
| 2   | Bob   | bob123@gmail.com | 200   | 200   |
| 3   | Cassey   | cassey@gmail.com | 200 | 206   |
| 4   | Donald   |  donald@gmail.com  | 200 | 105 |

#### General Order 

```
SELECT col1, col2
FROM table-name
WHERE [condition]
GROUP BY col-name(s)
HAVING [condition]
ORDER BY column(s) ASC;
```

## Where Clause

To define some condition.

`
SELECT col1, col2 FROM table_name
WHERE [condition];
`

```
SELECT * FROM user 
WHERE Followers >= 200;
```

| Id(PK) | Name  | Email  | Followers  | Following  |
|--------|--------|--------|--------|--------|
| 2   | Bob   | bob123@gmail.com | 200   | 200   |
| 3   | Cassey   | cassey@gmail.com | 200 | 206   |
| 4   | Donald   |  donald@gmail.com  | 200 | 105 |

## Limit Clause

Sets an upper limit on the number of rows(tuples) rows to be returned.

`
SELECT col1, col2 FROM table_name
LIMIT [number];
`

```
SELECT * FROM user 
WHERE Followers >= 200
LIMIT 1;
```

| Id(PK) | Name  | Email  | Followers  | Following  |
|--------|--------|--------|--------|--------|
| 2   | Bob   | bob123@gmail.com | 200   | 200   |

## Order By  Clause

To sort data in ascending order (ASC) or descending order (DESC)

`SELECT col1, col2 FROM able_name ORDER BY col-name(s) ASC;`

`SELECT col1, col2 FROM able_name ORDER BY col-name(s) DESC;`

```
SELECT * FROM user 
WHERE Followers >= 200
ORDER BY Followings ASC;
```

| Id(PK) | Name  | Email  | Followers  | Following  |
|--------|--------|--------|--------|--------|
| 4   | Donald   |  donald@gmail.com  | 200 | 105 |
| 2   | Bob   | bob123@gmail.com | 200   | 200   |
| 3   | Cassey   | cassey@gmail.com | 200 | 206   |
<br>

```
SELECT * FROM user 
WHERE Followers >= 200
ORDER BY Followings DESC;
```

| Id(PK) | Name  | Email  | Followers  | Following  |
|--------|--------|--------|--------|--------|
| 3   | Cassey   | cassey@gmail.com | 200 | 206   |
| 2   | Bob   | bob123@gmail.com | 200   | 200   |
| 4   | Donald   |  donald@gmail.com  | 200 | 105 |

## Group By Clause

Groups rows that have the same values into summary rows.

It collects data from multiple records and group the result by one or more columns.

`SELECT col1, col2 FROM table_name GROUP BY col_name(s);`

**Generally we use Group By clause with some aggregate fucntions.**

```
SELECT Followers, count(Id)
FROM Users
GROUP BY Followers;
```

| Followers | count(Id)  |
|--------|--------|
| 123   | 1   |
| 200   | 2   |

## Having Clause

Similer to Where Clause i.e, applies some conditions on rows.

But it is used when we want to apply any condition after grouping.

`
SELECT col1, col2
FROM table_name
GROUP BY col-name(s)
HAVING [condition];
`

```
SELECT Name, max(Followers)
FROM Users
GROUP BY Name
HAVING max(Followers) >= 200;
```

| Names | max(Followers)  |
|--------|--------|
| Adam   | 123   |
| Bob   | 200   |
| Cassey   | 200   |
| Donald   | 200   |