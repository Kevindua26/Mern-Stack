# Aggregate Functions

Aggregate Functions perform a calculation on a set of values, and return a single value.

* COUNT()
* MIN()
* MAX()
* SUM()
* AVG()

<br>
<hr>

Table -> Users

| Id(PK) | Name  | Email  | Followers  | Following  |
|--------|--------|--------|--------|--------|
| 1   | Adam   | adam@yahoo.in | 123   | 145   |
| 2   | Bob   | bob123@gmail.com | 200   | 200   |
| 3   | Cassey   | cassey@gmail.com | 200 | 206   |
| 4   | Donald   |  donald@gmail.com  | 200 | 105 |

<br>

```
SELECT max(Followings)
FROM Users;
```

| max(Followings) |
|--------|
| 206   |